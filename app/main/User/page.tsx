"use client";
import { motion } from 'motion/react';
import {
  Users, UserX, Search, Filter, Eye, Ban, Trash2, UserCheck, Mail, Phone, ChevronDown
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchAllUsers } from '../../api/api_client';

export default function UserManagementScreen() {
  const [activeTab, setActiveTab] = useState<'all' | 'blocked'>('all');
  const [selectedRole, setSelectedRole] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  // const [userData, setUserData ] = useState();
  const [userData, setUserData] = useState({
    users: [],
    pagination: { page: 1, totalPages: 1, total: 0 },
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [showUserModal, setShowUserModal] = useState(false);

console.log(selectedUser, "--selectedUser")

  const userRoles = [
    { id: 'all', label: 'All Roles', color: 'gray' },
    { id: 'patient', label: 'Patient', color: 'blue' },
    { id: 'provider', label: 'Provider', color: 'purple' },
    { id: 'clinic', label: 'Clinic Admin', color: 'pink' },
    { id: 'admin', label: 'Super Admin', color: 'green' },
  ];

  const loadUsers = async (pageNumber: number = 1) => {
    setLoading(true);
    try {
      const response = await fetchAllUsers({ page: pageNumber });
      if (response.data.success) {
        setUserData(response.data.data);
        setUsers(response.data.data.users);
        setPage(response.data.data.pagination.page);
        setTotalPages(response.data.data.pagination.totalPages);
      }
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers(page);
  }, [page]);

  // Filter users based on active tab, role, and search
  const filteredUsers = users
    .filter((user) => {
      const isActive = user.isActive ?? true;
      const matchesTab = activeTab === 'all' ? isActive : !isActive;
      const matchesRole = selectedRole === 'all' || user.role === selectedRole;
      const matchesSearch = user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesRole && matchesSearch;
    })
    .map((user) => ({
      id: user._id,
      name: user.name,
      email: user.email,
      phone: `${user.countryCode || ''}${user.mobileNumber || ''}`,
      role: user.role,
      status: user.isActive ? 'active' : 'blocked',
      joinDate: new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      bookings: user.serviceType?.length || 0,
      avatar: user.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'NA',
      verified: user.isVerified ?? false,
    }));

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
    total: userData?.pagination?.total || 0,
    blocked: 0,
    patients: 0,
    providers: 0,
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
                loadUsers(1); // Always fetch first page when switching tab
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
                loadUsers(1); // Fetch API for blocked users
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

            {/* Role Filter */}
            {/* <div className="relative">
              <button
                onClick={() => setShowRoleFilter(!showRoleFilter)}
                className="w-full md:w-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors bg-white"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-600">
                    {getRoleLabel(selectedRole)}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {showRoleFilter && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                  {userRoles.map((role) => (
                    <button
                      key={role.id}
                      onClick={() => {
                        setSelectedRole(role.id);
                        setShowRoleFilter(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm font-semibold transition-colors ${
                        selectedRole === role.id
                          ? 'bg-pink-50 text-pink-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {role.label}
                    </button>
                  ))}
                </div>
              )}
            </div> */}
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
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{user.avatar}</span>
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
                        {/* <p className="text-xs font-semibold text-gray-500">{user.id}</p> */}
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
                    <span className="text-sm font-bold text-gray-900">{user.bookings}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-600">{user.joinDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {/* <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button> */}

                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setShowUserModal(true);
                        }}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>



                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-yellow-50 transition-colors">
                        <Ban className="w-4 h-4 text-yellow-600" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors">
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
          {filteredUsers.map((user) => (
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
                  <p className="text-xs font-semibold text-gray-500 mb-2">{user.id}</p>
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
                {/* <button className="flex-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  View
                </button> */}

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


                <button className="px-3 py-2 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors">
                  <Ban className="w-4 h-4 text-yellow-600" />
                </button>
                <button className="px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
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
        {/* {filteredUsers.length > 0 && (
          <div className="p-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-600">
              Showing {filteredUsers.length} of {activeTab === 'all' ? stats.total : stats.blocked} users
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
                Next
              </button>
            </div>
          </div>
        )}
         */}

        {filteredUsers.length > 0 && (
          <div className="p-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-600">
              Showing {filteredUsers.length} of {activeTab === 'all' ? stats.total : stats.blocked} users
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



{showUserModal && selectedUser && (
  <div
    className="fixed inset-0 flex items-center justify-center z-50"
    onClick={() => setShowUserModal(false)} 
  >

    <div
      className="relative bg-white rounded-2xl w-11/12 md:w-1/2 p-6 z-10"
      onClick={(e) => e.stopPropagation()} 
    >
      <button
        onClick={() => setShowUserModal(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
      >
        ×
      </button>

      <h2 className="text-xl font-bold mb-4 text-black">{selectedUser.name}</h2>
      <div className="space-y-2 text-sm">
<p className="text-gray-800">
  <span className="font-semibold text-black-600">Email:</span> {selectedUser.email}
</p>
        <p className="text-gray-800"><span className="font-semibold">Phone:</span> {selectedUser.phone}</p>
        <p className="text-gray-800"><span className="font-semibold">Role:</span> {getRoleLabel(selectedUser.role)}</p>
        <p className="text-gray-800"><span className="font-semibold">Status:</span> {selectedUser.status}</p>
        <p className="text-gray-800"><span className="font-semibold">Verified:</span> {selectedUser.verified ? 'Yes' : 'No'}</p>
        <p className="text-gray-800"><span className="font-semibold">Joined:</span> {selectedUser.joinDate}</p>
        <p className="text-gray-800"><span className="font-semibold">Bookings:</span> {selectedUser.bookings}</p>
      </div>
    </div>
  </div>
)}



    </div>
  );
}
