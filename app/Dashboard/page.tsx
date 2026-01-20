"use client";
import { motion } from 'motion/react';
import { 
  Menu, X, Bell, Search, ChevronDown, Users, Building2, Calendar, 
  DollarSign, TrendingUp, TrendingDown, MoreVertical, Eye, Edit, 
  Trash2, Download, Filter, Home, UserCircle, Settings, LogOut,
  FileText, BarChart3, MessageSquare, Package, Mail, FileCode, CreditCard, PlusCircle,
  LayoutDashboard, Activity, ShoppingBag, Star, Globe
} from 'lucide-react';
import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import path from 'path';
import { navigate } from 'next/dist/client/components/segment-cache/navigation';
import { useRouter } from 'next/navigation';


// import { UserManagementScreen } from './UserManagementScreen';
// import { AdminServicesScreen } from './AdminServicesScreen';
// import { BookingHistoryScreen } from './BookingHistoryScreen';
// import { ProviderManagementScreen } from './ProviderManagementScreen';
// import { AddProviderScreen } from './AddProviderScreen';

export default function AdminDashboardScreen() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddProvider, setShowAddProvider] = useState(false);
  const [editingProvider, setEditingProvider] = useState<any>(null);

  const router = useRouter();

  const userTypeData = [
    { name: 'Patients', value: 1245, color: '#ec4899' },
    { name: 'Providers', value: 328, color: '#8b5cf6' },
    { name: 'Clinics', value: 156, color: '#06b6d4' },
  ];

  const navigationItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard',  path: '/' },
    { id: 'patients-management', icon: Users, label: 'Patients',path: '/UserManagement'  },
    { id: 'provider-management', icon: Building2, label: 'Provider',path: '/Provider'  },
    { id: 'booking-history', icon: Calendar, label: 'Booking History',  path: '/BookingHistoryScreen' },
    { id: 'contact-us', icon: Mail, label: 'Contact Us',path: '/ContactUs'  },
    { id: 'content-management', icon: FileCode, label: 'Content',path: '/ContentPages'  },
    { id: 'setting', icon: Settings, label: 'Setting',path: '/Settings'  },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className="fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 lg:translate-x-0"
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-white">F</span>
            </div>
            <div>
              <h1 className="font-bold text-gray-900">FertiGo</h1>
              <p className="text-xs font-semibold text-gray-500">Admin Panel</p>
            </div>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                 router.push(item.path);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-red-600 hover:bg-red-50 transition-all">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden pointer-events-none"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Search */}
            <div className="hidden md:flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-2 w-80">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search users, bookings, providers..."
                className="bg-transparent border-none outline-none text-sm font-medium text-gray-900 w-full placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
            </button>

            {/* Admin Profile */}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">AD</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-gray-900">Admin User</p>
                <p className="text-xs font-semibold text-gray-500">Super Admin</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          {activeTab === 'dashboard' && (
            <>
              {/* Page Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
                <p className="text-gray-600 font-medium">Welcome back! Here's what's happening today.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-pink-600" />
                    </div>
                    <span className="flex items-center gap-1 text-sm font-bold text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      12.5%
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">1,729</h3>
                  <p className="text-sm font-semibold text-gray-600">Total Users</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="flex items-center gap-1 text-sm font-bold text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      8.3%
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">484</h3>
                  <p className="text-sm font-semibold text-gray-600">Total Providers</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="flex items-center gap-1 text-sm font-bold text-red-600">
                      <TrendingDown className="w-4 h-4" />
                      3.2%
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">89</h3>
                  <p className="text-sm font-semibold text-gray-600">Bookings Today</p>
                </motion.div>
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* User Distribution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mx-auto w-full max-w-md"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-1">User Distribution</h3>
                  <p className="text-sm font-semibold text-gray-600 mb-6">By user type</p>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={userTypeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {userTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e5e7eb', 
                          borderRadius: '12px',
                          fontWeight: 600
                        }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-3 mt-4">
                    {userTypeData.map((item) => (
                      <div key={item.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-sm font-semibold text-gray-600">{item.name}</span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">{item.value.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </>
          )}

          

          {/* Other tabs placeholder */}
          {activeTab !== 'dashboard' && activeTab !== 'patients-management' && activeTab !== 'provider-management' && activeTab !== 'booking-history' && (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {navigationItems.find(item => item.id === activeTab)?.label} Section
              </h3>
              <p className="text-gray-600 font-medium">
                This section is under development. Content will be available soon.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}