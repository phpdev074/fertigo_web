module.exports = [
"[project]/Documents/vishal chauhan/FertiGo/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/vishal chauhan/FertiGo/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/vishal chauhan/FertiGo/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/vishal chauhan/FertiGo/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/vishal chauhan/FertiGo/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/vishal chauhan/FertiGo/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/vishal chauhan/FertiGo/app/Dashboard/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client"
// import { motion } from 'motion/react';
// import { 
//   Menu, X, Bell, Search, ChevronDown, Users, Building2, Calendar, 
//   DollarSign, TrendingUp, TrendingDown, MoreVertical, Eye, Edit, 
//   Trash2, Download, Filter, Home, UserCircle, Settings, LogOut,
//   FileText, BarChart3, MessageSquare, Package, Mail, FileCode, CreditCard, PlusCircle,
//   LayoutDashboard, Activity, ShoppingBag, Star, Globe
// } from 'lucide-react';
// import { useState } from 'react';
// import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { useRouter } from "next/navigation";
// import { useEffect } from 'react';
// export default  function AdminDashboardScreen() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [activeMenuTab, setActiveMenuTab] = useState('overview');
//   const router = useRouter();
//   const menuBarTabs = [
//     { id: 'overview', label: 'Overview', icon: LayoutDashboard },
//     { id: 'analytics', label: 'Analytics', icon: BarChart3 },
//     { id: 'activity', label: 'Activity', icon: Activity },
//     { id: 'reports', label: 'Reports', icon: FileText },
//     { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag },
//     { id: 'reviews', label: 'Reviews', icon: Star },
//   ];
//   // Sample data for charts
//   const revenueData = [
//     { month: 'Jan', revenue: 12500, bookings: 45 },
//     { month: 'Feb', revenue: 15800, bookings: 58 },
//     { month: 'Mar', revenue: 18200, bookings: 67 },
//     { month: 'Apr', revenue: 16500, bookings: 61 },
//     { month: 'May', revenue: 21000, bookings: 78 },
//     { month: 'Jun', revenue: 24500, bookings: 89 },
//   ];
//   const userTypeData = [
//     { name: 'Patients', value: 1245, color: '#ec4899' },
//     { name: 'Providers', value: 328, color: '#8b5cf6' },
//     { name: 'Clinics', value: 156, color: '#06b6d4' },
//   ];
//   const recentBookings = [
//     { id: 'BK-001', patient: 'Sarah Johnson', provider: 'LifeCare Lab', service: 'Blood Tests', amount: 85, status: 'completed', date: 'Dec 28, 2024' },
//     { id: 'BK-002', patient: 'Emily Davis', provider: 'FertAssist Clinic', service: 'Consultation', amount: 150, status: 'pending', date: 'Dec 28, 2024' },
//     { id: 'BK-003', patient: 'Michael Brown', provider: 'Hope Medical', service: 'Ultrasound', amount: 200, status: 'confirmed', date: 'Dec 27, 2024' },
//     { id: 'BK-004', patient: 'Jessica Wilson', provider: 'LifeCare Lab', service: 'Hormone Panel', amount: 120, status: 'completed', date: 'Dec 27, 2024' },
//     { id: 'BK-005', patient: 'David Martinez', provider: 'FertCare Center', service: 'IUI Procedure', amount: 450, status: 'cancelled', date: 'Dec 26, 2024' },
//   ];
//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'completed': return 'bg-green-100 text-green-700';
//       case 'pending': return 'bg-yellow-100 text-yellow-700';
//       case 'confirmed': return 'bg-blue-100 text-blue-700';
//       case 'cancelled': return 'bg-red-100 text-red-700';
//       default: return 'bg-gray-100 text-gray-700';
//     }
//   };
//   const navigationItems = [
//     { id: 'dashboard', icon: Home, label: 'Dashboard' },
//     { id: 'user-management', icon: Users, label: 'User Management' },
//     { id: 'add-services', icon: PlusCircle, label: 'Add Services' },
//     { id: 'booking-history', icon: Calendar, label: 'Booking History' },
//     { id: 'contact-us', icon: Mail, label: 'Contact Us' },
//     { id: 'content-pages', icon: FileCode, label: 'Content Pages' },
//     { id: 'payment-analysis', icon: CreditCard, label: 'Payment Analysis' },
//     { id: 'settings', icon: Settings, label: 'Settings' },
//   ];
//   useEffect(() => {
//   if (activeTab === "user-management") {
//     router.push('/UserManagement');
//   }
//   if (activeTab === "add-services") {
//     router.push('/AddService');
//   }
//     if (activeTab === "booking-history") {
//     router.push('/BookingHistoryScreen');
//   }
// }, [activeTab]);
//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <motion.aside
//         initial={{ x: -300 }}
//         animate={{ x: sidebarOpen ? 0 : -300 }}
//         className="fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 lg:translate-x-0"
//       >
//         {/* Logo */}
//         <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
//               <span className="text-xl font-bold text-white">F</span>
//             </div>
//             <div>
//               <h1 className="font-bold text-gray-900">FertiGo</h1>
//               <p className="text-xs font-semibold text-gray-500">Admin Panel</p>
//             </div>
//           </div>
//           <button 
//             onClick={() => setSidebarOpen(false)}
//             className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"
//           >
//             <X className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>
//         {/* Navigation */}
//         <nav className="p-4 space-y-1">
//           {navigationItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = activeTab === item.id;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => {
//                   setActiveTab(item.id);
//                 }}
//                 className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
//                   isActive
//                     ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
//                     : 'text-gray-600 hover:bg-gray-100'
//                 }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span>{item.label}</span>
//               </button>
//             );
//           })}
//         </nav>
//         {/* Logout */}
//         <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
//           <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-red-600 hover:bg-red-50 transition-all">
//             <LogOut className="w-5 h-5" />
//             <span>Logout</span>
//           </button>
//         </div>
//       </motion.aside>
//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden pointer-events-none"
//         />
//       )}
//       {/* Main Content */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* Header */}
//         <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setSidebarOpen(true)}
//               className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100"
//             >
//               <Menu className="w-5 h-5 text-gray-600" />
//             </button>
//             {/* Search */}
//             <div className="hidden md:flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-2 w-80">
//               <Search className="w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search users, bookings, providers..."
//                 className="bg-transparent border-none outline-none text-sm font-medium text-gray-900 w-full placeholder:text-gray-400"
//               />
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             {/* Notifications */}
//             <button className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors">
//               <Bell className="w-5 h-5 text-gray-600" />
//               <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
//             </button>
//             {/* Admin Profile */}
//             <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
//               <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
//                 <span className="text-sm font-bold text-white">AD</span>
//               </div>
//               <div className="hidden md:block">
//                 <p className="text-sm font-bold text-gray-900">Admin User</p>
//                 <p className="text-xs font-semibold text-gray-500">Super Admin</p>
//               </div>
//               <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
//             </div>
//           </div>
//         </header>
//         {/* Dashboard Content */}
//         <main className="flex-1 overflow-y-auto p-4 lg:p-8">
//           {activeTab === 'dashboard' && (
//             <>
//               {/* Page Header */}
//               <div className="mb-8">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
//                 <p className="text-gray-600 font-medium">Welcome back! Here's what's happening today.</p>
//               </div>
//               {/* Menu Bar */}
//               {/* <div className="bg-gray-50 rounded-2xl p-4 mb-8">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     {menuBarTabs.map((tab) => {
//                       const Icon = tab.icon;
//                       const isActive = activeMenuTab === tab.id;
//                       return (
//                         <button
//                           key={tab.id}
//                           onClick={() => setActiveMenuTab(tab.id)}
//                           className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
//                             isActive
//                               ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
//                               : 'text-gray-600 hover:bg-gray-100'
//                           }`}
//                         >
//                           <Icon className="w-5 h-5" />
//                           <span>{tab.label}</span>
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div> */}
//               {/* Stats Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 }}
//                   className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
//                       <Users className="w-6 h-6 text-pink-600" />
//                     </div>
//                     <span className="flex items-center gap-1 text-sm font-bold text-green-600">
//                       <TrendingUp className="w-4 h-4" />
//                       12.5%
//                     </span>
//                   </div>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-1">1,729</h3>
//                   <p className="text-sm font-semibold text-gray-600">Total Users</p>
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                   className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
//                       <Building2 className="w-6 h-6 text-purple-600" />
//                     </div>
//                     <span className="flex items-center gap-1 text-sm font-bold text-green-600">
//                       <TrendingUp className="w-4 h-4" />
//                       8.3%
//                     </span>
//                   </div>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-1">484</h3>
//                   <p className="text-sm font-semibold text-gray-600">Total Providers</p>
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                       <Calendar className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <span className="flex items-center gap-1 text-sm font-bold text-red-600">
//                       <TrendingDown className="w-4 h-4" />
//                       3.2%
//                     </span>
//                   </div>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-1">89</h3>
//                   <p className="text-sm font-semibold text-gray-600">Bookings Today</p>
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                   className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                       <DollarSign className="w-6 h-6 text-green-600" />
//                     </div>
//                     <span className="flex items-center gap-1 text-sm font-bold text-green-600">
//                       <TrendingUp className="w-4 h-4" />
//                       15.7%
//                     </span>
//                   </div>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-1">$24.5K</h3>
//                   <p className="text-sm font-semibold text-gray-600">Revenue (Month)</p>
//                 </motion.div>
//               </div>
//               {/* Charts Grid */}
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//                 {/* Revenue Chart */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 }}
//                   className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
//                 >
//                   <div className="flex items-center justify-between mb-6">
//                     <div>
//                       <h3 className="text-lg font-bold text-gray-900 mb-1">Revenue Overview</h3>
//                       <p className="text-sm font-semibold text-gray-600">Last 6 months performance</p>
//                     </div>
//                     <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
//                       <Download className="w-4 h-4 text-gray-600" />
//                       <span className="text-sm font-semibold text-gray-600">Export</span>
//                     </button>
//                   </div>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={revenueData}>
//                       <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                       <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px', fontWeight: 600 }} />
//                       <YAxis stroke="#9ca3af" style={{ fontSize: '12px', fontWeight: 600 }} />
//                       <Tooltip 
//                         contentStyle={{ 
//                           backgroundColor: 'white', 
//                           border: '1px solid #e5e7eb', 
//                           borderRadius: '12px',
//                           fontWeight: 600
//                         }} 
//                       />
//                       <Legend wrapperStyle={{ fontSize: '14px', fontWeight: 600 }} />
//                       <Line type="monotone" dataKey="revenue" stroke="#ec4899" strokeWidth={3} name="Revenue ($)" />
//                       <Line type="monotone" dataKey="bookings" stroke="#8b5cf6" strokeWidth={3} name="Bookings" />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </motion.div>
//                 {/* User Distribution */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6 }}
//                   className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
//                 >
//                   <h3 className="text-lg font-bold text-gray-900 mb-1">User Distribution</h3>
//                   <p className="text-sm font-semibold text-gray-600 mb-6">By user type</p>
//                   <ResponsiveContainer width="100%" height={250}>
//                     <PieChart>
//                       <Pie
//                         data={userTypeData}
//                         cx="50%"
//                         cy="50%"
//                         innerRadius={60}
//                         outerRadius={80}
//                         paddingAngle={5}
//                         dataKey="value"
//                       >
//                         {userTypeData.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={entry.color} />
//                         ))}
//                       </Pie>
//                       <Tooltip 
//                         contentStyle={{ 
//                           backgroundColor: 'white', 
//                           border: '1px solid #e5e7eb', 
//                           borderRadius: '12px',
//                           fontWeight: 600
//                         }} 
//                       />
//                     </PieChart>
//                   </ResponsiveContainer>
//                   <div className="space-y-3 mt-4">
//                     {userTypeData.map((item) => (
//                       <div key={item.name} className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
//                           <span className="text-sm font-semibold text-gray-600">{item.name}</span>
//                         </div>
//                         <span className="text-sm font-bold text-gray-900">{item.value.toLocaleString()}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
//               </div>
//               {/* Recent Bookings Table */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7 }}
//                 className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
//               >
//                 <div className="p-6 border-b border-gray-200 flex items-center justify-between">
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-900 mb-1">Recent Bookings</h3>
//                     <p className="text-sm font-semibold text-gray-600">Latest booking activities</p>
//                   </div>
//                   <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
//                     <Filter className="w-4 h-4 text-gray-600" />
//                     <span className="text-sm font-semibold text-gray-600">Filter</span>
//                   </button>
//                 </div>
//                 {/* Desktop Table */}
//                 <div className="hidden md:block overflow-x-auto">
//                   <table className="w-full">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Booking ID</th>
//                         <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Patient</th>
//                         <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Provider</th>
//                         <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Service</th>
//                         <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Amount</th>
//                         <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
//                         <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Date</th>
//                         <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {recentBookings.map((booking) => (
//                         <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className="text-sm font-bold text-gray-900">{booking.id}</span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className="text-sm font-semibold text-gray-900">{booking.patient}</span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className="text-sm font-semibold text-gray-600">{booking.provider}</span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className="text-sm font-semibold text-gray-600">{booking.service}</span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className="text-sm font-bold text-gray-900">${booking.amount}</span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(booking.status)}`}>
//                               {booking.status}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className="text-sm font-semibold text-gray-600">{booking.date}</span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center gap-2">
//                               <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
//                                 <Eye className="w-4 h-4 text-gray-600" />
//                               </button>
//                               <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
//                                 <Edit className="w-4 h-4 text-gray-600" />
//                               </button>
//                               <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors">
//                                 <Trash2 className="w-4 h-4 text-red-600" />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 {/* Mobile Cards */}
//                 <div className="md:hidden divide-y divide-gray-200">
//                   {recentBookings.map((booking) => (
//                     <div key={booking.id} className="p-4">
//                       <div className="flex items-start justify-between mb-3">
//                         <div>
//                           <p className="text-sm font-bold text-gray-900 mb-1">{booking.id}</p>
//                           <p className="text-xs font-semibold text-gray-600">{booking.date}</p>
//                         </div>
//                         <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(booking.status)}`}>
//                           {booking.status}
//                         </span>
//                       </div>
//                       <div className="space-y-2 mb-3">
//                         <div className="flex justify-between">
//                           <span className="text-xs font-semibold text-gray-500">Patient:</span>
//                           <span className="text-xs font-bold text-gray-900">{booking.patient}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-xs font-semibold text-gray-500">Provider:</span>
//                           <span className="text-xs font-bold text-gray-900">{booking.provider}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-xs font-semibold text-gray-500">Service:</span>
//                           <span className="text-xs font-bold text-gray-900">{booking.service}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-xs font-semibold text-gray-500">Amount:</span>
//                           <span className="text-sm font-bold text-pink-600">${booking.amount}</span>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
//                         <button className="flex-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors">
//                           View
//                         </button>
//                         <button className="flex-1 px-3 py-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-xs font-semibold text-pink-600 transition-colors">
//                           Edit
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </>
//           )}
// {/* {activeTab === "user-management" && (
//     router.push('/UserManagement')
// )} */}
//           {/* Other tabs placeholder */}
//           {activeTab !== 'dashboard' && (
//             <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
//               <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FileText className="w-8 h-8 text-gray-400" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">
//                 {navigationItems.find(item => item.id === activeTab)?.label} Section
//               </h3>
//               <p className="text-gray-600 font-medium">
//                 This section is under development. Content will be available soon.
//               </p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }
}),
"[project]/Documents/vishal chauhan/FertiGo/app/Dashboard/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/vishal chauhan/FertiGo/app/Dashboard/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b0b870b8._.js.map