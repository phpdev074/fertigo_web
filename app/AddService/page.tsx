"use client"
import { motion, AnimatePresence } from 'motion/react';
import { 
  Package, Plus, Search, Filter, X, Upload, Image as ImageIcon,
  Edit, Trash2, MoreVertical, Layers, ChevronDown, FolderPlus,
  Tag, Grid, List, Eye, CheckCircle
} from 'lucide-react';
import { useState } from 'react';

export default function AdminServicesScreen() {
  const [activeTab, setActiveTab] = useState<'services' | 'subcategories'>('services');
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showAddSubcategoryModal, setShowAddSubcategoryModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [iconPreview, setIconPreview] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Form states
  const [categoryName, setCategoryName] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');
  const [selectedService, setSelectedService] = useState('');

  // Mock categories/services data
  const categories = [
    {
      id: 'CAT-001',
      name: 'Laboratory Tests',
      icon: '🔬',
      subcategories: 12,
      status: 'active',
      createdDate: 'Dec 20, 2024',
      totalBookings: 345,
      color: 'blue',
    },
    {
      id: 'CAT-002',
      name: 'Consultations',
      icon: '👨‍⚕️',
      subcategories: 8,
      status: 'active',
      createdDate: 'Dec 18, 2024',
      totalBookings: 567,
      color: 'purple',
    },
    {
      id: 'CAT-003',
      name: 'Imaging Services',
      icon: '📷',
      subcategories: 6,
      status: 'active',
      createdDate: 'Dec 15, 2024',
      totalBookings: 234,
      color: 'pink',
    },
    {
      id: 'CAT-004',
      name: 'Procedures',
      icon: '⚕️',
      subcategories: 15,
      status: 'active',
      createdDate: 'Dec 10, 2024',
      totalBookings: 189,
      color: 'green',
    },
    {
      id: 'CAT-005',
      name: 'Counseling',
      icon: '💬',
      subcategories: 4,
      status: 'active',
      createdDate: 'Dec 05, 2024',
      totalBookings: 98,
      color: 'yellow',
    },
    {
      id: 'CAT-006',
      name: 'Medications',
      icon: '💊',
      subcategories: 20,
      status: 'inactive',
      createdDate: 'Nov 28, 2024',
      totalBookings: 156,
      color: 'red',
    },
  ];

  // Mock subcategories data
  const subcategories = [
    {
      id: 'SUB-001',
      name: 'Blood Tests',
      category: 'Laboratory Tests',
      categoryId: 'CAT-001',
      status: 'active',
      createdDate: 'Dec 22, 2024',
      providers: 45,
      avgPrice: 85,
    },
    {
      id: 'SUB-002',
      name: 'Hormone Panel',
      category: 'Laboratory Tests',
      categoryId: 'CAT-001',
      status: 'active',
      createdDate: 'Dec 22, 2024',
      providers: 38,
      avgPrice: 120,
    },
    {
      id: 'SUB-003',
      name: 'Initial Consultation',
      category: 'Consultations',
      categoryId: 'CAT-002',
      status: 'active',
      createdDate: 'Dec 20, 2024',
      providers: 67,
      avgPrice: 150,
    },
    {
      id: 'SUB-004',
      name: 'Follow-up Visit',
      category: 'Consultations',
      categoryId: 'CAT-002',
      status: 'active',
      createdDate: 'Dec 20, 2024',
      providers: 67,
      avgPrice: 80,
    },
    {
      id: 'SUB-005',
      name: 'Ultrasound Scan',
      category: 'Imaging Services',
      categoryId: 'CAT-003',
      status: 'active',
      createdDate: 'Dec 18, 2024',
      providers: 34,
      avgPrice: 200,
    },
    {
      id: 'SUB-006',
      name: 'IUI Procedure',
      category: 'Procedures',
      categoryId: 'CAT-004',
      status: 'active',
      createdDate: 'Dec 15, 2024',
      providers: 28,
      avgPrice: 450,
    },
    {
      id: 'SUB-007',
      name: 'IVF Consultation',
      category: 'Consultations',
      categoryId: 'CAT-002',
      status: 'active',
      createdDate: 'Dec 12, 2024',
      providers: 45,
      avgPrice: 200,
    },
    {
      id: 'SUB-008',
      name: 'Genetic Testing',
      category: 'Laboratory Tests',
      categoryId: 'CAT-001',
      status: 'inactive',
      createdDate: 'Dec 10, 2024',
      providers: 12,
      avgPrice: 350,
    },
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', label: 'All Status' },
    { id: 'active', label: 'Active Only' },
    { id: 'inactive', label: 'Inactive Only' },
  ];

  // Filtered data
  const filteredCategories = categories.filter((cat) => {
    const matchesSearch = cat.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || cat.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const filteredSubcategories = subcategories.filter((sub) => {
    const matchesSearch = sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sub.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || sub.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-100 text-blue-700',
      purple: 'bg-purple-100 text-purple-700',
      pink: 'bg-pink-100 text-pink-700',
      green: 'bg-green-100 text-green-700',
      yellow: 'bg-yellow-100 text-yellow-700',
      red: 'bg-red-100 text-red-700',
    };
    return colors[color] || 'bg-gray-100 text-gray-700';
  };

  const stats = {
    totalCategories: categories.length,
    activeCategories: categories.filter(c => c.status === 'active').length,
    totalSubcategories: subcategories.length,
    activeSubcategories: subcategories.filter(s => s.status === 'active').length,
  };

  const handleIconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCategory = () => {
    // Handle category submission logic here
    console.log('Adding category:', categoryName);
    setShowAddCategoryModal(false);
    setCategoryName('');
    setIconPreview(null);
  };

  const handleAddSubcategory = () => {
    // Handle subcategory submission logic here
    console.log('Adding subcategory:', subcategoryName, 'to service:', selectedService);
    setShowAddSubcategoryModal(false);
    setSubcategoryName('');
    setSelectedService('');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Service Management</h2>
        <p className="text-gray-600 font-medium">Manage service categories and subcategories</p>
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
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.totalCategories}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Total Categories</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.activeCategories}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Active Categories</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
              <Layers className="w-5 h-5 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.totalSubcategories}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Total Subcategories</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Tag className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.activeSubcategories}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Active Subcategories</p>
        </motion.div>
      </div>

      {/* Main Content Card */}
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
              onClick={() => setActiveTab('services')}
              className={`flex-1 md:flex-none md:px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'services'
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Package className="w-5 h-5" />
                <span>Services ({stats.totalCategories})</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('subcategories')}
              className={`flex-1 md:flex-none md:px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'subcategories'
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Layers className="w-5 h-5" />
                <span>Sub-categories ({stats.totalSubcategories})</span>
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
                placeholder={activeTab === 'services' ? 'Search categories...' : 'Search subcategories...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-sm font-medium text-gray-900 w-full placeholder:text-gray-400"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="w-full md:w-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors bg-white"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-600">
                    {filterOptions.find(f => f.id === selectedFilter)?.label}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {showFilterDropdown && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                  {filterOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSelectedFilter(option.id);
                        setShowFilterDropdown(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm font-semibold transition-colors ${
                        selectedFilter === option.id
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

            {/* View Toggle (Services tab only) */}
            {activeTab === 'services' && (
              <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-pink-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-lg transition-all ${
                    viewMode === 'list'
                      ? 'bg-white text-pink-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Add Button */}
            <button
              onClick={() => activeTab === 'services' ? setShowAddCategoryModal(true) : setShowAddSubcategoryModal(true)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg"
            >
              <Plus className="w-5 h-5" />
              <span>Add {activeTab === 'services' ? 'Category' : 'Subcategory'}</span>
            </button>
          </div>

          {/* Active Filters Display */}
          {(selectedFilter !== 'all' || searchQuery) && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-gray-500">Active filters:</span>
              {selectedFilter !== 'all' && (
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold flex items-center gap-2">
                  {filterOptions.find(f => f.id === selectedFilter)?.label}
                  <button
                    onClick={() => setSelectedFilter('all')}
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
                  setSelectedFilter('all');
                  setSearchQuery('');
                }}
                className="text-xs font-semibold text-gray-500 hover:text-gray-700 underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Services Tab Content */}
        {activeTab === 'services' && (
          <>
            {/* Grid View */}
            {viewMode === 'grid' && (
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCategories.map((category) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl">
                          {category.icon}
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                      <p className="text-sm font-semibold text-gray-500 mb-4">{category.id}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-gray-500">Subcategories:</span>
                          <span className="text-sm font-bold text-gray-900">{category.subcategories}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-gray-500">Total Bookings:</span>
                          <span className="text-sm font-bold text-gray-900">{category.totalBookings}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-gray-500">Created:</span>
                          <span className="text-sm font-bold text-gray-900">{category.createdDate}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          category.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {category.status}
                        </span>
                        <button className="px-4 py-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-600 text-xs font-semibold transition-colors flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* List View */}
            {viewMode === 'list' && (
              <>
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Subcategories</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Bookings</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Created</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredCategories.map((category) => (
                        <tr key={category.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-xl">
                                {category.icon}
                              </div>
                              <span className="text-sm font-bold text-gray-900">{category.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-semibold text-gray-600">{category.id}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-bold text-gray-900">{category.subcategories}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-bold text-gray-900">{category.totalBookings}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              category.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                            }`}>
                              {category.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-semibold text-gray-600">{category.createdDate}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                                <Eye className="w-4 h-4 text-gray-600" />
                              </button>
                              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                                <Edit className="w-4 h-4 text-gray-600" />
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

                {/* Mobile Cards */}
                <div className="md:hidden divide-y divide-gray-200">
                  {filteredCategories.map((category) => (
                    <div key={category.id} className="p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                          {category.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-gray-900 mb-1">{category.name}</h3>
                          <p className="text-xs font-semibold text-gray-500 mb-2">{category.id}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                            category.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {category.status}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="text-center">
                          <p className="text-xs font-semibold text-gray-500">Subcategories</p>
                          <p className="text-sm font-bold text-gray-900">{category.subcategories}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-semibold text-gray-500">Bookings</p>
                          <p className="text-sm font-bold text-gray-900">{category.totalBookings}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-semibold text-gray-500">Created</p>
                          <p className="text-sm font-bold text-gray-900">{category.createdDate.split(',')[0]}</p>
                        </div>
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
                        <button className="px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* Subcategories Tab Content */}
        {activeTab === 'subcategories' && (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Subcategory</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Providers</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Avg Price</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Created</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredSubcategories.map((sub) => (
                    <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-bold text-gray-900">{sub.name}</p>
                          <p className="text-xs font-semibold text-gray-500">{sub.id}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-600">{sub.category}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-gray-900">{sub.providers}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-pink-600">${sub.avgPrice}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          sub.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {sub.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-600">{sub.createdDate}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                            <Edit className="w-4 h-4 text-gray-600" />
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

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-200">
              {filteredSubcategories.map((sub) => (
                <div key={sub.id} className="p-4">
                  <div className="mb-3">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{sub.name}</h3>
                    <p className="text-xs font-semibold text-gray-500 mb-2">{sub.id}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">
                        {sub.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        sub.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {sub.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-center">
                      <p className="text-xs font-semibold text-gray-500">Providers</p>
                      <p className="text-sm font-bold text-gray-900">{sub.providers}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-semibold text-gray-500">Avg Price</p>
                      <p className="text-sm font-bold text-pink-600">${sub.avgPrice}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-semibold text-gray-500">Created</p>
                      <p className="text-sm font-bold text-gray-900">{sub.createdDate.split(',')[0]}</p>
                    </div>
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
                    <button className="px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Empty State */}
        {((activeTab === 'services' && filteredCategories.length === 0) || 
          (activeTab === 'subcategories' && filteredSubcategories.length === 0)) && (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {activeTab === 'services' ? (
                <Package className="w-8 h-8 text-gray-400" />
              ) : (
                <Layers className="w-8 h-8 text-gray-400" />
              )}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              No {activeTab === 'services' ? 'categories' : 'subcategories'} found
            </h3>
            <p className="text-gray-600 font-medium mb-4">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSelectedFilter('all');
                setSearchQuery('');
              }}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </motion.div>

      {/* Add Category Modal */}
      <AnimatePresence>
        {showAddCategoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <FolderPlus className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">Add New Category</h3>
                  </div>
                  <button
                    onClick={() => {
                      setShowAddCategoryModal(false);
                      setCategoryName('');
                      setIconPreview(null);
                    }}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Icon Upload */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Category Icon
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
                      {iconPreview ? (
                        <img src={iconPreview} alt="Icon preview" className="w-16 h-16 object-cover rounded-xl" />
                      ) : (
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <label className="cursor-pointer flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-colors">
                        <Upload className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-semibold text-gray-600">Upload Icon</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleIconUpload}
                          className="hidden"
                        />
                      </label>
                      <p className="text-xs font-semibold text-gray-500 mt-2">
                        PNG, JPG, SVG (Max 2MB)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Category Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Category Name
                  </label>
                  <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Enter category name..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-gray-50 flex items-center gap-3">
                <button
                  onClick={() => {
                    setShowAddCategoryModal(false);
                    setCategoryName('');
                    setIconPreview(null);
                  }}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCategory}
                  disabled={!categoryName.trim()}
                  className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add Category
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add Subcategory Modal */}
      <AnimatePresence>
        {showAddSubcategoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">Add New Subcategory</h3>
                  </div>
                  <button
                    onClick={() => {
                      setShowAddSubcategoryModal(false);
                      setSubcategoryName('');
                      setSelectedService('');
                    }}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Select Service */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Select Service Category
                  </label>
                  <div className="relative">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-900 appearance-none bg-white"
                    >
                      <option value="">Choose a category...</option>
                      {categories.filter(c => c.status === 'active').map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.icon} {cat.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Subcategory Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Subcategory Name
                  </label>
                  <input
                    type="text"
                    value={subcategoryName}
                    onChange={(e) => setSubcategoryName(e.target.value)}
                    placeholder="Enter subcategory name..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-gray-50 flex items-center gap-3">
                <button
                  onClick={() => {
                    setShowAddSubcategoryModal(false);
                    setSubcategoryName('');
                    setSelectedService('');
                  }}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddSubcategory}
                  disabled={!subcategoryName.trim() || !selectedService}
                  className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add Subcategory
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
