"use client";
import { motion } from 'motion/react';
import { 
  ArrowLeft, Building2, Mail, Phone, MapPin, Globe, 
  Upload, Star, CheckCircle, X
} from 'lucide-react';
import { useState } from 'react';

interface AddProviderScreenProps {
  onBack?: () => void;
  provider?: any;
}

export default function AddProviderScreen({ onBack, provider }: AddProviderScreenProps) {
  const [formData, setFormData] = useState({
    name: provider?.name || '',
    category: provider?.category || '',
    email: provider?.email || '',
    phone: provider?.phone || '',
    address: provider?.address || '',
    website: '',
    description: '',
    verified: provider?.verified || false,
  });

  const categories = [
    { id: 'fertility-clinic', label: 'Fertility Clinic' },
    { id: 'lab', label: 'Laboratory' },
    { id: 'pharmacy', label: 'Pharmacy' },
    { id: 'counseling', label: 'Counseling' },
    { id: 'transport', label: 'Transport' },
    { id: 'acupuncture', label: 'Acupuncture' },
    { id: 'nutrition', label: 'Nutrition & Wellness' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onBack?.();
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {provider ? 'Edit Provider' : 'Add New Provider'}
          </h2>
          <p className="text-gray-600 font-medium">
            {provider ? 'Update provider information' : 'Add a new service provider to the platform'}
          </p>
        </div>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <form onSubmit={handleSubmit}>
          {/* Basic Information Section */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Provider Name */}
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
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter provider name"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Category <span className="text-pink-600">*</span>
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium bg-white"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Email */}
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
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="contact@provider.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium"
                  />
                </div>
              </div>

              {/* Phone */}
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
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium"
                  />
                </div>
              </div>

              {/* Website */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Website URL
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    placeholder="https://www.provider.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Location</h3>
            <div className="grid grid-cols-1 gap-4">
              {/* Address */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Full Address <span className="text-pink-600">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="123 Medical Plaza, City, State, ZIP"
                    rows={3}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Description</h3>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Provider Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Provide a brief description of the services offered..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium resize-none"
              />
              <p className="text-xs font-semibold text-gray-500 mt-2">
                Describe the services, specializations, and unique features of this provider
              </p>
            </div>
          </div>

          {/* Logo Upload Section */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Provider Logo</h3>
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <Building2 className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-700"
                >
                  <Upload className="w-4 h-4" />
                  Upload Logo
                </button>
                <p className="text-xs font-semibold text-gray-500 mt-2">
                  PNG, JPG or SVG. Max size 2MB. Recommended 500x500px
                </p>
              </div>
            </div>
          </div>

          {/* Verification Section */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Verification Status</h3>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={formData.verified}
                  onChange={(e) => handleInputChange('verified', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-12 h-6 bg-gray-200 rounded-full peer-checked:bg-pink-500 transition-colors"></div>
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"></div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gray-400 group-hover:text-pink-500 transition-colors" />
                <span className="text-sm font-semibold text-gray-700">Mark as Verified Provider</span>
              </div>
            </label>
            <p className="text-xs font-semibold text-gray-500 mt-2 ml-14">
              Verified providers will display a verification badge on their profile
            </p>
          </div>

          {/* Action Buttons */}
          <div className="p-6 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg"
            >
              {provider ? 'Update Provider' : 'Add Provider'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
