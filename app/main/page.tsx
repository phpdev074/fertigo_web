"use client";
import { motion } from 'motion/react';
import { 
  Users, Building2, Calendar, TrendingUp, TrendingDown, FileText
} from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

export default function DashboardPage() {

  const userTypeData = [
    { name: 'Patients', value: 1245, color: '#ec4899' },
    { name: 'Providers', value: 328, color: '#8b5cf6' },
    // { name: 'Clinics', value: 156, color: '#06b6d4' },
  ];

  return (
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

      {/* Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
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
              <Tooltip />
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
  );
}
