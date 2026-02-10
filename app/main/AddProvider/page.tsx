"use client";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Building2,
  Mail,
  Phone,
  MapPin,
  Globe,
  Upload,
  CheckCircle,
  Clock,
  Calendar,
  Users,
  FileText,
} from "lucide-react";
import { useEffect, useState } from "react";
import { GetServices } from "@/app/api/ApiHelper/serviceHelper";
import { UploadProviderLogo } from "@/app/api/ApiHelper/uploadHelper";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { CreateProvider } from "@/app/api/ApiHelper/providerHelper";
import toast from "react-hot-toast";
import { Country } from "country-state-city";
import Swal from "sweetalert2";
import { GetProviderById, updateProvider } from '@/app/api/api_client';


const MapPickerModal = dynamic(() => import("../Map/MapPickerModal"), {
  ssr: false,
});

interface AddProviderScreenProps {
  onBack?: () => void;
  provider?: any;
}

const SERVICES = [
  { id: "ivf-medications", label: "IVF Medications" },
  { id: "fertility-supplements", label: "Fertility Supplements" },
  { id: "hormone-injections", label: "Hormone Injections" },
  { id: "prescription-services", label: "Prescription Services" },
];

const TREATMENT_TYPES = [
  { id: "ivf", label: "IVF (In Vitro Fertilization)" },
  { id: "iui", label: "IUI (Intrauterine Insemination)" },
  { id: "egg-freezing", label: "Egg Freezing" },
  { id: "embryo-transfer", label: "Embryo Transfer" },
  { id: "fertility-testing", label: "Fertility Testing" },
  { id: "genetic-testing", label: "Genetic Testing" },
];

interface ServicePrice {
  id: string;
  price: string;
}

const SERVICE_CATEGORIES = [
  { id: "blood-test-labs", label: "Blood Test Laboratories", icon: "🧪" },
  { id: "ultrasound-clinics", label: "Ultrasound Clinics", icon: "📡" },
  {
    id: "injection-nurses",
    label: "Injection Nurses / Home Nurses",
    icon: "💉",
  },
  { id: "fertility-clinics", label: "Fertility Clinics (IVF)", icon: "🏥" },
  { id: "ivf-clinics", label: "IVF Clinics", icon: "🧬" },
  {
    id: "diagnostic-centers",
    label: "Diagnostic & Imaging Centers",
    icon: "⚕️",
  },
  { id: "home-sample", label: "Home Sample Collection", icon: "🏠" },
  { id: "wellness-support", label: "Wellness Support Services", icon: "✨" },
];

const URGENCY_TYPES = [
  { id: "scheduled", label: "Scheduled", color: "blue" },
  { id: "same-day", label: "Same Day", color: "orange" },
  { id: "emergency", label: "Emergency", color: "red" },
];

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface MapLocation {
  lat: number | null;
  lng: number | null;
}

interface FormData {
  name: any;
  email: any;
  phone: any;
  website: string;
  password: string;
  confirmPassword: string;

  serviceType: string;
  treatmentTypes: string[];
  treatmentSupport: boolean;
  urgencySupport: boolean;
  description: string;

  treatmentPrices: Record<string, string>;
  treatmentType: string;

  selectedServices: string[];
  servicePrices: Record<string, string>;
  selectedCategories: string[];

  address: any;
  city: string;
  country: string;
  countryCode: string;
  postalCode: string;

  mapLocation: MapLocation;

  urgencyOptions: string[];
  languagesSupported: string;
  areas: string;

  businessHours: Record<
    string,
    { enabled: boolean; startTime: string; endTime: string }
  >;

  verified: boolean;
}

