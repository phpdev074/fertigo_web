"use client";
import { motion } from 'motion/react';
import { 
  MessageSquare, Search, Filter, ChevronDown, Eye, Reply,
  X, Clock, CheckCircle, AlertCircle, MoreVertical,
  User, Mail, Calendar, FileText, RefreshCw, Send
} from 'lucide-react';
import { useState } from 'react';

export default function ContactUsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('all');
  const [showDateFilter, setShowDateFilter] = useState(false);

  // Filter options
  const statusOptions = [
    { id: 'all', label: 'All Status', color: 'gray' },
    { id: 'pending', label: 'Pending Reply', color: 'yellow' },
    { id: 'replied', label: 'Replied', color: 'green' },
    { id: 'resolved', label: 'Resolved', color: 'blue' },
  ];

  const dateRangeOptions = [
    { id: 'all', label: 'All Time' },
    { id: 'today', label: 'Today' },
    { id: 'yesterday', label: 'Yesterday' },
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'year', label: 'This Year' },
  ];

  // Mock contact messages data
  const allMessages = [
    {
      id: 'MSG-001',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      subject: 'Question about IVF services',
      message: 'Hi, I would like to know more about the IVF services available in my area. Can you provide me with a list of certified providers near downtown?',
      date: 'Jan 18, 2026',
      time: '10:30 AM',
      status: 'pending',
      repliedAt: null,
      repliedBy: null,
    },
    {
      id: 'MSG-002',
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      subject: 'Appointment booking issue',
      message: 'I am having trouble booking an appointment through the app. The payment page keeps showing an error. Please help!',
      date: 'Jan 18, 2026',
      time: '09:15 AM',
      status: 'replied',
      repliedAt: 'Jan 18, 2026 11:30 AM',
      repliedBy: 'Admin Team',
    },
    {
      id: 'MSG-003',
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      subject: 'Provider verification status',
      message: 'I submitted a provider application last week. Could you please update me on the verification status?',
      date: 'Jan 17, 2026',
      time: '03:45 PM',
      status: 'pending',
      repliedAt: null,
      repliedBy: null,
    },
    {
      id: 'MSG-004',
      name: 'David Martinez',
      email: 'david.martinez@email.com',
      subject: 'Feedback on app experience',
      message: 'I love the FertiGo app! The interface is very user-friendly and I found a great clinic near me. Just wanted to say thank you!',
      date: 'Jan 17, 2026',
      time: '02:20 PM',
      status: 'resolved',
      repliedAt: 'Jan 17, 2026 04:15 PM',
      repliedBy: 'Support Team',
    },
    {
      id: 'MSG-005',
      name: 'Jessica Wilson',
      email: 'jessica.wilson@email.com',
      subject: 'Account deletion request',
      message: 'I would like to delete my account and all associated data. Please process this request as soon as possible.',
      date: 'Jan 16, 2026',
      time: '01:10 PM',
      status: 'pending',
      repliedAt: null,
      repliedBy: null,
    },
    {
      id: 'MSG-006',
      name: 'Robert Anderson',
      email: 'robert.anderson@email.com',
      subject: 'Partnership inquiry',
      message: 'Our fertility clinic is interested in partnering with FertiGo. Who should I contact to discuss this opportunity?',
      date: 'Jan 16, 2026',
      time: '11:30 AM',
      status: 'replied',
      repliedAt: 'Jan 16, 2026 02:45 PM',
      repliedBy: 'Business Team',
    },
    {
      id: 'MSG-007',
      name: 'Amanda Foster',
      email: 'amanda.foster@email.com',
      subject: 'Technical bug report',
      message: 'The search filter is not working properly on mobile. When I select a service category, it shows no results even though there are providers available.',
      date: 'Jan 15, 2026',
      time: '04:55 PM',
      status: 'resolved',
      repliedAt: 'Jan 15, 2026 06:20 PM',
      repliedBy: 'Tech Support',
    },
    {
      id: 'MSG-008',
      name: 'Lisa Thompson',
      email: 'lisa.thompson@email.com',
      subject: 'Payment refund request',
      message: 'I was charged twice for the same booking. Can you please process a refund for the duplicate transaction?',
      date: 'Jan 15, 2026',
      time: '10:20 AM',
      status: 'pending',
      repliedAt: null,
      repliedBy: null,
    },
  ];

  // Filter messages
  const filteredMessages = allMessages.filter((message) => {
    const matchesSearch = 
      message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.message.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatus === 'all' || message.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Calculate stats
  const stats = {
    total: allMessages.length,
    pending: allMessages.filter(m => m.status === 'pending').length,
    replied: allMessages.filter(m => m.status === 'replied').length,
    resolved: allMessages.filter(m => m.status === 'resolved').length,
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'replied': return <CheckCircle className="w-4 h-4" />;
      case 'resolved': return <CheckCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'replied': return 'bg-green-100 text-green-700';
      case 'resolved': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Messages</h2>
        <p className="text-gray-600 font-medium">Manage and respond to user inquiries</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.total}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Total Messages</p>
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
          <p className="text-sm font-semibold text-gray-600">Pending Reply</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.replied}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Replied</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.resolved}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Resolved</p>
        </motion.div>
      </div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
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
                placeholder="Search by name, email, subject, or message..."
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

            {/* Refresh Button */}
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg">
              <RefreshCw className="w-5 h-5" />
              <span className="hidden md:inline">Refresh</span>
            </button>
          </div>

          {/* Active Filters Display */}
          {(selectedStatus !== 'all' || searchQuery) && (
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
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Message ID</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Message</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredMessages.map((message) => (
                <tr key={message.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-gray-900">{message.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-gray-900">{message.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-gray-900">{message.subject}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-600 line-clamp-2">{message.message}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{message.date}</p>
                      <p className="text-xs font-semibold text-gray-500">{message.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit ${getStatusColor(message.status)}`}>
                      {getStatusIcon(message.status)}
                      {message.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-pink-100 transition-colors">
                        <Reply className="w-4 h-4 text-pink-600" />
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
          {filteredMessages.map((message) => (
            <div key={message.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{message.id}</p>
                  <p className="text-xs font-semibold text-gray-500">{message.date} • {message.time}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${getStatusColor(message.status)}`}>
                  {getStatusIcon(message.status)}
                  {message.status}
                </span>
              </div>

              <div className="space-y-3 mb-3">
                <div className="flex items-start gap-2">
                  <User className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-500">Name</p>
                    <p className="text-sm font-bold text-gray-900">{message.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-500">Subject</p>
                    <p className="text-sm font-bold text-gray-900">{message.subject}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-gray-500 mb-1">Message</p>
                  <p className="text-sm font-semibold text-gray-700">{message.message}</p>
                </div>

                {message.repliedAt && (
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-xs font-semibold text-green-700 mb-1">Reply Sent</p>
                    <p className="text-xs font-semibold text-green-600">
                      {message.repliedAt} by {message.repliedBy}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <button className="flex-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button className="flex-1 px-3 py-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-xs font-semibold text-pink-600 transition-colors flex items-center justify-center gap-2">
                  <Reply className="w-4 h-4" />
                  Reply
                </button>
                <button className="px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <MoreVertical className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMessages.length === 0 && (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No messages found</h3>
            <p className="text-gray-600 font-medium mb-4">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSelectedStatus('all');
                setSearchQuery('');
              }}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredMessages.length > 0 && (
          <div className="p-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-semibold text-gray-600">
              Showing {filteredMessages.length} of {stats.total} messages
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