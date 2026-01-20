"use client";
import { motion } from 'motion/react';
import { 
  User, Mail, Phone, MapPin, Calendar, Shield, Lock, 
  Edit, Save, X, Eye, EyeOff, CheckCircle, Settings as SettingsIcon
} from 'lucide-react';
import { useState } from 'react';

interface AdminProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  location: string;
  joinedDate: string;
  avatar: string;
  lastLogin: string;
}

export default function SettingsScreen() {
  const [view, setView] = useState<'profile' | 'change-password'>('profile');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  
  // Mock admin profile data
  const [adminProfile, setAdminProfile] = useState<AdminProfile>({
    id: 'ADM-001',
    name: 'Admin',
    email: 'sarah.johnson@fertigo.com',
    phone: '+1 (555) 123-4567',
    role: 'Admin',
    location: 'San Francisco, CA',
    joinedDate: 'Jan 15, 2025',
    avatar: 'SJ',
    lastLogin: 'Today at 10:30 AM',
  });

  const [editedProfile, setEditedProfile] = useState<AdminProfile>(adminProfile);

  // Change Password State
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  // Handle profile edit
  const handleSaveProfile = () => {
    setAdminProfile(editedProfile);
    setIsEditingProfile(false);
  };

  const handleCancelEdit = () => {
    setEditedProfile(adminProfile);
    setIsEditingProfile(false);
  };

  // Handle password change
  const handleChangePassword = () => {
    setPasswordError('');
    setPasswordSuccess(false);

    // Validation
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setPasswordError('All fields are required');
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setPasswordError('New password must be at least 8 characters');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    // Simulate password change
    setPasswordSuccess(true);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });

    setTimeout(() => {
      setPasswordSuccess(false);
      setView('profile');
    }, 2000);
  };

  // Profile View
  if (view === 'profile') {
    return (
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Settings</h2>
          <p className="text-gray-600 font-medium">Manage your account settings and preferences</p>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-pink-50 to-purple-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {adminProfile.avatar}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{adminProfile.name}</h3>
                  <p className="text-sm font-semibold text-gray-600">{adminProfile.role}</p>
                </div>
              </div>
              {!isEditingProfile && (
                <button
                  onClick={() => setIsEditingProfile(true)}
                  className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                {isEditingProfile ? (
                  <input
                    type="text"
                    value={editedProfile.name}
                    onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <User className="w-5 h-5 text-gray-400" />
                    <p className="text-sm font-bold text-gray-900">{adminProfile.name}</p>
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                {isEditingProfile ? (
                  <input
                    type="email"
                    value={editedProfile.email}
                    onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <p className="text-sm font-bold text-gray-900">{adminProfile.email}</p>
                  </div>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                {isEditingProfile ? (
                  <input
                    type="tel"
                    value={editedProfile.phone}
                    onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <p className="text-sm font-bold text-gray-900">{adminProfile.phone}</p>
                  </div>
                )}
              </div>

              {/* Role */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Role
                </label>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Shield className="w-5 h-5 text-gray-400" />
                  <p className="text-sm font-bold text-gray-900">{adminProfile.role}</p>
                </div>
              </div>
            </div>

            {/* Edit Actions */}
            {isEditingProfile && (
              <div className="flex flex-col-reverse md:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleCancelEdit}
                  className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Cancel
                </button>
                <button
                  onClick={handleSaveProfile}
                  className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Security</h3>
                <p className="text-sm font-semibold text-gray-600">Manage your account security</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Last Login */}
              <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Last Login</p>
                  <p className="text-xs font-semibold text-gray-600">{adminProfile.lastLogin}</p>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>

              {/* Change Password Button */}
              <button
                onClick={() => setView('change-password')}
                className="w-full p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border-2 border-pink-200 hover:border-pink-300 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Lock className="w-5 h-5 text-pink-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900">Change Password</p>
                    <p className="text-xs font-semibold text-gray-600">Update your account password</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                  <Edit className="w-4 h-4 text-pink-600" />
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Change Password View
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            setView('profile');
            setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
            setPasswordError('');
            setPasswordSuccess(false);
          }}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Change Password</h2>
          <p className="text-gray-600 font-medium">Update your account password</p>
        </div>
      </div>

      {/* Change Password Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Lock className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Password Security</h3>
              <p className="text-sm font-semibold text-gray-600">Keep your account secure</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Success Message */}
          {passwordSuccess && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-sm font-semibold text-green-800">Password changed successfully!</p>
            </div>
          )}

          {/* Error Message */}
          {passwordError && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm font-semibold text-red-800">{passwordError}</p>
            </div>
          )}

          {/* Current Password */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Current Password <span className="text-pink-600">*</span>
            </label>
            <div className="relative">
              <input
                type={showPasswords.current ? 'text' : 'password'}
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => setShowPasswords({ ...showPasswords, current: !showPasswords.current })}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPasswords.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              New Password <span className="text-pink-600">*</span>
            </label>
            <div className="relative">
              <input
                type={showPasswords.new ? 'text' : 'password'}
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowPasswords({ ...showPasswords, new: !showPasswords.new })}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPasswords.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <p className="text-xs font-semibold text-gray-500 mt-1">
              Must be at least 8 characters long
            </p>
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Confirm New Password <span className="text-pink-600">*</span>
            </label>
            <div className="relative">
              <input
                type={showPasswords.confirm ? 'text' : 'password'}
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium"
                placeholder="Confirm new password"
              />
              <button
                type="button"
                onClick={() => setShowPasswords({ ...showPasswords, confirm: !showPasswords.confirm })}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPasswords.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Password Requirements */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-bold text-gray-900 mb-2">Password Requirements:</p>
            <ul className="text-xs font-semibold text-gray-600 space-y-1">
              <li>• Minimum 8 characters long</li>
              <li>• Mix of uppercase and lowercase letters recommended</li>
              <li>• Include numbers and special characters for stronger security</li>
              <li>• Avoid using personal information</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 flex flex-col-reverse md:flex-row gap-3">
          <button
            onClick={() => {
              setView('profile');
              setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
              setPasswordError('');
            }}
            className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <X className="w-5 h-5" />
            Cancel
          </button>
          <button
            onClick={handleChangePassword}
            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <Lock className="w-5 h-5" />
            Change Password
          </button>
        </div>
      </motion.div>

      {/* Security Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-purple-50 rounded-2xl p-6 border border-purple-200"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-purple-900 mb-1">Security Tip</p>
            <p className="text-xs font-semibold text-purple-700">
              Change your password regularly and never share it with anyone. Enable two-factor authentication for additional security.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}