export default function AddProviderScreen({
  onBack,
  provider,
}: AddProviderScreenProps) {
  const [formData, setFormData] = useState<FormData>({
    // Basic Info
    name: provider?.name || "",
    email: provider?.email || "",
    phone: provider?.phone || "",
    website: "",
    password: "",
    confirmPassword: "",

    // Company Info
    serviceType: "",
    treatmentTypes: [] as string[],
    treatmentSupport: false,
    urgencySupport: false,
    description: "",
    treatmentPrices: {} as Record<string, string>,
    treatmentType: "",

    // Services with prices
    selectedServices: [] as string[],
    servicePrices: {} as Record<string, string>,
    selectedCategories: [] as string[],

    // Location
    address: provider?.address || "",
    city: "",
    country: "",
    countryCode: "",
    postalCode: "",
    mapLocation: {
      lat: null,
      lng: null,
    },

    // Service Details
    urgencyOptions: [] as string[],
    languagesSupported: "",
    areas: "",

    // Business Hours
    businessHours: DAYS.reduce(
      (acc, day) => ({
        ...acc,
        [day]: { enabled: true, startTime: "09:00", endTime: "17:00" },
      }),
      {} as Record<
        string,
        { enabled: boolean; startTime: string; endTime: string }
      >,
    ),

    verified: provider?.verified || false,
  });
  const [services, setServices] = useState<
    { _id: string; name: string; icon?: string }[]
  >([]);

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [openMap, setOpenMap] = useState(false);
  const [providerData, setProviderData] = useState<any>(null);
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const id = searchParams.get('id');
  const [id, setId] = useState<string | null>(null);
  const isEditMode = Boolean(id);


  const isLocationSelected =
    typeof formData.mapLocation.lat === "number" &&
    typeof formData.mapLocation.lng === "number";


    useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  setId(params.get('id'));
}, []);

  useEffect(() => {
    if (!id) return;
    const fetchProvider = async () => {
      try {
        const res = await GetProviderById({ id: id });
        if (res?.data) {
          setProviderData(res.data.data);
          setServices(res.data.services || []);
        }
      } catch (error) {
        console.error("Failed to fetch provider", error);
      }
    };

    fetchProvider();
  }, [id]);


  useEffect(() => {
    if (!providerData) return;

    const provider = providerData;

    // 1️⃣ Service IDs + prices
    const treatmentTypes = provider.serviceType.map((s: any) => s.serviceId);

    const treatmentPrices = provider.serviceType.reduce(
      (acc: Record<string, string>, s: any) => {
        acc[s.serviceId] = String(s.price);
        return acc;
      },
      {}
    );

    // 2️⃣ Urgency mapping (API → UI)
    const urgencyOptions = provider.urgencySupport.map((u: string) => {
      if (u === "Same Day") return "same-day";
      if (u === "Emergency") return "emergency";
      if (u === "Next Day") return "next-day";
      return "scheduled";
    });

    // 3️⃣ Treatment support
    let treatmentType = "";
    if (provider.treatmentSupport.includes("IVF") && provider.treatmentSupport.includes("IUI")) {
      treatmentType = "both";
    } else if (provider.treatmentSupport.includes("IVF")) {
      treatmentType = "ivf";
    } else if (provider.treatmentSupport.includes("IUI")) {
      treatmentType = "iui";
    }

    // 4️⃣ Business hours
    const businessHours = DAYS.reduce((acc: any, day) => {
      const found = provider.operatingHours.find(
        (d: any) => d.day === day.toLowerCase()
      );

      acc[day] = found
        ? {
          enabled: found.isAvailable,
          startTime: found.slots?.[0]?.startTime || "09:00",
          endTime: found.slots?.[0]?.endTime || "17:00",
        }
        : {
          enabled: false,
          startTime: "09:00",
          endTime: "17:00",
        };

      return acc;
    }, {});

    // 5️⃣ Final form hydration
    setFormData((prev) => ({
      ...prev,

      name: provider.name,
      email: provider.email,
      phone: provider.mobileNumber,
      website: provider.webSiteUrl || "",
      description: provider.providerDescription || "",

      treatmentTypes,
      treatmentPrices,

      treatmentSupport: provider.treatmentSupport.length > 0,
      treatmentType,

      urgencySupport: provider.urgencySupport.length > 0,
      urgencyOptions,

      languagesSupported: provider.languageSupport.join(", "),

      address: provider.address.fullAddress,
      city: provider.address.city,
      country: provider.address.country,
      postalCode: provider.address.postalCode,
      countryCode: provider.countryCode,

      mapLocation: provider.location
        ? {
          lat: provider.location.lat,
          lng: provider.location.lng,
        }
        : { lat: null, lng: null },

      businessHours,

      verified: provider.isVerified,
    }));

    // 6️⃣ Logo
    if (provider.providerLogo) {
      setLogoPreview(provider.providerLogo);
      setLogoUrl(provider.providerLogo);
    }
  }, [providerData]);



  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await GetServices();
        console.log(res.data.data);
        if (res.data?.status) {
          setServices(res.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch services", error);
      }
    };

    fetchServices();
  }, []);

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleService = (serviceId: string) => {
    // Only allow adding services, not removing them
    if (!formData.selectedServices.includes(serviceId)) {
      handleInputChange("selectedServices", [
        ...formData.selectedServices,
        serviceId,
      ]);
    }
  };

  const removeService = (serviceId: string) => {
    const updated = formData.selectedServices.filter((id) => id !== serviceId);
    handleInputChange("selectedServices", updated);

    // Remove price when service is removed
    const updatedPrices = { ...formData.servicePrices };
    delete updatedPrices[serviceId];
    handleInputChange("servicePrices", updatedPrices);
  };

  const updateServicePrice = (serviceId: string, price: string) => {
    handleInputChange("servicePrices", {
      ...formData.servicePrices,
      [serviceId]: price,
    });
  };

  const toggleTreatmentType = (treatmentId: string) => {
    const updated = formData.treatmentTypes.includes(treatmentId)
      ? formData.treatmentTypes.filter((id) => id !== treatmentId)
      : [...formData.treatmentTypes, treatmentId];
    handleInputChange("treatmentTypes", updated);
  };

  const toggleCategory = (categoryId: string) => {
    const updated = formData.selectedCategories.includes(categoryId)
      ? formData.selectedCategories.filter((id) => id !== categoryId)
      : [...formData.selectedCategories, categoryId];
    handleInputChange("selectedCategories", updated);
  };

  const toggleUrgency = (urgencyId: string) => {
    const updated = formData.urgencyOptions.includes(urgencyId)
      ? formData.urgencyOptions.filter((id) => id !== urgencyId)
      : [...formData.urgencyOptions, urgencyId];
    handleInputChange("urgencyOptions", updated);
  };

  const toggleDay = (day: string) => {
    handleInputChange("businessHours", {
      ...formData.businessHours,
      [day]: {
        ...formData.businessHours[day],
        enabled: !formData.businessHours[day].enabled,
      },
    });
  };

  const updateDayTime = (
    day: string,
    field: "startTime" | "endTime",
    value: string,
  ) => {
    handleInputChange("businessHours", {
      ...formData.businessHours,
      [day]: {
        ...formData.businessHours[day],
        [field]: value,
      },
    });
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));

    try {
      setUploadingLogo(true);

      const res = await UploadProviderLogo(file);
      console.log(res);
      // assuming API returns: { status: true, data: { url: "https://..." } }
      if (res.data?.status) {
        setLogoUrl(res.data.data.url);
      }
    } catch (error) {
      console.error("Logo upload failed", error);
      alert("Failed to upload logo");
    } finally {
      setUploadingLogo(false);
    }
  };

  const buildProviderPayload = () => {
    // 1️⃣ services with prices
    const serviceType = Object.entries(formData.treatmentPrices).map(
      ([serviceId, price]) => ({
        serviceId,
        price: Number(price),
      }),
    );

    // 2️⃣ treatment support
    let treatmentSupport: string[] = [];
    if (formData.treatmentSupport) {
      if (formData.treatmentType === "both") {
        treatmentSupport = ["IVF", "IUI"];
      } else if (formData.treatmentType === "ivf") {
        treatmentSupport = ["IVF"];
      } else if (formData.treatmentType === "iui") {
        treatmentSupport = ["IUI"];
      }
    }

    // 3️⃣ urgency support
    const urgencySupport = formData.urgencySupport
      ? formData.urgencyOptions.map((u) =>
        u === "same-day"
          ? "Same Day"
          : u === "next-day"
            ? "Next Day"
            : u === "emergency"
              ? "Emergency"
              : "Scheduled",
      )
      : [];

    // 4️⃣ operating hours
    const operatingHours = Object.entries(formData.businessHours).map(
      ([day, value]) => ({
        day: day.toLowerCase(),
        isAvailable: value.enabled,
        slots: value.enabled
          ? [
            {
              startTime: value.startTime,
              endTime: value.endTime,
            },
          ]
          : [],
      }),
    );

    return {
      name: formData.name,
      email: formData.email,
      countryCode: formData.countryCode,
      mobileNumber: Number(formData.phone),
      webSiteUrl: formData.website,
      providerDescription: formData.description,
      providerLogo: logoUrl,
      isActive: true,
      providerVerificationStatus: false,

      serviceType,
      treatmentSupport,
      urgencySupport,

      languageSupport: formData.languagesSupported
        .split(",")
        .map((l) => l.trim()),

      operatingHours,

      address: {
        fullAddress: formData.address,
        city: formData.city,
        country: formData.country,
        postalCode: formData.postalCode,
      },

      ...(formData.mapLocation.lat != null &&
        formData.mapLocation.lng != null && {
        location: {
          lat: formData.mapLocation.lat,
          lng: formData.mapLocation.lng,
        },
      }),

      isVerified: formData.verified,
    };
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const payload = buildProviderPayload();

    const finalPayload = isEditMode
      ? { userId: id, ...payload }
      : payload;

    console.log("Submitting payload:", finalPayload);

    const res = isEditMode
      ? await updateProvider(finalPayload)
      : await CreateProvider(finalPayload);

    if (res.data?.status) {
      toast.success(
        isEditMode
          ? "Provider updated successfully 🎉"
          : "Provider created successfully 🎉"
      );
      router.push("/main/Provider");
    } else {
      Swal.fire({
        icon: "error",
        title: "Action failed",
        text: res.data?.message || "Something went wrong",
        confirmButtonColor: "#EC4899",
      });
    }
  } catch (error: any) {
    console.error("Submit error:", error);
    Swal.fire({
      icon: "error",
      title: "Request failed",
      text:
        error?.response?.data?.message ||
        "Something went wrong while saving provider",
      confirmButtonColor: "#EC4899",
    });
  }
};



  return (
    <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-2 -mt-14">
          <button
            onClick={() => router.push("/main/Provider")}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {provider ? "Edit Provider" : "Add New Provider"}
            </h2>
            <p className="text-gray-600 mt-1 mb-2">
              {provider
                ? "Update provider information"
                : "Fill in the details to add a new service provider"}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="text-gray-900">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Basic Information
                  </h3>
                </div>
                <div className="p-6 space-y-5">
                  {/* Company Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Provider Name <span className="text-pink-600">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="Enter provider name"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address <span className="text-pink-600">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="contact@provider.com"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number <span className="text-pink-600">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="+1 (555) 123-4567"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Website URL
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) =>
                            handleInputChange("website", e.target.value)
                          }
                          placeholder="https://www.provider.com"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password Fields (only for new providers) */}
                  {/* {!provider && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-gray-200">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Password <span className="text-pink-600">*</span>
                        </label>
                        <input
                          type="password"
                          required
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          placeholder="Enter password"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Confirm Password <span className="text-pink-600">*</span>
                        </label>
                        <input
                          type="password"
                          required
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          placeholder="Confirm password"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        />
                      </div>
                    </div>
                  )} */}
                </div>
              </motion.div>

              {/* Service Type & Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Service Type & Features
                  </h3>
                </div>
                <div className="p-6 space-y-5">
                  {/* <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Service Type <span className="text-pink-600">*</span>
                    </label>
                    <select
                      required
                      value={formData.serviceType}
                      onChange={(e) => handleInputChange('serviceType', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-white"
                    >
                      <option value="">Select service type</option>
                      <option value="pharmacy">Pharmacy</option>
                      <option value="clinic">Clinic</option>
                      <option value="laboratory">Laboratory</option>
                      <option value="counseling">Counseling</option>
                      <option value="transport">Transport</option>
                    </select>
                  </div> */}

                  {/* Treatment Types */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Services Types Supported
                    </label>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services.map((treatment) => {
                        const isSelected = formData.treatmentTypes.includes(
                          treatment._id,
                        );

                        return (
                          <div
                            key={treatment._id}
                            className={`p-3 rounded-xl border-2 transition-all ${isSelected
                              ? "border-pink-500 bg-pink-50"
                              : "border-gray-200 hover:border-pink-300 hover:bg-gray-50"
                              }`}
                          >
                            {/* checkbox row */}
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() =>
                                  toggleTreatmentType(treatment._id)
                                }
                                className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                              />
                              <span className="text-sm font-medium text-gray-900">
                                {treatment.name}
                              </span>
                            </label>

                            {/* price input — opens only when selected */}
                            {isSelected && (
                              <div className="mt-3">
                                <div className="relative">
                                  {/* $ symbol */}
                                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                                    $
                                  </span>

                                  <input
                                    type="number"
                                    placeholder={`Enter ${treatment.name} price`}
                                    value={
                                      formData.treatmentPrices[treatment._id] ||
                                      ""
                                    }
                                    onChange={(e) =>
                                      setFormData((prev) => ({
                                        ...prev,
                                        treatmentPrices: {
                                          ...prev.treatmentPrices,
                                          [treatment._id]: e.target.value,
                                        },
                                      }))
                                    }
                                    className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300
                   focus:border-pink-500 focus:ring-2 focus:ring-pink-200
                   outline-none transition-all"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200">
                      <label className="flex items-center justify-between cursor-pointer">
                        <div>
                          <p className="font-bold text-gray-900">
                            Treatment Support
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Provide IVF/IUI treatment
                          </p>
                        </div>
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={formData.treatmentSupport}
                            onChange={(e) => {
                              const checked = e.target.checked;

                              setFormData((prev) => ({
                                ...prev,
                                treatmentSupport: checked,
                                treatmentType: checked ? prev.treatmentType : "",
                              }));
                            }}

                            className="sr-only peer"
                          />
                          <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-pink-500 transition-colors"></div>
                          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"></div>
                        </div>
                      </label>
                      {/* Treatment Types */}
                      {formData.treatmentSupport && (
                        <div>
                          <div className="grid grid-cols-3 gap-4">
                            {[
                              { id: "ivf", label: "IVF" },
                              { id: "iui", label: "IUI" },
                              { id: "both", label: "Both" },
                            ].map((treatment) => {
                              const isSelected =
                                formData.treatmentType === treatment.id;

                              return (
                                <label
                                  key={treatment.id}
                                  className={`px-8 py-3 rounded-full cursor-pointer transition-all font-bold text-sm border-2 ${isSelected
                                    ? "bg-white text-pink-600 border-pink-500 shadow-md"
                                    : "bg-white text-pink-400 border-transparent hover:border-pink-300"
                                    }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() =>
                                      handleInputChange("treatmentType", treatment.id)
                                    }
                                    className="hidden"
                                  />
                                  {treatment.label}
                                </label>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200">
                      <label className="flex items-center justify-between cursor-pointer">
                        <div>
                          <p className="font-bold text-gray-900">
                            Urgency Support
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Urgent delivery available
                          </p>
                        </div>
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={formData.urgencySupport}
                            onChange={(e) => {
                              const checked = e.target.checked;

                              setFormData((prev) => ({
                                ...prev,
                                urgencySupport: checked,
                                urgencyOptions: checked ? prev.urgencyOptions : [],
                              }));
                            }}

                            className="sr-only peer"
                          />
                          <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-pink-500 transition-colors"></div>
                          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"></div>
                        </div>
                      </label>
                      {formData.urgencySupport && (
                        <div className="mt-4">
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              { id: "same-day", label: "Same Day" },
                              { id: "next-day", label: "Next Day" },
                              { id: "emergency", label: "Emergency" },
                              { id: "scheduled", label: "Scheduled" },
                            ].map((urgency) => {
                              const isSelected =
                                formData.urgencyOptions.includes(urgency.id);

                              return (
                                <button
                                  key={urgency.id}
                                  type="button"
                                  onClick={() => toggleUrgency(urgency.id)}
                                  className={`px-8 py-3 rounded-full font-bold text-sm transition-all border-2 whitespace-nowrap ${isSelected
                                    ? "bg-white text-pink-600 border-pink-500 shadow-md"
                                    : "bg-white text-pink-400 border-transparent hover:border-pink-300"
                                    }`}
                                >
                                  {urgency.label}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Description <span className="text-pink-600">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      placeholder="Provide a detailed description of the services offered..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Services Offered */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Services Offered
                  </h3>
                </div>
                <div className="p-6 space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-3">Select all services that apply and set their prices</p>
                    <div className="space-y-3">
                      {SERVICES.map((service) => {
                        const isSelected = formData.selectedServices.includes(service.id);
                        return (
                          <div
                            key={service.id}
                            className={`border-2 rounded-xl overflow-hidden transition-all ${isSelected ? 'border-pink-500 shadow-md' : 'border-gray-200 hover:border-pink-300'
                              }`}
                          >
                            <div className="flex items-center gap-3 p-4 bg-white">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => toggleService(service.id)}
                                className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500 cursor-pointer"
                              />
                              <span className="flex-1 font-semibold text-gray-900">{service.label}</span>
                              {isSelected && (
                                <button
                                  type="button"
                                  onClick={() => removeService(service.id)}
                                  className="px-3 py-1 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                  Remove
                                </button>
                              )}
                            </div>

                            {isSelected && (
                              <div className="px-4 pb-4 bg-gradient-to-br from-pink-50 to-purple-50 border-t border-pink-100">
                                <label className="block text-sm font-bold text-gray-700 mb-2 mt-3">
                                  Price <span className="text-pink-600">*</span>
                                </label>
                                <div className="relative">
                                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                                  <input
                                    type="number"
                                    required
                                    min="0"
                                    step="0.01"
                                    value={formData.servicePrices[service.id] || ''}
                                    onChange={(e) => updateServicePrice(service.id, e.target.value)}
                                    placeholder="0.00"
                                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-white"
                                  />
                                </div>
                                <p className="text-xs text-gray-600 mt-2">Enter the service price in USD</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Service Categories</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {SERVICE_CATEGORIES.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => toggleCategory(category.id)}
                          className={`p-4 rounded-xl border-2 transition-all text-center ${formData.selectedCategories.includes(category.id)
                            ? 'border-pink-500 bg-pink-50 shadow-md'
                            : 'border-gray-200 hover:border-pink-300 hover:bg-gray-50'
                            }`}
                        >
                          <div className="text-3xl mb-2">{category.icon}</div>
                          <p className="text-xs font-bold text-gray-900 leading-tight">{category.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div> */}

              {/* Location Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Location Details
                  </h3>
                </div>
                <div className="p-6 space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Address <span className="text-pink-600">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      placeholder="123 Medical Plaza, Suite 100"
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        City <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                        placeholder="City"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Country <span className="text-pink-600">*</span>
                      </label>
                      <select
                        required
                        value={formData.country}
                        onChange={(e) => {
                          const selectedCountry =
                            Country.getAllCountries().find(
                              (c) => c.name === e.target.value,
                            );

                          setFormData((prev) => ({
                            ...prev,
                            country: e.target.value,
                            countryCode: selectedCountry
                              ? `+${selectedCountry.phonecode}`
                              : "",
                          }));
                        }}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300
                                   focus:border-pink-500 focus:ring-2 focus:ring-pink-200
                                   outline-none transition-all bg-white"
                      >
                        <option value="">Select country</option>

                        {Country.getAllCountries().map((country) => (
                          <option key={country.isoCode} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Postal Code <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.postalCode}
                        onChange={(e) =>
                          handleInputChange("postalCode", e.target.value)
                        }
                        placeholder="12345"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Map Pin Location{" "}
                        <span className="text-pink-600">*</span>
                      </label>

                      <button
                        type="button"
                        onClick={() => setOpenMap(true)}
                        className={`w-full flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-xl border-2 transition-all font-bold
                            ${isLocationSelected
                            ? "border-green-400 bg-green-50 text-green-700 hover:bg-green-100"
                            : "border-pink-300 bg-pink-50 text-pink-600 hover:bg-pink-100"
                          }`}
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5" />
                          {isLocationSelected
                            ? "Location Selected"
                            : "Pin My Location"}
                        </div>

                        {isLocationSelected && (
                          <span className="text-xs font-medium">
                            Lat: {formData.mapLocation.lat?.toFixed(5)}, Lng:{" "}
                            {formData.mapLocation.lng?.toFixed(5)}
                          </span>
                        )}
                      </button>

                      <p className="text-xs text-gray-500 mt-2 text-center">
                        {isLocationSelected
                          ? "Click to change the selected location"
                          : "Use map to select the exact business location"}
                      </p>

                      {openMap && (
                        <MapPickerModal
                          initialLat={formData.mapLocation.lat}
                          initialLng={formData.mapLocation.lng}
                          onClose={() => setOpenMap(false)}
                          onSelect={(lat, lng) => {
                            setFormData((prev) => ({
                              ...prev,
                              mapLocation: {
                                lat: Number(lat),
                                lng: Number(lng),
                              },
                            }));
                            setOpenMap(false);
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Urgency Support Options
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {URGENCY_TYPES.map((urgency) => (
                        <button
                          key={urgency.id}
                          type="button"
                          onClick={() => toggleUrgency(urgency.id)}
                          className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${formData.urgencyOptions.includes(urgency.id)
                            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                          {urgency.label}
                        </button>
                      ))}
                    </div>
                  </div> */}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Languages Supported{" "}
                        <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.languagesSupported}
                        onChange={(e) =>
                          handleInputChange(
                            "languagesSupported",
                            e.target.value,
                          )
                        }
                        placeholder="e.g., English, Spanish, French"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                      />
                    </div>

                    {/* <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Service Areas
                      </label>
                      <input
                        type="text"
                        value={formData.areas}
                        onChange={(e) => handleInputChange('areas', e.target.value)}
                        placeholder="e.g., Downtown, North Side"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                      />
                    </div> */}
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6"
              >
                <div className="bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Business Hours
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {DAYS.map((day) => (
                      <div
                        key={day}
                        className="border border-gray-200 rounded-xl p-4 hover:border-pink-300 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <label className="flex items-center gap-3 cursor-pointer flex-1">
                            <div className="relative">
                              <input
                                type="checkbox"
                                checked={formData.businessHours[day].enabled}
                                onChange={() => toggleDay(day)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-pink-500 transition-colors"></div>
                              <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"></div>
                            </div>
                            <span className="font-bold text-gray-900">
                              {day}
                            </span>
                          </label>
                        </div>

                        {formData.businessHours[day].enabled && (
                          <div className="grid grid-cols-2 gap-4 pl-14">
                            <div>
                              <label className="block text-xs font-semibold text-gray-600 mb-1">
                                Start
                              </label>
                              <input
                                type="time"
                                value={formData.businessHours[day].startTime}
                                onChange={(e) =>
                                  updateDayTime(
                                    day,
                                    "startTime",
                                    e.target.value,
                                  )
                                }
                                className="w-full min-w-[120px] px-3 py-2 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-gray-600 mb-1">
                                End
                              </label>
                              <input
                                type="time"
                                value={formData.businessHours[day].endTime}
                                onChange={(e) =>
                                  updateDayTime(day, "endTime", e.target.value)
                                }
                                className="w-full min-w-[120px] px-3 py-2 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Summary & Actions */}
            <div className="lg:col-span-1 space-y-6">
              {/* Logo Upload Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Provider Logo
                </h3>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-32 h-32 rounded-2xl shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    {logoPreview ? (
                      <img
                        src={logoPreview}
                        alt="Provider Logo"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#EC4899] to-[#EC4899] flex items-center justify-center">
                        <Building2 className="w-16 h-16 text-white" />
                      </div>
                    )}
                  </div>
                  <label className="w-full cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />

                    <div className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-gray-300 hover:border-pink-500 hover:bg-pink-50 transition-all font-semibold text-gray-700">
                      <Upload className="w-5 h-5" />
                      {logoPreview ? "Change Logo" : "Upload Logo"}
                    </div>
                  </label>
                  <p className="text-xs text-center text-gray-500">
                    PNG, JPG or SVG
                    <br />
                    Recommended 500x500px
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">
                    Verification Status
                  </h4>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={formData.verified}
                        onChange={(e) =>
                          handleInputChange("verified", e.target.checked)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors"></div>
                      <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-bold text-gray-900">
                          Verified Provider
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        Display verification badge on profile
                      </p>
                    </div>
                  </label>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <button
                    type="submit"
                    disabled={uploadingLogo || !logoUrl}
                    className="
                              w-full py-3 rounded-xl
                              bg-gradient-to-r from-[#EC4899] to-[#EC4899]
                              text-white font-bold
                              transition-all shadow-lg hover:shadow-xl
                              hover:from-[#f02287] hover:to-[#f02287]
                              disabled:opacity-50 disabled:cursor-not-allowed
                              "
                  >
                    {uploadingLogo
                      ? "Uploading logo..."
                      : isEditMode
                        ? "Update Provider"
                        : "Add Provider"}
                  </button>
                  <button
                    type="button"
                    onClick={onBack}
                    className="w-full py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>

              {/* Quick Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-2 border-pink-200 p-6"
              >
                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-pink-600" />
                  Form Progress
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Basic Info</span>
                    <span
                      className={`font-bold ${formData.name && formData.email && formData.phone ? "text-green-600" : "text-gray-400"}`}
                    >
                      {formData.name && formData.email && formData.phone
                        ? "✓"
                        : "○"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Service Type</span>
                    <span
                      className={`font-bold ${formData.serviceType ? "text-green-600" : "text-gray-400"}`}
                    >
                      {formData.serviceType ? "✓" : "○"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Services</span>
                    <span
                      className={`font-bold ${formData.selectedServices.length > 0 ? "text-green-600" : "text-gray-400"}`}
                    >
                      {formData.selectedServices.length > 0 ? "✓" : "○"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Location</span>
                    <span
                      className={`font-bold ${formData.address && formData.city ? "text-green-600" : "text-gray-400"}`}
                    >
                      {formData.address && formData.city ? "✓" : "○"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Business Hours</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
