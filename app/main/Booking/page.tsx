"use client";
import { motion } from 'motion/react';
import {
  Calendar, Search, Filter, ChevronDown, Download, Eye, Edit,
  X, Check, Clock, XCircle, CheckCircle, AlertCircle, MoreVertical,
  User, Building2, DollarSign, MapPin, Phone, Mail, FileText,
  RefreshCw, TrendingUp, Activity, CreditCard
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { BookingHistory, BookignCounts, Service } from '@/app/api/api_client';

export default function BookingHistoryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [showServiceFilter, setShowServiceFilter] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('all');
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [bookings, setBookings] = useState<any[]>([]);
  const [bookingCounts, setBookingCounts] = useState<any>({
    Total: 0,
    Pending: 0,
    Confirmed: 0,
    Completed: 0,
    Cancelled: 0,
  });
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<any>(null)


  // Filter options
  const statusOptions = [
    { id: 'all', label: 'All Status', color: 'gray' },
    { id: 'pending', label: 'Pending', color: 'yellow' },
    { id: 'confirmed', label: 'Confirmed', color: 'blue' },
    { id: 'completed', label: 'Completed', color: 'green' },
    { id: 'cancelled', label: 'Cancelled', color: 'red' }
  ];

  const serviceOptions = [
    { id: 'all', label: 'All Services' },
    ...services.map((s) => ({
      id: s._id,
      label: s.name,
    })),
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

  const normalizedBookings = bookings.map((b) => ({
    id: b._id,
    bookingDate: new Date(b.bookingDate).toLocaleDateString(),
    bookingTime: `${b.startTime} - ${b.endTime}`,
    createdAt: new Date(b.createdAt).toLocaleDateString(),

    patient: {
      name: b.patientInfo?.patientName,
      phone: b.patientInfo?.patientContact,
    },

    provider: {
      name: b.Provider?.name,
      location: b.Provider?.address?.fullAddress,
    },

    service: {
      name: b.service?.name,
      type: b.service?._id,
      category: b.service?.name,
    },

    amount: b.serviceFee,
    status: b.requestStatus,
    paymentStatus: b.paymentStatus,
    notes: b.note,
  }));


  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);

        const [historyRes, countsRes, serviceRes] = await Promise.all([
          BookingHistory({
            page,
            serviceId: selectedService === 'all' ? '' : selectedService,
            status: selectedStatus === 'all' ? '' : selectedStatus,
            dateRange: selectedDateRange === 'all' ? '' : selectedDateRange,
          }),
          BookignCounts(),
          Service({}),
        ]);

        setBookings(historyRes?.data?.data?.history || []);
        setBookingCounts(countsRes?.data.data || {});
        setServices(serviceRes?.data.data || []);
        setPagination(historyRes?.data?.data?.pagination || {})

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [showStatusFilter, selectedStatus, selectedDateRange, selectedService, page]);


  const goToPage = (p: number) => {
    if (!pagination) return;
    if (p < 1 || p > pagination.totalPages) return;
    setPage(p);
  };


  const filteredBookings = normalizedBookings.filter((booking) => {
    const matchesSearch =
      booking.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.patient.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.provider.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.service.name?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === 'all' || booking.status === selectedStatus;

    const matchesService =
      selectedService === 'all' || booking.service.type === selectedService;

    return matchesSearch && matchesStatus && matchesService;
  });


  const stats = {
    total: bookingCounts?.Total || 0,
    pending: bookingCounts?.Pending || 0,
    confirmed: bookingCounts?.Confirmed || 0,
    completed: bookingCounts?.Completed || 0,
    cancelled: bookingCounts?.Cancelled || 0,
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                      className={`w-full px-4 py-2 text-left text-sm font-semibold transition-colors ${selectedStatus === option.id
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
                      className={`w-full px-4 py-2 text-left text-sm font-semibold transition-colors ${selectedService === option.id
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
                      className={`w-full px-4 py-2 text-left text-sm font-semibold transition-colors ${selectedDateRange === option.id
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
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
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
                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit ${getStatusColor(booking.status)}`}>
                      {getStatusIcon(booking.status)}
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
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

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-500">Date</p>
                    <p className="text-sm font-bold text-gray-900">{booking.bookingDate}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-500">Time</p>
                    <p className="text-sm font-bold text-gray-900">{booking.bookingTime}</p>
                  </div>
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
        {/* Pagination */}
        {pagination && pagination.totalRecords > 0 && (
          <div className="p-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-semibold text-gray-600">
              Showing{" "}
              {(pagination.page - 1) * pagination.limit + 1} –{" "}
              {Math.min(
                pagination.page * pagination.limit,
                pagination.totalRecords
              )}{" "}
              of {pagination.totalRecords} bookings
            </p>

            <div className="flex items-center gap-2">
              {/* Previous */}
              <button
                onClick={() => goToPage(pagination.page - 1)}
                disabled={pagination.page === 1}
                className={`px-4 py-2 rounded-lg border text-sm font-semibold
          ${pagination.page === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
              >
                Previous
              </button>

              {/* Pages */}
              {Array.from({ length: pagination.totalPages }).map((_, i) => {
                const p = i + 1;
                return (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold
              ${pagination.page === p
                        ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
                        : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    {p}
                  </button>
                );
              })}

              {/* Next */}
              <button
                onClick={() => goToPage(pagination.page + 1)}
                disabled={pagination.page === pagination.totalPages}
                className={`px-4 py-2 rounded-lg border text-sm font-semibold
          ${pagination.page === pagination.totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}