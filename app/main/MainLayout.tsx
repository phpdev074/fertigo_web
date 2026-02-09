// "use client";

// import { motion } from "motion/react";
// import {
//   Menu, X, Bell, Search, ChevronDown, Users, Building2,
//   Calendar, Home, Mail, FileCode, Settings, LogOut
// } from "lucide-react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const navigationItems = [
//   { id: "dashboard", icon: Home, label: "Dashboard", path: "/admin" },
//   { id: "patients", icon: Users, label: "Patients", path: "/admin/users" },
//   { id: "providers", icon: Building2, label: "Providers", path: "/admin/providers" },
//   { id: "bookings", icon: Calendar, label: "Booking History", path: "/admin/bookings" },
//   { id: "contact", icon: Mail, label: "Contact Us", path: "/admin/contact" },
//   { id: "content", icon: FileCode, label: "Content", path: "/admin/content" },
//   { id: "settings", icon: Settings, label: "Settings", path: "/admin/settings" },
// ];

// export default function MainLayout({ children }: { children: React.ReactNode }) {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-gray-50 flex">

//       {/* SIDEBAR */}
//       <motion.aside
//         initial={{ x: -300 }}
//         animate={{ x: sidebarOpen ? 0 : -300 }}
//         className="fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r"
//       >
//         <div className="h-16 flex items-center justify-between px-6 border-b">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center">
//               <span className="text-xl font-bold text-white">F</span>
//             </div>
//             <div>
//               <h1 className="font-bold">FertiGo</h1>
//               <p className="text-xs text-gray-500">Admin Panel</p>
//             </div>
//           </div>

//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="lg:hidden"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         <nav className="p-4 space-y-1">
//           {navigationItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => router.push(item.path)}
//                 className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700"
//               >
//                 <Icon className="w-5 h-5" />
//                 <span>{item.label}</span>
//               </button>
//             );
//           })}
//         </nav>

//         <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
//           <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50">
//             <LogOut className="w-5 h-5" />
//             <span>Logout</span>
//           </button>
//         </div>
//       </motion.aside>

//       {/* MAIN AREA */}
//       <div className="flex-1 flex flex-col min-w-0">

//         {/* HEADER */}
//         <header className="h-16 bg-white border-b flex items-center justify-between px-8 sticky top-0 z-30">
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="lg:hidden"
//           >
//             <Menu className="w-5 h-5" />
//           </button>

//           <div className="hidden md:flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-2 w-80">
//             <Search className="w-5 h-5 text-gray-400" />
//             <input
//               placeholder="Search users, bookings, providers..."
//               className="bg-transparent outline-none w-full"
//             />
//           </div>

//           <div className="flex items-center gap-4">
//             <button className="relative">
//               <Bell className="w-5 h-5" />
//               <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
//             </button>

//             <div className="flex items-center gap-3 pl-4 border-l">
//               <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
//                 <span className="text-white font-bold">AD</span>
//               </div>
//               <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
//             </div>
//           </div>
//         </header>

//         {/* THIS IS WHERE EVERY PAGE RENDERS */}
//         <main className="flex-1 overflow-y-auto p-8">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }


"use client";
import { motion } from 'motion/react';
import {
  Menu, X, Bell, Search, ChevronDown, Users, Building2, Calendar,
  Home, Settings, LogOut, Mail, FileCode, Activity
} from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const userTypeData = [
  { name: 'Patients', value: 1245, color: '#ec4899' },
  { name: 'Providers', value: 328, color: '#8b5cf6' },
  { name: 'Clinics', value: 156, color: '#06b6d4' },
];

const navigationItems = [
  { id: 'dashboard', icon: Home, label: 'Dashboard', path: '/main' },
  { id: 'patients-management', icon: Users, label: 'Patients', path: '/main/User' },
  { id: 'provider-management', icon: Building2, label: 'Provider', path: '/main/Provider' },
  { id: 'booking-history', icon: Calendar, label: 'Booking History', path: '/main/Booking' },
  { id: 'contact-us', icon: Mail, label: 'Contact Us', path: '/main/ContactUs' },
  { id: 'service', icon: Activity, label: 'Service', path: '/main/Service' },
  { id: 'content-management', icon: FileCode, label: 'Content', path: '/main/Content' },
  { id: 'setting', icon: Settings, label: 'Setting', path: '/main/Settings' },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">

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
            return (
              <button
                key={item.id}
                onClick={() => router.push(item.path)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all text-gray-600 hover:bg-gray-100"
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button onClick={() => router.push("/")} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-red-600 hover:bg-red-50 transition-all">
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

      {/* Main Content Wrapper */}
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
            <button className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
            </button>

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

        {/* 👉 THIS IS WHERE YOUR PAGE RENDERS */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          {children}
        </main>

      </div>
    </div>
  );
}

