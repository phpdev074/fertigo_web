(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sahil/fertigo_web/app/api/api.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "IMAGE_BASE_URL",
    ()=>IMAGE_BASE_URL,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST,
    "PROVIDER",
    ()=>PROVIDER,
    "PUT",
    ()=>PUT,
    "SERVICES",
    ()=>SERVICES,
    "UPLOAD",
    ()=>UPLOAD
]);
const BASE_URL = 'http://85.31.234.205:5200';
const IMAGE_BASE_URL = 'http://85.31.234.205:5200';
const POST = 'POST';
const GET = 'GET';
const PUT = 'PUT';
const PATCH = 'PATCH';
const DELETE = 'DELETE';
const UPLOAD = '/upload';
const SERVICES = '/service';
const PROVIDER = '/providers';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sahil/fertigo_web/app/api/ApiHelper/serviceHelper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GetServices",
    ()=>GetServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/app/api/api.tsx [app-client] (ecmascript)");
;
;
const GetServices = ({ page = 1, limit = 100 } = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"],
        method: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GET"],
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"]}?page=${page}&limit=${limit}`
    });
_c = GetServices;
var _c;
__turbopack_context__.k.register(_c, "GetServices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sahil/fertigo_web/app/api/ApiHelper/uploadHelper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadProviderLogo",
    ()=>UploadProviderLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/app/api/api.tsx [app-client] (ecmascript)");
;
;
const UploadProviderLogo = (file)=>{
    const formData = new FormData();
    formData.append("file", file);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"],
        method: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POST"],
        url: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UPLOAD"],
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};
_c = UploadProviderLogo;
var _c;
__turbopack_context__.k.register(_c, "UploadProviderLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sahil/fertigo_web/app/api/ApiHelper/providerHelper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateProvider",
    ()=>CreateProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/app/api/api.tsx [app-client] (ecmascript)");
;
;
const CreateProvider = (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"],
        method: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POST"],
        url: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROVIDER"],
        data: payload
    });
_c = CreateProvider;
var _c;
__turbopack_context__.k.register(_c, "CreateProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddProviderScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$ApiHelper$2f$serviceHelper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/app/api/ApiHelper/serviceHelper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$ApiHelper$2f$uploadHelper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/app/api/ApiHelper/uploadHelper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$ApiHelper$2f$providerHelper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/app/api/ApiHelper/providerHelper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$country$2d$state$2d$city$2f$lib$2f$country$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Country$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/country-state-city/lib/country.js [app-client] (ecmascript) <export default as Country>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const MapPickerModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = MapPickerModal;
const SERVICES = [
    {
        id: 'ivf-medications',
        label: 'IVF Medications'
    },
    {
        id: 'fertility-supplements',
        label: 'Fertility Supplements'
    },
    {
        id: 'hormone-injections',
        label: 'Hormone Injections'
    },
    {
        id: 'prescription-services',
        label: 'Prescription Services'
    }
];
const TREATMENT_TYPES = [
    {
        id: 'ivf',
        label: 'IVF (In Vitro Fertilization)'
    },
    {
        id: 'iui',
        label: 'IUI (Intrauterine Insemination)'
    },
    {
        id: 'egg-freezing',
        label: 'Egg Freezing'
    },
    {
        id: 'embryo-transfer',
        label: 'Embryo Transfer'
    },
    {
        id: 'fertility-testing',
        label: 'Fertility Testing'
    },
    {
        id: 'genetic-testing',
        label: 'Genetic Testing'
    }
];
const SERVICE_CATEGORIES = [
    {
        id: 'blood-test-labs',
        label: 'Blood Test Laboratories',
        icon: '🧪'
    },
    {
        id: 'ultrasound-clinics',
        label: 'Ultrasound Clinics',
        icon: '📡'
    },
    {
        id: 'injection-nurses',
        label: 'Injection Nurses / Home Nurses',
        icon: '💉'
    },
    {
        id: 'fertility-clinics',
        label: 'Fertility Clinics (IVF)',
        icon: '🏥'
    },
    {
        id: 'ivf-clinics',
        label: 'IVF Clinics',
        icon: '🧬'
    },
    {
        id: 'diagnostic-centers',
        label: 'Diagnostic & Imaging Centers',
        icon: '⚕️'
    },
    {
        id: 'home-sample',
        label: 'Home Sample Collection',
        icon: '🏠'
    },
    {
        id: 'wellness-support',
        label: 'Wellness Support Services',
        icon: '✨'
    }
];
const URGENCY_TYPES = [
    {
        id: 'scheduled',
        label: 'Scheduled',
        color: 'blue'
    },
    {
        id: 'same-day',
        label: 'Same Day',
        color: 'orange'
    },
    {
        id: 'emergency',
        label: 'Emergency',
        color: 'red'
    }
];
const DAYS = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];
function AddProviderScreen({ onBack, provider }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        // Basic Info
        name: provider?.name || '',
        email: provider?.email || '',
        phone: provider?.phone || '',
        website: '',
        password: '',
        confirmPassword: '',
        // Company Info
        serviceType: '',
        treatmentTypes: [],
        treatmentSupport: false,
        urgencySupport: false,
        description: '',
        treatmentPrices: {},
        treatmentType: '',
        // Services with prices
        selectedServices: [],
        servicePrices: {},
        selectedCategories: [],
        // Location
        address: provider?.address || '',
        city: '',
        country: '',
        postalCode: '',
        mapLocation: {
            lat: null,
            lng: null
        },
        // Service Details
        urgencyOptions: [],
        languagesSupported: '',
        areas: '',
        // Business Hours
        businessHours: DAYS.reduce({
            "AddProviderScreen.useState": (acc, day)=>({
                    ...acc,
                    [day]: {
                        enabled: true,
                        startTime: '09:00',
                        endTime: '17:00'
                    }
                })
        }["AddProviderScreen.useState"], {}),
        verified: provider?.verified || false
    });
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [logoFile, setLogoFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [logoPreview, setLogoPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [logoUrl, setLogoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadingLogo, setUploadingLogo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openMap, setOpenMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isLocationSelected = typeof formData.mapLocation.lat === "number" && typeof formData.mapLocation.lng === "number";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddProviderScreen.useEffect": ()=>{
            const fetchServices = {
                "AddProviderScreen.useEffect.fetchServices": async ()=>{
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$ApiHelper$2f$serviceHelper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetServices"])();
                        console.log(res.data.data);
                        if (res.data?.status) {
                            setServices(res.data.data);
                        }
                    } catch (error) {
                        console.error('Failed to fetch services', error);
                    }
                }
            }["AddProviderScreen.useEffect.fetchServices"];
            fetchServices();
        }
    }["AddProviderScreen.useEffect"], []);
    const handleInputChange = (field, value)=>{
        setFormData({
            ...formData,
            [field]: value
        });
    };
    const toggleService = (serviceId)=>{
        // Only allow adding services, not removing them
        if (!formData.selectedServices.includes(serviceId)) {
            handleInputChange('selectedServices', [
                ...formData.selectedServices,
                serviceId
            ]);
        }
    };
    const removeService = (serviceId)=>{
        const updated = formData.selectedServices.filter((id)=>id !== serviceId);
        handleInputChange('selectedServices', updated);
        // Remove price when service is removed
        const updatedPrices = {
            ...formData.servicePrices
        };
        delete updatedPrices[serviceId];
        handleInputChange('servicePrices', updatedPrices);
    };
    const updateServicePrice = (serviceId, price)=>{
        handleInputChange('servicePrices', {
            ...formData.servicePrices,
            [serviceId]: price
        });
    };
    const toggleTreatmentType = (treatmentId)=>{
        const updated = formData.treatmentTypes.includes(treatmentId) ? formData.treatmentTypes.filter((id)=>id !== treatmentId) : [
            ...formData.treatmentTypes,
            treatmentId
        ];
        handleInputChange('treatmentTypes', updated);
    };
    const toggleCategory = (categoryId)=>{
        const updated = formData.selectedCategories.includes(categoryId) ? formData.selectedCategories.filter((id)=>id !== categoryId) : [
            ...formData.selectedCategories,
            categoryId
        ];
        handleInputChange('selectedCategories', updated);
    };
    const toggleUrgency = (urgencyId)=>{
        const updated = formData.urgencyOptions.includes(urgencyId) ? formData.urgencyOptions.filter((id)=>id !== urgencyId) : [
            ...formData.urgencyOptions,
            urgencyId
        ];
        handleInputChange('urgencyOptions', updated);
    };
    const toggleDay = (day)=>{
        handleInputChange('businessHours', {
            ...formData.businessHours,
            [day]: {
                ...formData.businessHours[day],
                enabled: !formData.businessHours[day].enabled
            }
        });
    };
    const updateDayTime = (day, field, value)=>{
        handleInputChange('businessHours', {
            ...formData.businessHours,
            [day]: {
                ...formData.businessHours[day],
                [field]: value
            }
        });
    };
    const handleLogoUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file');
            return;
        }
        setLogoFile(file);
        setLogoPreview(URL.createObjectURL(file));
        try {
            setUploadingLogo(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$ApiHelper$2f$uploadHelper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadProviderLogo"])(file);
            console.log(res);
            // assuming API returns: { status: true, data: { url: "https://..." } }
            if (res.data?.status) {
                setLogoUrl(res.data.data.url);
            }
        } catch (error) {
            console.error('Logo upload failed', error);
            alert('Failed to upload logo');
        } finally{
            setUploadingLogo(false);
        }
    };
    const buildProviderPayload = ()=>{
        // 1️⃣ services with prices
        const serviceType = Object.entries(formData.treatmentPrices).map(([serviceId, price])=>({
                serviceId,
                price: Number(price)
            }));
        // 2️⃣ treatment support
        let treatmentSupport = [];
        if (formData.treatmentSupport) {
            if (formData.treatmentType === 'both') {
                treatmentSupport = [
                    'IVF',
                    'IUI'
                ];
            } else if (formData.treatmentType === 'ivf') {
                treatmentSupport = [
                    'IVF'
                ];
            } else if (formData.treatmentType === 'iui') {
                treatmentSupport = [
                    'IUI'
                ];
            }
        }
        // 3️⃣ urgency support
        const urgencySupport = formData.urgencySupport ? formData.urgencyOptions.map((u)=>u === 'same-day' ? 'Same Day' : u === 'next-day' ? 'Next Day' : u === 'emergency' ? 'Emergency' : 'Scheduled') : [];
        // 4️⃣ operating hours
        const operatingHours = Object.entries(formData.businessHours).map(([day, value])=>({
                day: day.toLowerCase(),
                isAvailable: value.enabled,
                slots: value.enabled ? [
                    {
                        startTime: value.startTime,
                        endTime: value.endTime
                    }
                ] : []
            }));
        return {
            name: formData.name,
            email: formData.email,
            countryCode: '+91',
            mobileNumber: Number(formData.phone),
            webSiteUrl: formData.website,
            providerDescription: formData.description,
            providerLogo: logoUrl,
            isActive: true,
            providerVerificationStatus: false,
            serviceType,
            treatmentSupport,
            urgencySupport,
            languageSupport: formData.languagesSupported.split(',').map((l)=>l.trim()),
            operatingHours,
            address: {
                fullAddress: formData.address,
                city: formData.city,
                country: formData.country,
                postalCode: formData.postalCode
            },
            ...formData.mapLocation.lat != null && formData.mapLocation.lng != null && {
                location: {
                    lat: formData.mapLocation.lat,
                    lng: formData.mapLocation.lng
                }
            },
            isVerified: formData.verified
        };
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const payload = buildProviderPayload();
            console.log("Submitting payload:", payload);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$ApiHelper$2f$providerHelper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateProvider"])(payload);
            if (res.data?.status) {
                // success
                __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Provider created successfully 🎉");
                router.push("/main/Provider");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    icon: "error",
                    title: "Provider already exists",
                    text: res.data?.message || "Mobile number already exists",
                    confirmButtonColor: "#EC4899"
                });
            }
        } catch (error) {
            console.error("Create provider error:", error);
            alert(error?.response?.data?.message || "Something went wrong while creating provider");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full bg-gradient-to-br from-gray-50 to-gray-100 p-4 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mb-2 -mt-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push("/main/Provider"),
                            className: "w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-5 h-5 text-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                lineNumber: 419,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-gray-900",
                                    children: provider ? 'Edit Provider' : 'Add New Provider'
                                }, void 0, false, {
                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mt-1 mb-2",
                                    children: provider ? 'Update provider information' : 'Fill in the details to add a new service provider'
                                }, void 0, false, {
                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                            lineNumber: 421,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                    lineNumber: 414,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "text-gray-900",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Basic Information"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 space-y-5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: [
                                                                        "Provider Name ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-pink-600",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 453,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 456,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            required: true,
                                                                            value: formData.name,
                                                                            onChange: (e)=>handleInputChange('name', e.target.value),
                                                                            placeholder: "Enter provider name",
                                                                            className: "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 457,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 455,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: [
                                                                        "Email Address ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-pink-600",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 470,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 469,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 473,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "email",
                                                                            required: true,
                                                                            value: formData.email,
                                                                            onChange: (e)=>handleInputChange('email', e.target.value),
                                                                            placeholder: "contact@provider.com",
                                                                            className: "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 474,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 472,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: [
                                                                        "Phone Number ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-pink-600",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 487,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 490,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "tel",
                                                                            required: true,
                                                                            value: formData.phone,
                                                                            onChange: (e)=>handleInputChange('phone', e.target.value),
                                                                            placeholder: "+1 (555) 123-4567",
                                                                            className: "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 491,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: "Website URL"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 503,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 507,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "url",
                                                                            value: formData.website,
                                                                            onChange: (e)=>handleInputChange('website', e.target.value),
                                                                            placeholder: "https://www.provider.com",
                                                                            className: "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 508,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 448,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 437,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.1
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 563,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Service Type & Features"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 561,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-bold text-gray-700 mb-3",
                                                                children: "Services Types Supported"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 589,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                                children: services.map((treatment)=>{
                                                                    const isSelected = formData.treatmentTypes.includes(treatment._id);
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `p-3 rounded-xl border-2 transition-all ${isSelected ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-pink-300 hover:bg-gray-50'}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center gap-3 cursor-pointer",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: isSelected,
                                                                                        onChange: ()=>toggleTreatmentType(treatment._id),
                                                                                        className: "w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 607,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-sm font-medium text-gray-900",
                                                                                        children: treatment.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 613,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 606,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-3",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "number",
                                                                                    placeholder: `Enter ${treatment.name} price`,
                                                                                    value: formData.treatmentPrices[treatment._id] || '',
                                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                                ...prev,
                                                                                                treatmentPrices: {
                                                                                                    ...prev.treatmentPrices,
                                                                                                    [treatment._id]: e.target.value
                                                                                                }
                                                                                            })),
                                                                                    className: "w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 621,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 620,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, treatment._id, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 598,
                                                                        columnNumber: 27
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 593,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 588,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center justify-between cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-bold text-gray-900",
                                                                                        children: "Treatment Support"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 649,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-600 mt-1",
                                                                                        children: "Provide IVF/IUI treatment"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 650,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 648,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: formData.treatmentSupport,
                                                                                        onChange: (e)=>handleInputChange('treatmentSupport', e.target.checked),
                                                                                        className: "sr-only peer"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 653,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-pink-500 transition-colors"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 659,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 660,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 652,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 647,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    formData.treatmentSupport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap gap-4",
                                                                            children: [
                                                                                {
                                                                                    id: 'ivf',
                                                                                    label: 'IVF'
                                                                                },
                                                                                {
                                                                                    id: 'iui',
                                                                                    label: 'IUI'
                                                                                },
                                                                                {
                                                                                    id: 'both',
                                                                                    label: 'Both'
                                                                                }
                                                                            ].map((treatment)=>{
                                                                                const isSelected = formData.treatmentType === treatment.id;
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: `px-8 py-3 rounded-full cursor-pointer transition-all font-bold text-sm border-2 ${isSelected ? 'bg-white text-pink-600 border-pink-500 shadow-md' : 'bg-white text-pink-400 border-transparent hover:border-pink-300'}`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: isSelected,
                                                                                            onChange: ()=>handleInputChange('treatmentType', treatment.id),
                                                                                            className: "hidden"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                            lineNumber: 682,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        treatment.label
                                                                                    ]
                                                                                }, treatment.id, true, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 675,
                                                                                    columnNumber: 33
                                                                                }, this);
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 666,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 665,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 646,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center justify-between cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-bold text-gray-900",
                                                                                        children: "Urgency Support"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 702,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-600 mt-1",
                                                                                        children: "Urgent delivery available"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 703,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 701,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: formData.urgencySupport,
                                                                                        onChange: (e)=>handleInputChange('urgencySupport', e.target.checked),
                                                                                        className: "sr-only peer"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 706,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-pink-500 transition-colors"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 712,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 713,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 705,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 700,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    formData.urgencySupport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap gap-4",
                                                                            children: [
                                                                                {
                                                                                    id: 'same-day',
                                                                                    label: 'Same Day'
                                                                                },
                                                                                {
                                                                                    id: 'next-day',
                                                                                    label: 'Next Day'
                                                                                },
                                                                                {
                                                                                    id: 'emergency',
                                                                                    label: 'Emergency'
                                                                                },
                                                                                {
                                                                                    id: 'scheduled',
                                                                                    label: 'Scheduled'
                                                                                }
                                                                            ].map((urgency)=>{
                                                                                const isSelected = formData.urgencyOptions.includes(urgency.id);
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>toggleUrgency(urgency.id),
                                                                                    className: `px-8 py-3 rounded-full font-bold text-sm transition-all border-2 ${isSelected ? 'bg-white text-pink-600 border-pink-500 shadow-md' : 'bg-white text-pink-400 border-transparent hover:border-pink-300'}`,
                                                                                    children: urgency.label
                                                                                }, urgency.id, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 728,
                                                                                    columnNumber: 33
                                                                                }, this);
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 718,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 717,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-bold text-gray-700 mb-2",
                                                                children: [
                                                                    "Description ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-pink-600",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 750,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 749,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                required: true,
                                                                value: formData.description,
                                                                onChange: (e)=>handleInputChange('description', e.target.value),
                                                                placeholder: "Provide a detailed description of the services offered...",
                                                                rows: 4,
                                                                className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 752,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 748,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 567,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 555,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.3
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 866,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Location Details"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 865,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 864,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-bold text-gray-700 mb-2",
                                                                children: [
                                                                    "Full Address ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-pink-600",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 873,
                                                                        columnNumber: 36
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 872,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                required: true,
                                                                value: formData.address,
                                                                onChange: (e)=>handleInputChange('address', e.target.value),
                                                                placeholder: "123 Medical Plaza, Suite 100",
                                                                rows: 2,
                                                                className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 875,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 871,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-3 gap-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                                        children: [
                                                                            "City ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-pink-600",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 888,
                                                                                columnNumber: 30
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 887,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        required: true,
                                                                        value: formData.city,
                                                                        onChange: (e)=>handleInputChange('city', e.target.value),
                                                                        placeholder: "City",
                                                                        className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 890,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 886,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                                        children: [
                                                                            "Country ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-pink-600",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 902,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 901,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        required: true,
                                                                        value: formData.country,
                                                                        onChange: (e)=>handleInputChange("country", e.target.value),
                                                                        className: "w-full px-4 py-3 rounded-xl border border-gray-300   focus:border-pink-500 focus:ring-2 focus:ring-pink-200   outline-none transition-all bg-white",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Select country"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 912,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$country$2d$state$2d$city$2f$lib$2f$country$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Country$3e$__["Country"].getAllCountries().map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: country.name,
                                                                                    children: country.name
                                                                                }, country.isoCode, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 915,
                                                                                    columnNumber: 27
                                                                                }, this))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 904,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 900,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                                        children: [
                                                                            "Postal Code ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-pink-600",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 924,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 923,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        required: true,
                                                                        value: formData.postalCode,
                                                                        onChange: (e)=>handleInputChange('postalCode', e.target.value),
                                                                        placeholder: "12345",
                                                                        className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 926,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 922,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                                        children: [
                                                                            "Map Pin Location ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-pink-600",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 938,
                                                                                columnNumber: 42
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 937,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setOpenMap(true),
                                                                        className: `w-full flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-xl border-2 transition-all font-bold
                            ${isLocationSelected ? "border-green-400 bg-green-50 text-green-700 hover:bg-green-100" : "border-pink-300 bg-pink-50 text-pink-600 hover:bg-pink-100"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                        className: "w-5 h-5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 951,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    isLocationSelected ? "Location Selected" : "Pin My Location"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 950,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            isLocationSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs font-medium",
                                                                                children: [
                                                                                    "Lat: ",
                                                                                    formData.mapLocation.lat?.toFixed(5),
                                                                                    ", Lng:",
                                                                                    " ",
                                                                                    formData.mapLocation.lng?.toFixed(5)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 956,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 941,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 mt-2 text-center",
                                                                        children: isLocationSelected ? "Click to change the selected location" : "Use map to select the exact business location"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 963,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    openMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapPickerModal, {
                                                                        initialLat: formData.mapLocation.lat,
                                                                        initialLng: formData.mapLocation.lng,
                                                                        onClose: ()=>setOpenMap(false),
                                                                        onSelect: (lat, lng)=>{
                                                                            setFormData((prev)=>({
                                                                                    ...prev,
                                                                                    mapLocation: {
                                                                                        lat: Number(lat),
                                                                                        lng: Number(lng)
                                                                                    }
                                                                                }));
                                                                            setOpenMap(false);
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 970,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 936,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 885,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: [
                                                                        "Languages Supported ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-pink-600",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 1014,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 1013,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    required: true,
                                                                    value: formData.languagesSupported,
                                                                    onChange: (e)=>handleInputChange('languagesSupported', e.target.value),
                                                                    placeholder: "e.g., English, Spanish, French",
                                                                    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 1016,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 1012,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 870,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 858,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.4
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 1052,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Business Hours"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 1051,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1050,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: DAYS.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border border-gray-200 rounded-xl p-4 hover:border-pink-300 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center gap-3 cursor-pointer flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: formData.businessHours[day].enabled,
                                                                                        onChange: ()=>toggleDay(day),
                                                                                        className: "sr-only peer"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 1063,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-pink-500 transition-colors"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 1069,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 1070,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 1062,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-bold text-gray-900",
                                                                                children: day
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 1072,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1061,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 1060,
                                                                    columnNumber: 25
                                                                }, this),
                                                                formData.businessHours[day].enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-3 pl-14",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-xs font-semibold text-gray-600 mb-1",
                                                                                    children: "Start"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 1079,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "time",
                                                                                    value: formData.businessHours[day].startTime,
                                                                                    onChange: (e)=>updateDayTime(day, 'startTime', e.target.value),
                                                                                    className: "w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 1080,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 1078,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-xs font-semibold text-gray-600 mb-1",
                                                                                    children: "End"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 1088,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "time",
                                                                                    value: formData.businessHours[day].endTime,
                                                                                    onChange: (e)=>updateDayTime(day, 'endTime', e.target.value),
                                                                                    className: "w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 1089,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 1087,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 1077,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, day, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 1059,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 1057,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1056,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 1044,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                lineNumber: 434,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-gray-900 mb-4",
                                                children: "Provider Logo"
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-32 h-32 rounded-2xl shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center",
                                                        children: logoPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: logoPreview,
                                                            alt: "Provider Logo",
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 1117,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-full bg-gradient-to-br from-[#EC4899] to-[#EC4899] flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                className: "w-16 h-16 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1124,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 1123,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1115,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "w-full cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                onChange: handleLogoUpload,
                                                                className: "hidden"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1129,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-gray-300 hover:border-pink-500 hover:bg-pink-50 transition-all font-semibold text-gray-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1137,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    logoPreview ? 'Change Logo' : 'Upload Logo'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1136,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1128,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-center text-gray-500",
                                                        children: [
                                                            "PNG, JPG or SVG",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1142,
                                                                columnNumber: 36
                                                            }, this),
                                                            "Recommended 500x500px"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1141,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 pt-6 border-t border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-bold text-gray-900 mb-3",
                                                        children: "Verification Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1147,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-start gap-3 cursor-pointer group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: formData.verified,
                                                                        onChange: (e)=>handleInputChange('verified', e.target.checked),
                                                                        className: "sr-only peer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1150,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1156,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1157,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1149,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                className: "w-5 h-5 text-green-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 1161,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm font-bold text-gray-900",
                                                                                children: "Verified Provider"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 1162,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1160,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-600 mt-1",
                                                                        children: "Display verification badge on profile"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1164,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1159,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1148,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 pt-6 border-t border-gray-200 space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: uploadingLogo || !logoUrl,
                                                        className: "   w-full py-3 rounded-xl   bg-gradient-to-r from-[#EC4899] to-[#EC4899]   text-white font-bold   transition-all shadow-lg hover:shadow-xl   hover:from-[#f02287] hover:to-[#f02287]   disabled:opacity-50 disabled:cursor-not-allowed   ",
                                                        children: uploadingLogo ? "Uploading logo..." : provider ? "Update Provider" : "Add Provider"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1172,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: onBack,
                                                        className: "w-full py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1190,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1171,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 1108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.1
                                        },
                                        className: "bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-2 border-pink-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-bold text-gray-900 mb-3 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "w-4 h-4 text-pink-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1208,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Form Progress"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1207,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Basic Info"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1213,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${formData.name && formData.email && formData.phone ? 'text-green-600' : 'text-gray-400'}`,
                                                                children: formData.name && formData.email && formData.phone ? '✓' : '○'
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1214,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1212,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Service Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1219,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${formData.serviceType ? 'text-green-600' : 'text-gray-400'}`,
                                                                children: formData.serviceType ? '✓' : '○'
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1220,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1218,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Services"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1225,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${formData.selectedServices.length > 0 ? 'text-green-600' : 'text-gray-400'}`,
                                                                children: formData.selectedServices.length > 0 ? '✓' : '○'
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1226,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1224,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Location"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1231,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${formData.address && formData.city ? 'text-green-600' : 'text-gray-400'}`,
                                                                children: formData.address && formData.city ? '✓' : '○'
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1232,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1230,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Business Hours"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1237,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-green-600",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1238,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1236,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1211,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 1201,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                lineNumber: 1106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                    lineNumber: 431,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
            lineNumber: 412,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
        lineNumber: 411,
        columnNumber: 5
    }, this);
}
_s(AddProviderScreen, "2QjItdSmGX82EEgMWfbHr2xdYfU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = AddProviderScreen;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapPickerModal");
__turbopack_context__.k.register(_c1, "AddProviderScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=sahil_fertigo_web_app_c53fc52b._.js.map