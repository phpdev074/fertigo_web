"use client"
import { motion } from 'motion/react';
import { 
  Calendar, Search, Filter, ChevronDown, Download, Eye, Edit, 
  X, Check, Clock, XCircle, CheckCircle, AlertCircle, MoreVertical,
  User, Building2, DollarSign, MapPin, Phone, Mail, FileText,
  RefreshCw, TrendingUp, Activity, CreditCard
} from 'lucide-react';
import { useState } from 'react';

export default function BookingHistoryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [showServiceFilter, setShowServiceFilter] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('all');
  const [showDateFilter, setShowDateFilter] = useState(false);

  // Filter options
  const statusOptions = [
    { id: 'all', label: 'All Status', color: 'gray' },
    { id: 'pending', label: 'Pending', color: 'yellow' },
    { id: 'confirmed', label: 'Confirmed', color: 'blue' },
    { id: 'completed', label: 'Completed', color: 'green' },
    { id: 'cancelled', label: 'Cancelled', color: 'red' },
    { id: 'no-show', label: 'No Show', color: 'orange' },
  ];

  const serviceOptions = [
    { id: 'all', label: 'All Services' },
    { id: 'lab', label: 'Laboratory Tests' },
    { id: 'consultation', label: 'Consultations' },
    { id: 'imaging', label: 'Imaging Services' },
    { id: 'procedure', label: 'Procedures' },
    { id: 'counseling', label: 'Counseling' },
  ];

  const dateRangeOptions = [
    { id: 'all', label: 'All Time' },
    { id: 'today', label: 'Today' },
    { id: 'yesterday', label: 'Yesterday' },
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'quarter', label: 'This Quarter' },
    { id: 'year', label: 'This Year' },
  ];

  // Mock bookings data
  const allBookings = [
    {
      id: 'BK-2024-001',
      bookingDate: 'Dec 28, 2024',
      bookingTime: '10:30 AM',
      patient: {
        name: 'Sarah Johnson',
        email: 'sarah.johnson@email.com',
        phone: '+1 (555) 123-4567',
        id: 'USR-001',
      },
      provider: {
        name: 'LifeCare Laboratory',
        location: 'Downtown Medical Center',
        id: 'PRV-045',
      },
      service: {
        name: 'Blood Tests - Complete Panel',
        category: 'Laboratory Tests',
        type: 'lab',
      },
      amount: 185,
      status: 'completed',
      paymentStatus: 'paid',
      createdAt: 'Dec 20, 2024',
      completedAt: 'Dec 28, 2024',
      notes: 'Regular checkup - All tests completed successfully',
    },
    {
      id: 'BK-2024-002',
      bookingDate: 'Dec 29, 2024',
      bookingTime: '02:00 PM',
      patient: {
        name: 'Emily Davis',
        email: 'emily.davis@email.com',
        phone: '+1 (555) 234-5678',
        id: 'USR-002',
      },
      provider: {
        name: 'FertAssist Clinic',
        location: 'Medical Plaza, Suite 300',
        id: 'PRV-023',
      },
      service: {
        name: 'Initial Fertility Consultation',
        category: 'Consultations',
        type: 'consultation',
      },
      amount: 250,
      status: 'confirmed',
      paymentStatus: 'paid',
      createdAt: 'Dec 22, 2024',
      completedAt: null,
      notes: 'First consultation - patient requested female doctor',
    },
    {
      id: 'BK-2024-003',
      bookingDate: 'Dec 29, 2024',
      bookingTime: '11:00 AM',
      patient: {
        name: 'Michael Brown',
        email: 'michael.brown@email.com',
        phone: '+1 (555) 345-6789',
        id: 'USR-003',
      },
      provider: {
        name: 'Hope Medical Imaging',
        location: 'Westside Health Complex',
        id: 'PRV-067',
      },
      service: {
        name: 'Ultrasound Scan - Pelvic',
        category: 'Imaging Services',
        type: 'imaging',
      },
      amount: 220,
      status: 'pending',
      paymentStatus: 'pending',
      createdAt: 'Dec 28, 2024',
      completedAt: null,
      notes: 'Awaiting confirmation from provider',
    },
    {
      id: 'BK-2024-004',
      bookingDate: 'Dec 27, 2024',
      bookingTime: '09:00 AM',
      patient: {
        name: 'Jessica Wilson',
        email: 'jessica.wilson@email.com',
        phone: '+1 (555) 456-7890',
        id: 'USR-004',
      },
      provider: {
        name: 'LifeCare Laboratory',
        location: 'Downtown Medical Center',
        id: 'PRV-045',
      },
      service: {
        name: 'Hormone Level Testing',
        category: 'Laboratory Tests',
        type: 'lab',
      },
      amount: 150,
      status: 'completed',
      paymentStatus: 'paid',
      createdAt: 'Dec 18, 2024',
      completedAt: 'Dec 27, 2024',
      notes: 'Follow-up test - Results sent to patient',
    },
    {
      id: 'BK-2024-005',
      bookingDate: 'Dec 26, 2024',
      bookingTime: '03:30 PM',
      patient: {
        name: 'David Martinez',
        email: 'david.martinez@email.com',
        phone: '+1 (555) 567-8901',
        id: 'USR-005',
      },
      provider: {
        name: 'FertCare Center',
        location: 'Central Medical District',
        id: 'PRV-089',
      },
      service: {
        name: 'IUI Procedure',
        category: 'Procedures',
        type: 'procedure',
      },
      amount: 580,
      status: 'cancelled',
      paymentStatus: 'refunded',
      createdAt: 'Dec 15, 2024',
      completedAt: null,
      notes: 'Cancelled by patient - Full refund processed',
    },
    {
      id: 'BK-2024-006',
      bookingDate: 'Dec 30, 2024',
      bookingTime: '01:00 PM',
      patient: {
        name: 'Amanda Foster',
        email: 'amanda.foster@email.com',
        phone: '+1 (555) 678-9012',
        id: 'USR-006',
      },
      provider: {
        name: 'Wellness Fertility Counseling',
        location: 'Therapy Center - Floor 2',
        id: 'PRV-034',
      },
      service: {
        name: 'Emotional Support Session',
        category: 'Counseling',
        type: 'counseling',
      },
      amount: 120,
      status: 'confirmed',
      paymentStatus: 'paid',
      createdAt: 'Dec 25, 2024',
      completedAt: null,
      notes: 'Couples counseling session',
    },
    {
      id: 'BK-2024-007',
      bookingDate: 'Dec 25, 2024',
      bookingTime: '10:00 AM',
      patient: {
        name: 'Robert Chen',
        email: 'robert.chen@email.com',
        phone: '+1 (555) 789-0123',
        id: 'USR-007',
      },
      provider: {
        name: 'Hope Medical Imaging',
        location: 'Westside Health Complex',
        id: 'PRV-067',
      },
      service: {
        name: 'HSG (Hysterosalpingogram)',
        category: 'Imaging Services',
        type: 'imaging',
      },
      amount: 350,
      status: 'no-show',
      paymentStatus: 'paid',
      createdAt: 'Dec 10, 2024',
      completedAt: null,
      notes: 'Patient did not show up - No refund per policy',
    },
    {
      id: 'BK-2024-008',
      bookingDate: 'Dec 30, 2024',
      bookingTime: '04:00 PM',
      patient: {
        name: 'Lisa Anderson',
        email: 'lisa.anderson@email.com',
        phone: '+1 (555) 890-1234',
        id: 'USR-008',
      },
      provider: {
        name: 'FertAssist Clinic',
        location: 'Medical Plaza, Suite 300',
        id: 'PRV-023',
      },
      service: {
        name: 'Follow-up Consultation',
        category: 'Consultations',
        type: 'consultation',
      },
      amount: 120,
      status: 'pending',
      paymentStatus: 'pending',
      createdAt: 'Dec 28, 2024',
      completedAt: null,
      notes: 'Review test results with doctor',
    },
  ];

  // Filter bookings
  const filteredBookings = allBookings.filter((booking) => {
    const matchesSearch = 
      booking.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.service.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatus === 'all' || booking.status === selectedStatus;
    const matchesService = selectedService === 'all' || booking.service.type === selectedService;
    
    return matchesSearch && matchesStatus && matchesService;
  });

  // Calculate stats
  const stats = {
    total: allBookings.length,
    pending: allBookings.filter(b => b.status === 'pending').length,
    confirmed: allBookings.filter(b => b.status === 'confirmed').length,
    completed: allBookings.filter(b => b.status === 'completed').length,
    cancelled: allBookings.filter(b => b.status === 'cancelled').length,
    revenue: allBookings
      .filter(b => b.paymentStatus === 'paid')
      .reduce((sum, b) => sum + b.amount, 0),
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'confirmed': return <Check className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      case 'no-show': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'confirmed': return 'bg-blue-100 text-blue-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      case 'no-show': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'refunded': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking History</h2>
        <p className="text-gray-600 font-medium">Manage and track all booking activities</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.total}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Total Bookings</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.pending}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Pending</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.confirmed}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Confirmed</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.completed}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Completed</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <XCircle className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.cancelled}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Cancelled</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">${stats.revenue}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Total Revenue</p>
        </motion.div>
      </div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        {/* Filters Bar */}
        <div className="p-4 border-b border-gray-200 space-y-3">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search */}
            <div className="flex-1 flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-2.5">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by booking ID, patient, provider, or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-sm font-medium text-gray-900 w-full placeholder:text-gray-400"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <button
                onClick={() => setShowStatusFilter(!showStatusFilter)}
                className="w-full md:w-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors bg-white"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-600">
                    {statusOptions.find(s => s.id === selectedStatus)?.label}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {showStatusFilter && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                  {statusOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSelectedStatus(option.id);
                        setShowStatusFilter(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm font-semibold transition-colors ${
                        selectedStatus === option.id
                          ? 'bg-pink-50 text-pink-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Service Filter */}
            <div className="relative">
              <button
                onClick={() => setShowServiceFilter(!showServiceFilter)}
                className="w-full md:w-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors bg-white"
              >
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-600">
                    {serviceOptions.find(s => s.id === selectedService)?.label}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {showServiceFilter && (
                <div className="absolute top-full mt-2 right-0 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                  {serviceOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSelectedService(option.id);
                        setShowServiceFilter(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm font-semibold transition-colors ${
                        selectedService === option.id
                          ? 'bg-pink-50 text-pink-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Date Range Filter */}
            <div className="relative">
              <button
                onClick={() => setShowDateFilter(!showDateFilter)}
                className="w-full md:w-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors bg-white"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-600">
                    {dateRangeOptions.find(d => d.id === selectedDateRange)?.label}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {showDateFilter && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                  {dateRangeOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSelectedDateRange(option.id);
                        setShowDateFilter(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm font-semibold transition-colors ${
                        selectedDateRange === option.id
                          ? 'bg-pink-50 text-pink-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Export Button */}
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
              <Download className="w-5 h-5 text-gray-600" />
              <span className="hidden md:inline text-sm font-semibold text-gray-600">Export</span>
            </button>

            {/* Refresh Button */}
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg">
              <RefreshCw className="w-5 h-5" />
              <span className="hidden md:inline">Refresh</span>
            </button>
          </div>

          {/* Active Filters Display */}
          {(selectedStatus !== 'all' || selectedService !== 'all' || searchQuery) && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-gray-500">Active filters:</span>
              {selectedStatus !== 'all' && (
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold flex items-center gap-2">
                  Status: {statusOptions.find(s => s.id === selectedStatus)?.label}
                  <button
                    onClick={() => setSelectedStatus('all')}
                    className="w-4 h-4 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedService !== 'all' && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold flex items-center gap-2">
                  Service: {serviceOptions.find(s => s.id === selectedService)?.label}
                  <button
                    onClick={() => setSelectedService('all')}
                    className="w-4 h-4 bg-blue-200 rounded-full flex items-center justify-center hover:bg-blue-300 transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold flex items-center gap-2">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="w-4 h-4 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedStatus('all');
                  setSelectedService('all');
                  setSearchQuery('');
                }}
                className="text-xs font-semibold text-gray-500 hover:text-gray-700 underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Booking ID</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Provider</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Service</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Payment</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{booking.id}</p>
                      <p className="text-xs font-semibold text-gray-500">Created: {booking.createdAt}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{booking.patient.name}</p>
                      <p className="text-xs font-semibold text-gray-500">{booking.patient.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{booking.provider.name}</p>
                      <p className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {booking.provider.location}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{booking.service.name}</p>
                      <p className="text-xs font-semibold text-gray-500">{booking.service.category}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{booking.bookingDate}</p>
                      <p className="text-xs font-semibold text-gray-500">{booking.bookingTime}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-pink-600">${booking.amount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit ${getStatusColor(booking.status)}`}>
                      {getStatusIcon(booking.status)}
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getPaymentStatusColor(booking.paymentStatus)}`}>
                      {booking.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Cards */}
        <div className="lg:hidden divide-y divide-gray-200">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{booking.id}</p>
                  <p className="text-xs font-semibold text-gray-500">Created: {booking.createdAt}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${getStatusColor(booking.status)}`}>
                  {getStatusIcon(booking.status)}
                  {booking.status}
                </span>
              </div>

              <div className="space-y-3 mb-3">
                <div className="flex items-start gap-2">
                  <User className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-500">Patient</p>
                    <p className="text-sm font-bold text-gray-900">{booking.patient.name}</p>
                    <p className="text-xs font-semibold text-gray-500">{booking.patient.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-500">Provider</p>
                    <p className="text-sm font-bold text-gray-900">{booking.provider.name}</p>
                    <p className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {booking.provider.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Activity className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-500">Service</p>
                    <p className="text-sm font-bold text-gray-900">{booking.service.name}</p>
                    <p className="text-xs font-semibold text-gray-500">{booking.service.category}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-500">Date</p>
                    <p className="text-sm font-bold text-gray-900">{booking.bookingDate}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-500">Time</p>
                    <p className="text-sm font-bold text-gray-900">{booking.bookingTime}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-500">Amount</p>
                    <p className="text-sm font-bold text-pink-600">${booking.amount}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-500">Payment:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getPaymentStatusColor(booking.paymentStatus)}`}>
                    {booking.paymentStatus}
                  </span>
                </div>

                {booking.notes && (
                  <div className="flex items-start gap-2 bg-gray-50 rounded-lg p-2">
                    <FileText className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-gray-600">{booking.notes}</p>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <button className="flex-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button className="flex-1 px-3 py-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-xs font-semibold text-pink-600 transition-colors flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <MoreVertical className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBookings.length === 0 && (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No bookings found</h3>
            <p className="text-gray-600 font-medium mb-4">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSelectedStatus('all');
                setSelectedService('all');
                setSearchQuery('');
              }}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredBookings.length > 0 && (
          <div className="p-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-semibold text-gray-600">
              Showing {filteredBookings.length} of {stats.total} bookings
            </p>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm font-semibold">
                1
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
