"use client";
import { motion } from 'motion/react';
import {
  MessageSquare, Search, Filter, ChevronDown, Eye, Reply,
  X, Clock, CheckCircle, AlertCircle, MoreVertical,
  User, Mail, Calendar, FileText, RefreshCw, Send
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { AdminTicket, TicketReply, UpdateTicket, TicketCounts } from '@/app/api/api_client';
import Loader from '@/app/components/PageLoader';


export default function ContactUsScreen() {
  interface TicketsCountsType {
    total: number;
    open: number;
    pending: number;
    resolved: number;
  }

  interface Message {
    role: 'user' | 'admin';
    message: string;
    created_at: string;
    _id: string;
  }

  interface Ticket {
    messages: Message[];
    [key: string]: any;
  }

  type Inquiry = {
    _id: string;
    messages: Message[];
    [key: string]: any;
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('all');
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [TicketsCounts, setTicketsCounts] = useState<TicketsCountsType>({
    total: 0,
    open: 0,
    pending: 0,
    resolved: 0,
  });
  const [allMessages, setTickets] = useState<Ticket[]>([]);
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  } | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<Ticket | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replyText, setReplyText] = useState('');;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

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



  let get_counts = async function getData(data: any) {
    try {
      setLoading(true);
      const res = await TicketCounts(data);
      if (res.data.data) {
        setTicketsCounts(res.data.data)
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
    finally {
      setLoading(false);
    }
  };


  let tickets_listing = async function getData(data: any) {
    try {
      setLoading(true);
      const res = await AdminTicket(data);
      if (res.data.data) {
        setTickets(res.data.data.tickets);
        setPagination(res.data.data.pagination);
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    get_counts({});
  }, []);



  useEffect(() => {

    const apiStatusMap = {
      all: '',
      pending: 'pending',
      replied: 'open',
      resolved: 'resolved',
    };

    const apiStatus = apiStatusMap[selectedStatus as keyof typeof apiStatusMap];

    tickets_listing({ status: apiStatus, page: '' });
  }, [selectedStatus]);


  const stats = {
    total: TicketsCounts.total,
    pending: TicketsCounts.pending,
    replied: TicketsCounts.open,
    resolved: TicketsCounts.resolved
  };



  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'open': return <CheckCircle className="w-4 h-4" />;
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


  // Add this function inside your component
  const handleReplySubmit = async () => {
    if (!replyText.trim()) return;

    setIsSubmitting(true);
    try {

      await TicketReply({
        ticket_id: selectedMessage?._id,
        reply_message: replyText
      })

      tickets_listing({ status: '', page: '' });
      setShowReplyModal(false);
      setReplyText('');
    } catch (error) {
      console.error('Failed to send reply:', error);
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleMarkAsResolved = async (ticketId: string) => {
    try {

      let status = await UpdateTicket({
        ticket_id: ticketId,
        new_status: "resolved"
      })

      setOpenDropdownId(null);
    } catch (error) {
      console.log(error)
    }
  }

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
                placeholder="Search by subject"
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
          {loading ? (
            <Loader />
          ) : (
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
                {allMessages.map((message) => (
                  <tr key={message.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-gray-900">{message._id.slice(0, 8)}...</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-gray-900">{message.sender.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-gray-900">{message.subject}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-600 line-clamp-2">{message.messages[0].message}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">
                            {new Date(message.created_at).toLocaleDateString(undefined, {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                          <p className="text-xs font-semibold text-gray-500">
                            {new Date(message.created_at).toLocaleTimeString(undefined, {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
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
                        <button
                          onClick={() => {
                            setSelectedMessage(message);
                            setShowModal(true);
                          }}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                        <button

                          onClick={() => {
                            setSelectedMessage(message);
                            setReplyText('');
                            setShowReplyModal(true);
                          }}

                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-pink-100 transition-colors">
                          <Reply className="w-4 h-4 text-pink-600" />
                        </button>
                        <button
                          onClick={() => setOpenDropdownId(openDropdownId === message._id ? null : message._id)}

                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                          <MoreVertical className="w-4 h-4 text-gray-600" />
                        </button>


                        {openDropdownId === message._id && (
                          <>
                            {/* Backdrop to handle outside clicks */}
                            <div
                              className="fixed inset-0 z-40"
                              onClick={() => setOpenDropdownId(null)}
                            />

                            {/* Dropdown Menu */}
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-1 z-50">
                              {/* Menu Header */}
                              <div className="px-4 py-2 border-b border-gray-100">
                                <p className="text-xs font-semibold text-gray-400">TICKET ACTIONS</p>
                              </div>

                              {/* Mark as Resolved Option */}
                              <button
                                onClick={() => {
                                  console.log("Mark as Resolved clicked for ticket ID:", message._id);
                                  handleMarkAsResolved(message._id);
                                  setOpenDropdownId(null);
                                }}
                                disabled={message.status === 'resolved'}
                                className={`w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors flex items-center gap-2
          ${message.status === 'resolved'
                                    ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                                    : 'text-gray-700 hover:bg-gray-50'
                                  }`}
                              >
                                <CheckCircle className={`w-4 h-4 ${message.status === 'resolved' ? 'text-gray-400' : 'text-green-600'}`} />
                                <span className="flex-1">Mark as Resolved</span>
                                {message.status === 'resolved' && (
                                  <span className="text-xs text-gray-400">Current</span>
                                )}
                              </button>
                            </div>
                          </>
                        )}

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Mobile/Tablet Cards */}
        <div className="lg:hidden divide-y divide-gray-200">
          {allMessages.map((message) => (
            <div key={message.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{message._id.slice(0, 8)}...</p>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {new Date(message.created_at).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="text-xs font-semibold text-gray-500">
                      {new Date(message.created_at).toLocaleTimeString(undefined, {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
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
                    <p className="text-sm font-bold text-gray-900">{message.sender.name}</p>
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
                  <p className="text-sm font-semibold text-gray-700">{message.messages[0].message}</p>
                </div>

                {/* {message.repliedAt && (
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-xs font-semibold text-green-700 mb-1">Reply Sent</p>
                    <p className="text-xs font-semibold text-green-600">
                      {message.repliedAt} by {message.repliedBy}
                    </p>
                  </div>
                )} */}
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <button
                  onClick={() => {
                    setSelectedMessage(message);
                    setShowModal(true);
                  }}
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button

                  onClick={() => {
                    setSelectedMessage(message);
                    setReplyText('');
                    setShowReplyModal(true);
                  }}

                  className="flex-1 px-3 py-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-xs font-semibold text-pink-600 transition-colors flex items-center justify-center gap-2">
                  <Reply className="w-4 h-4" />
                  Reply
                </button>
                <button
                  onClick={() => setOpenDropdownId(openDropdownId === message._id ? null : message._id)}

                  className="px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <MoreVertical className="w-4 h-4 text-blue-600" />
                </button>


                {openDropdownId === message._id && (
                  <>
                    {/* Backdrop to handle outside clicks */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setOpenDropdownId(null)}
                    />

                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-1 z-50">
                      {/* Menu Header */}
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-400">TICKET ACTIONS</p>
                      </div>

                      {/* Mark as Resolved Option */}
                      <button
                        onClick={() => {
                          console.log("Mark as Resolved clicked for ticket ID:", message._id);
                          handleMarkAsResolved(message._id);
                          setOpenDropdownId(null);
                        }}
                        disabled={message.status === 'resolved'}
                        className={`w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors flex items-center gap-2
          ${message.status === 'resolved'
                            ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-50'
                          }`}
                      >
                        <CheckCircle className={`w-4 h-4 ${message.status === 'resolved' ? 'text-gray-400' : 'text-green-600'}`} />
                        <span className="flex-1">Mark as Resolved</span>
                        {message.status === 'resolved' && (
                          <span className="text-xs text-gray-400">Current</span>
                        )}
                      </button>
                    </div>
                  </>
                )}

              </div>
            </div>
          ))}
        </div>


        {showModal && selectedMessage && (
          <div
            className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)} // Click outside to close
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                <h3 className="text-xl font-bold text-gray-900">Message Details</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Customer Info */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-gray-500 mb-3">Customer Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs font-semibold text-gray-500">Name</p>
                        <p className="text-sm font-bold text-gray-900">
                          {selectedMessage.sender?.name || 'N/A'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs font-semibold text-gray-500">Email</p>
                        <p className="text-sm font-bold text-gray-900">
                          {selectedMessage.sender?.email || 'N/A'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ticket Info Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-gray-500 mb-1">Message ID</p>
                    <p className="text-sm font-bold text-gray-900">{selectedMessage._id}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-gray-500 mb-1">Subject</p>
                    <p className="text-sm font-bold text-gray-900">{selectedMessage.subject}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-gray-500 mb-1">Status</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit ${selectedMessage.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      selectedMessage.status === 'open' ? 'bg-green-100 text-green-700' :
                        selectedMessage.status === 'resolved' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                      }`}>
                      {selectedMessage.status === 'pending' && <Clock className="w-3 h-3" />}
                      {selectedMessage.status === 'open' && <CheckCircle className="w-3 h-3" />}
                      {selectedMessage.status === 'resolved' && <CheckCircle className="w-3 h-3" />}
                      {selectedMessage.status}
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-gray-500 mb-1">Created</p>
                    <p className="text-sm font-bold text-gray-900">
                      {new Date(selectedMessage.created_at).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>

                {/* Message Thread */}
                <div>
                  <h4 className="text-sm font-bold text-gray-500 mb-3">Message Thread</h4>
                  <div className="space-y-4">
                    {selectedMessage.messages?.map((msg: any, index: number) => (
                      <div
                        key={msg._id || index}
                        className={`p-4 rounded-xl ${msg.role === 'admin' || msg.sender_id !== selectedMessage.sender_id
                          ? 'bg-pink-50 ml-4 border border-pink-200'
                          : 'bg-gray-50 mr-4'
                          }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${msg.role === 'admin' || msg.sender_id !== selectedMessage.sender_id
                            ? 'bg-pink-200 text-pink-700'
                            : 'bg-gray-200 text-gray-700'
                            }`}>
                            {msg.role === 'admin' || msg.sender_id !== selectedMessage.sender_id
                              ? 'Admin Reply'
                              : 'Customer Message'}
                          </span>
                          <span className="text-xs font-semibold text-gray-500">
                            {new Date(msg.created_at).toLocaleString(undefined, {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-gray-700 whitespace-pre-wrap">
                          {msg.message}
                        </p>

                        {msg.role === 'admin' && (
                          <div className="mt-2 text-xs text-gray-500">
                            Replied by: Admin
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assignment Info (if any) */}
                {selectedMessage.assigned_to && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-gray-500 mb-1">Assigned To</p>
                    <p className="text-sm font-bold text-gray-900">{selectedMessage.assigned_to}</p>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3 sticky bottom-0 bg-white">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setReplyText('');
                    setShowReplyModal(true);
                  }}

                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all flex items-center gap-2"
                >
                  <Reply className="w-4 h-4" />
                  Reply
                </button>
              </div>
            </motion.div>
          </div>
        )}


        {showReplyModal && selectedMessage && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowReplyModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Reply to Message</h3>
                  <p className="text-sm text-gray-500 mt-1">Send a response to {selectedMessage.sender?.name || 'customer'}</p>
                </div>
                <button
                  onClick={() => setShowReplyModal(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Original Message Preview */}
                <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-pink-400">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-500">ORIGINAL MESSAGE</span>
                    <span className="text-xs font-semibold text-gray-500">
                      {new Date(selectedMessage.created_at).toLocaleString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 whitespace-pre-wrap">
                    {selectedMessage.messages?.[0]?.message || 'No message content'}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    <span>{selectedMessage.sender?.name} ({selectedMessage.sender?.email})</span>
                  </div>
                </div>

                {/* Subject Line */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-500 mb-1">SUBJECT</p>
                  <p className="text-sm font-bold text-gray-900">{selectedMessage.subject}</p>
                </div>

                {/* Reply Input */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-bold text-gray-700">Your Reply</label>
                    <span className="text-xs text-gray-500">
                      {replyText.length}/1000 characters
                    </span>
                  </div>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value.slice(0, 1000))}
                    placeholder="Type your reply here..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm font-semibold text-gray-700 placeholder:text-gray-400 resize-none"
                  />
                </div>

              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-gray-200 flex items-center justify-between gap-3 sticky bottom-0 bg-white">
                <div className="flex items-center gap-2">
                  {/* Status Update Dropdown (Optional) */}

                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowReplyModal(false)}
                    className="px-6 py-2 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleReplySubmit}
                    disabled={!replyText.trim() || isSubmitting}
                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Reply
                      </>
                    )}
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}


        {/* Empty State */}
        {allMessages.length === 0 && (
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
        {/* {filteredMessages.length > 0 && (
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
        )} */}
      </motion.div>
    </div>
  );
}