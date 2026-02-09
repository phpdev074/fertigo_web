"use client";
import { motion } from 'motion/react';
import {
  Building2, Search, Filter, Eye, Trash2,
  Plus, Mail, Phone, MapPin, Star, CheckCircle,
  ChevronDown, Edit
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GetProviders } from '@/app/api/api_client';
import { IMAGE_BASE_URL } from '@/app/api/api';

interface ProviderManagementScreenProps {
  onAddProvider?: () => void;
  onEditProvider?: (provider: any) => void;
}

export default function Provider({ onAddProvider, onEditProvider }: ProviderManagementScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  const [providers, setProviders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [imageErrorIds, setImageErrorIds] = useState<Record<string, boolean>>({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalProviders, setTotalProviders] = useState(0);
  const [activeProviders, setActiveProviders] = useState(0);


  const router = useRouter();

  const handleAddProvider = () => {
    router.push('/main/AddProvider');
  }
  const [currentPage, setCurrentPage] = useState(1);

  // Categories for filter
  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'fertility-clinic', label: 'Fertility Clinic' },
    { id: 'lab', label: 'Laboratory' },
    { id: 'pharmacy', label: 'Pharmacy' },
    { id: 'counseling', label: 'Counseling' },
    { id: 'transport', label: 'Transport' },
  ];

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setLoading(true);

        const res = await GetProviders({ page });

        if (res.data?.status) {
          const { providers, pagination, counts } = res.data.data;

          const normalizedProviders = providers.map((p: any) => ({
            id: p._id,
            name: p.name,
            email: p.email,
            logo: p.providerLogo
              ? p.providerLogo
              : p.name?.slice(0, 2).toUpperCase(),
            phone: `${p.countryCode ?? ''} ${p.mobileNumber ?? ''}`,
            address: `${p.address?.fullAddress ?? ''}, ${p.address?.city ?? ''}, ${p.address?.country ?? ''}`,
            verified: p.isVerified,
            status: p.isActive ? 'active' : 'inactive',
            category: p.services?.length ? 'lab' : 'all',
            raw: p,
          }));

          setProviders(normalizedProviders);
          setTotalPages(pagination.totalPages);
          setTotalItems(pagination.total);

          setTotalProviders(counts.totalProviders);
          setActiveProviders(counts.activeProviders);

        }
      } catch (error) {
        console.error('Failed to fetch providers', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, [page]);


  const filteredProviders = providers.filter((provider) => {
    const matchesCategory =
      selectedCategory === 'all' || provider.category === selectedCategory;

    const matchesSearch =
      provider.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.email?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });



  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fertility-clinic': return 'bg-pink-100 text-pink-700';
      case 'lab': return 'bg-blue-100 text-blue-700';
      case 'pharmacy': return 'bg-green-100 text-green-700';
      case 'counseling': return 'bg-purple-100 text-purple-700';
      case 'transport': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryLabel = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.label : category;
  };

  const stats = {
    total: totalProviders,
    active: activeProviders,
  };


  const filteredList = providers.filter((provider) => {
    const matchesCategory =
      selectedCategory === 'all' || provider.category === selectedCategory;

    const matchesSearch =
      provider.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.email?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });


  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Provider Management</h2>
          <p className="text-gray-600 font-medium">Manage all service providers and their listings</p>
        </div>
        <button
          onClick={handleAddProvider}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg"
        >
          <Plus className="w-5 h-5" />
          <span>Add Provider</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stats.total}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Total Providers</p>
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
            <h3 className="text-2xl font-bold text-gray-900">{stats.active}</h3>
          </div>
          <p className="text-sm font-semibold text-gray-600">Active Providers</p>
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
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-sm font-medium text-gray-900 w-full placeholder:text-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <button
                onClick={() => setShowCategoryFilter(!showCategoryFilter)}
                className="w-full md:w-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors bg-white"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-600">
                    {getCategoryLabel(selectedCategory)}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {showCategoryFilter && (
                <div className="absolute top-full mt-2 right-0 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setShowCategoryFilter(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm font-semibold transition-colors ${selectedCategory === category.id
                        ? 'bg-pink-50 text-pink-600'
                        : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== 'all' || searchQuery) && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-gray-500">Active filters:</span>
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold flex items-center gap-2">
                  {getCategoryLabel(selectedCategory)}
                  <button
                    onClick={() => setSelectedCategory('all')}
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
                  setSelectedCategory('all');
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
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Provider</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {providers
                .filter((provider) => {
                  const matchesCategory =
                    selectedCategory === 'all' || provider.category === selectedCategory;

                  const matchesSearch =
                    provider.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    provider.email?.toLowerCase().includes(searchQuery.toLowerCase());

                  return matchesCategory && matchesSearch;
                })
                .map((provider) => (
                  <tr key={provider.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden ${!provider.logo || imageErrorIds[provider.id]
                            ? 'bg-gradient-to-br from-pink-500 to-pink-600'
                            : ''
                            }`}
                        >
                          {provider.logo && !imageErrorIds[provider.id] ? (
                            <img
                              src={
                                provider.logo.startsWith('http')
                                  ? provider.logo
                                  : `${IMAGE_BASE_URL}${provider.logo}`
                              }
                              alt={provider.name}
                              className="w-full h-full object-cover"
                              onError={() =>
                                setImageErrorIds((prev) => ({
                                  ...prev,
                                  [provider.id]: true,
                                }))
                              }
                            />
                          ) : (
                            <span className="text-sm font-bold text-white">
                              {provider.name?.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-gray-900">{provider.name}</p>
                            {provider.verified && (
                              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                          {/* <p className="text-xs font-semibold text-gray-500">{provider.id}</p> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(provider.category)}`}>
                        {getCategoryLabel(provider.category)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-sm font-semibold text-gray-600">{provider.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-sm font-semibold text-gray-600">{provider.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-gray-600">{provider.address}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          onClick={() => onEditProvider?.(provider)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <Edit className="w-4 h-4 text-blue-600" />
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
          {providers
            .filter((provider) => {
              const matchesCategory =
                selectedCategory === 'all' || provider.category === selectedCategory;

              const matchesSearch =
                provider.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                provider.email?.toLowerCase().includes(searchQuery.toLowerCase());

              return matchesCategory && matchesSearch;
            })
            .map((provider) => (

              <div key={provider.id} className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-base font-bold text-white">{provider.logo}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-bold text-gray-900 truncate">{provider.name}</h3>
                      {provider.verified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-gray-500 mb-2">{provider.id}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(provider.category)}`}>
                      {getCategoryLabel(provider.category)}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-xs font-semibold text-gray-600 truncate">{provider.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-xs font-semibold text-gray-600">{provider.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-gray-600">{provider.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <button className="flex-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button
                    onClick={() => onEditProvider?.(provider)}
                    className="flex-1 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-xs font-semibold text-blue-600 transition-colors flex items-center justify-center gap-2"
                  >
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

        {/* Empty State */}
        {!loading &&
          providers.filter((provider) => {
            const matchesCategory =
              selectedCategory === 'all' || provider.category === selectedCategory;

            const matchesSearch =
              provider.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
              provider.email?.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
          }).length === 0 && (

            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No providers found</h3>
              <p className="text-gray-600 font-medium mb-4">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}


        {totalPages > 1 && (
          <div className="p-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-600">
              Page {page} of {totalPages} • Total {totalItems} providers
            </p>

            <div className="flex items-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold
          disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const pageNumber = i + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold
              ${page === pageNumber
                        ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
                        : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold
          disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
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