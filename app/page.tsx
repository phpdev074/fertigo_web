"use client";
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

const AdminLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors = { email: '', password: '' };
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    
    if (!newErrors.email && !newErrors.password) {
      console.log('Login submitted:', { email, password, rememberMe });
      router.push('/main');
      // Handle login logic here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex flex-col justify-center px-12"
        >
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-white">F</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">FertiGo</h1>
                <p className="text-sm font-semibold text-gray-600">Admin Portal</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Manage Your Platform
          </h2>
          <p className="text-lg text-gray-600 font-medium mb-8 leading-relaxed">
            Access your admin dashboard to manage providers, patients, bookings, and analytics all in one place.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Secure Access</h3>
                <p className="text-sm text-gray-600 font-medium">Protected by enterprise-grade security</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Real-time Analytics</h3>
                <p className="text-sm text-gray-600 font-medium">Monitor platform performance instantly</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">F</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">FertiGo</h1>
                <p className="text-xs font-semibold text-gray-600">Admin Portal</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600 font-medium">Sign in to access your admin dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl font-medium transition-all focus:outline-none focus:ring-4 ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                        : 'border-gray-200 focus:border-pink-500 focus:ring-pink-100'
                    }`}
                    placeholder="admin@fertigo.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 font-semibold">{errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full pl-12 pr-12 py-4 border-2 rounded-xl font-medium transition-all focus:outline-none focus:ring-4 ${
                      errors.password
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                        : 'border-gray-200 focus:border-pink-500 focus:ring-pink-100'
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 font-semibold">{errors.password}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-5 h-5 rounded border-2 border-gray-300 text-pink-600 focus:ring-4 focus:ring-pink-100 cursor-pointer"
                  />
                  <span className="text-sm font-semibold text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-sm font-bold text-pink-600 hover:text-pink-700 transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
              >
                <span>Sign In</span>
                
                <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-semibold">Need help?</span>
              </div>
            </div>

            {/* Support Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600 font-medium">
                Contact support at{' '}
                <a href="mailto:support@fertigo.com" className="font-bold text-pink-600 hover:text-pink-700 transition-colors">
                  support@fertigo.com
                </a>
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 font-medium mt-6">
            © 2024 FertiGo. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLoginScreen;