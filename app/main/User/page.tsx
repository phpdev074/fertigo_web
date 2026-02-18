"use client";
import { motion, AnimatePresence } from 'motion/react';
import {
  Users, UserX, Search, Filter, Eye, Ban, Trash2, UserCheck, Mail, Phone, ChevronDown, AlertTriangle
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchAllUsers, UpdateUser, PatientCount } from '../../api/api_client';

export default function UserManagementScreen() {
  const [activeTab, setActiveTab] = useState<'all' | 'blocked'>('all');
  const [selectedRole, setSelectedRole] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
  const [userData, setUserData] = useState({
    users: [],
    pagination: { page: 1, totalPages: 1, total: 0 },
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [counts, setCounts] = useState({
    totalUsers: 0,
    blockedUsers: 0,
    activeUsers: 0
  });

  // Modal states
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState<{ type: 'block' | 'delete' | 'unblock', user: any } | null>(null);

  const userRoles = [
    { id: 'all', label: 'All Roles', color: 'gray' },
    { id: 'patient', label: 'Patient', color: 'blue' },
    { id: 'provider', label: 'Provider', color: 'purple' },
    { id: 'clinic', label: 'Clinic Admin', color: 'pink' },
    { id: 'admin', label: 'Super Admin', color: 'green' },
  ];

  const loadUsers = async (pageNumber: number = 1, tab: 'all' | 'blocked' = 'all') => {
    setLoading(true);
    try {
      const params: any = {
        page: pageNumber,
        search: searchQuery || '',
        blocked: tab === 'blocked' ? 'yes' : '',
      };

      const response = await fetchAllUsers(params);
      let hit_api = await PatientCount({})
      if (response.data.success) {
        setUserData(response.data.data);
        setUsers(response.data.data.users);
        setPage(response.data.data.pagination.page);
        setTotalPages(response.data.data.pagination.totalPages);
      }

      if (hit_api.data.data) {
        setCounts(hit_api.data.data);
      }

    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  const handler = setTimeout(() => {
    setDebouncedSearch(searchQuery); // update debounced value after 500ms
  }, 500);

  // Cleanup: cancel previous timeout if searchQuery changes
  return () => {
    clearTimeout(handler);
  };
}, [searchQuery]);


  useEffect(() => {
    loadUsers(page, activeTab);
  }, [page, activeTab, debouncedSearch]);

  const handleTabChange = (tab: 'all' | 'blocked') => {
    console.log('Selected tab:', tab);
    loadUsers(1, tab);
    setActiveTab(tab);
  };


  // Handle user actions
  const handleUserAction = async (action: 'block' | 'delete' | 'unblock', userId: string) => {
    try {
      // Close confirmation modal
      setShowConfirmModal(false);
      setConfirmAction(null);

      console.log(`Performing ${action} on user:`, userId);

      let payload: Record<string, any> = { id: userId };

      if (action === 'delete') {
        payload.IsDeleted = true;
      } else if (action === 'block') {
        payload.blocked = true;
      } else if (action === 'unblock') {
        payload.blocked = false;
      }

      console.log('Calling UpdateUser with payload:', payload);
      const response = await UpdateUser(payload);
      console.log('API Response:', response);

      await loadUsers(page);

      // Close user modal if open
      setShowUserModal(false);
      setSelectedUser(null);

    } catch (error) {
      console.error(`Failed to ${action} user:`, error);
    }
  };

  const openConfirmModal = (action: 'block' | 'delete' | 'unblock', user: any) => {
    setConfirmAction({ type: action, user });
    setShowConfirmModal(true);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'patient': return 'bg-blue-100 text-blue-700';
      case 'provider': return 'bg-purple-100 text-purple-700';
      case 'clinic': return 'bg-pink-100 text-pink-700';
      case 'admin': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getRoleLabel = (role: string) => {
    const roleObj = userRoles.find(r => r.id === role);
    return roleObj ? roleObj.label : role;
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    loadUsers(newPage);
  };

  const stats = {
    total: counts.totalUsers || 0,
    blocked: counts.blockedUsers || 0,
    patients: counts.activeUsers || 0,
    providers: users.filter(u => u.isActive && u.role === 'provider').length,
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Patient Management</h2>
        <p className="text-gray-600 font-medium">Manage all patients, roles, and permissions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Patients */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.total}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Total Patients</p>
        </motion.div>

        {/* Blocked Patients */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <UserX className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.blocked}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Blocked Patients</p>
        </motion.div>

        {/* Active Patients */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.patients}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Active Patients</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex items-center gap-2 p-2">
            <button
              onClick={() => {
                setActiveTab('all');
                loadUsers(1);
                handleTabChange('all')
              }}
              className={`flex-1 md:flex-none md:px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'all'
                ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                <span>All Users ({stats.total})</span>
              </span>
            </button>
            <button
              onClick={() => {
                setActiveTab('blocked');
                loadUsers(1);
                handleTabChange('blocked')
              }}
              className={`flex-1 md:flex-none md:px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'blocked'
                ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <span className="flex items-center justify-center gap-2">
                <UserX className="w-5 h-5" />
                <span>Blocked ({stats.blocked})</span>
              </span>
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="p-4 border-b border-gray-200 space-y-3">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search */}
            <div className="flex-1 flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-2.5">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-sm font-medium text-gray-900 w-full placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedRole !== 'all' || searchQuery) && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-gray-500">Active filters:</span>
              {selectedRole !== 'all' && (
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold flex items-center gap-2">
                  {getRoleLabel(selectedRole)}
                  <button
                    onClick={() => setSelectedRole('all')}
                    className="w-4 h-4 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold flex items-center gap-2">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="w-4 h-4 bg-blue-200 rounded-full flex items-center justify-center hover:bg-blue-300 transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedRole('all');
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
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Bookings</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{user.name.charAt(0).toUpperCase()}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-gray-900">{user.name}</p>
                          {user.verified && (
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                              <UserCheck className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-sm font-semibold text-gray-600">{user.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-sm font-semibold text-gray-600">{user.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getRoleColor(user.role)}`}>
                      {getRoleLabel(user.role)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-gray-900">{user.bookingCount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-600">{user.createdAt.split('T')[0]}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setShowUserModal(true);
                        }}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>

                      <button
                        onClick={() => openConfirmModal(
                          !user.blocked ? 'block' : 'unblock',
                          user
                        )}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-yellow-50 transition-colors"
                      >
                        <Ban className="w-4 h-4 text-yellow-600" />
                      </button>

                      <button
                        onClick={() => openConfirmModal('delete', user)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
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
          {users.map((user) => (
            <div key={user.id} className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">{user.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold text-gray-900 truncate">{user.name}</h3>
                    {user.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <UserCheck className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getRoleColor(user.role)}`}>
                    {getRoleLabel(user.role)}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-600 truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-600">{user.phone}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-500">Bookings</p>
                    <p className="text-sm font-bold text-gray-900">{user.bookings}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-500">Joined</p>
                    <p className="text-sm font-bold text-gray-900">{user.joinDate}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setShowUserModal(true);
                  }}
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>

                <button
                  onClick={() => openConfirmModal(
                    user.status === 'active' ? 'block' : 'unblock',
                    user
                  )}
                  className="px-3 py-2 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors"
                >
                  <Ban className="w-4 h-4 text-yellow-600" />
                </button>

                <button
                  onClick={() => openConfirmModal('delete', user)}
                  className="px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {users.length === 0 && (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No users found</h3>
            <p className="text-gray-600 font-medium mb-4">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSelectedRole('all');
                setSearchQuery('');
              }}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {users.length > 0 && (
          <div className="p-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-600">
              Showing {users.length} of {activeTab === 'all' ? stats.total : stats.blocked} users
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(page - 1)}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${page === i + 1
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
                    : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(page + 1)}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* User Detail Modal */}
      <AnimatePresence>
        {showUserModal && selectedUser && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            onClick={() => setShowUserModal(false)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative bg-white rounded-2xl w-full max-w-lg z-10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-24 bg-gradient-to-r from-pink-500 to-pink-600 rounded-t-2xl">
                <button
                  onClick={() => setShowUserModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all group"
                >
                  <span className="text-2xl leading-0 group-hover:scale-110 transition-transform">×</span>
                </button>

                <div className="absolute -bottom-12 left-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-3xl font-bold text-white">
                      {selectedUser.avatar || selectedUser.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-16 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedUser.name}</h2>
                  {selectedUser.verified && (
                    <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold flex items-center gap-1">
                      <UserCheck className="w-3 h-3" />
                      Verified
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-3 text-center">
                    <p className="text-xs font-semibold text-purple-600 mb-1">Bookings</p>
                    <p className="text-xl font-bold text-purple-700">{selectedUser.bookingCount}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-3 text-center">
                    <p className="text-xs font-semibold text-green-600 mb-1">Joined</p>
                    <p className="text-sm font-bold text-green-700">  {selectedUser.createdAt.split('T')[0]}</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-3 text-center">
                    <p className="text-xs font-semibold text-blue-600 mb-1">Status</p>
                    <p
                      className={`text-sm font-bold ${selectedUser.isActive ? 'text-green-600' : 'text-red-600'
                        }`}
                    >
                      {selectedUser.isActive ? 'Active' : 'Inactive'}
                    </p>

                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Email Address</p>
                      <p className="text-sm font-semibold text-gray-900">{selectedUser.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Phone Number</p>
                      <p className="text-sm font-semibold text-gray-900">{selectedUser.phone}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <p className="text-xs font-semibold text-gray-500 mb-1">Role</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getRoleColor(selectedUser.role)}`}>
                        {getRoleLabel(selectedUser.role)}
                      </span>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-xl">
                      <p className="text-xs font-semibold text-gray-500 mb-1">Verification</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${selectedUser.verified
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                        }`}>
                        {selectedUser.verified ? 'Verified' : 'Pending'}
                      </span>
                    </div>
                  </div>

                  {selectedUser.id && (
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <p className="text-xs font-semibold text-gray-500 mb-1">User ID</p>
                      <p className="text-xs font-mono text-gray-600">{selectedUser.id}</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setShowUserModal(false);
                      openConfirmModal(
                        !selectedUser.blocked ? 'block' : 'unblock',
                        selectedUser
                      );
                    }}
                    className={`flex-1 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${selectedUser.status === 'active'
                      ? 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border border-yellow-200'
                      : 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
                      }`}
                  >
                    <Ban className="w-4 h-4" />
                    {selectedUser.status === 'active' ? 'Block User' : 'Unblock User'}
                  </button>

                  <button
                    onClick={() => {
                      setShowUserModal(false);
                      openConfirmModal('delete', selectedUser);
                    }}
                    className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 bg-red-50 text-red-700 hover:bg-red-100 border border-red-200"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete User
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmModal && confirmAction && (
          <div
            className="fixed inset-0 flex items-center justify-center z-[60] p-4"
            onClick={() => {
              setShowConfirmModal(false);
              setConfirmAction(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative bg-white rounded-2xl w-full max-w-md z-10 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header based on action type */}
              <div className={`h-2 w-full ${confirmAction.type === 'delete'
                ? 'bg-red-500'
                : confirmAction.type === 'block'
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
                }`} />

              <div className="p-6">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${confirmAction.type === 'delete'
                  ? 'bg-red-100'
                  : confirmAction.type === 'block'
                    ? 'bg-yellow-100'
                    : 'bg-green-100'
                  }`}>
                  {confirmAction.type === 'delete' ? (
                    <Trash2 className="w-8 h-8 text-red-600" />
                  ) : confirmAction.type === 'block' ? (
                    <Ban className="w-8 h-8 text-yellow-600" />
                  ) : (
                    <UserCheck className="w-8 h-8 text-green-600" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {confirmAction.type === 'delete' && 'Delete User'}
                  {confirmAction.type === 'block' && 'Block User'}
                  {confirmAction.type === 'unblock' && 'Unblock User'}
                </h3>

                {/* Message */}
                <p className="text-gray-600 text-center mb-6">
                  {confirmAction.type === 'delete' && (
                    <>Are you sure you want to delete <span className="font-bold text-gray-900">{confirmAction.user.name}</span>? This action cannot be undone.</>
                  )}
                  {confirmAction.type === 'block' && (
                    <>Are you sure you want to block <span className="font-bold text-gray-900">{confirmAction.user.name}</span>? They will not be able to access their account.</>
                  )}
                  {confirmAction.type === 'unblock' && (
                    <>Are you sure you want to unblock <span className="font-bold text-gray-900">{confirmAction.user.name}</span>? They will regain access to their account.</>
                  )}
                </p>

                {/* User info preview */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-white">
                        {confirmAction.user.avatar || confirmAction.user.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-900 truncate">{confirmAction.user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{confirmAction.user.email}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${getRoleColor(confirmAction.user.role)}`}>
                      {getRoleLabel(confirmAction.user.role)}
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setShowConfirmModal(false);
                      setConfirmAction(null);
                    }}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => handleUserAction(confirmAction.type, confirmAction.user._id)}
                    className={`flex-1 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${confirmAction.type === 'delete'
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : confirmAction.type === 'block'
                        ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                        : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                  >
                    {confirmAction.type === 'delete' && (
                      <>
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </>
                    )}
                    {confirmAction.type === 'block' && (
                      <>
                        <Ban className="w-4 h-4" />
                        Block
                      </>
                    )}
                    {confirmAction.type === 'unblock' && (
                      <>
                        <UserCheck className="w-4 h-4" />
                        Unblock
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}