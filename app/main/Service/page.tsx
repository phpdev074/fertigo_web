'use client';

import { useState, ChangeEvent, useEffect } from 'react';
import { Search, Plus, Edit2, Eye, Activity, Image as ImageIcon, X } from 'lucide-react';
import { Service, imageUpload, createService, updateService } from '@/app/api/api_client';
import { IMAGE_BASE_URL } from '@/app/api/api';


type ServiceItem = {
    _id: string;
    name: string;
    icon: string;
    createdAt: string;
    updatedAt: string;
};

export default function ServiceManagement() {
    const [services, setServices] = useState<ServiceItem[]>([]);
    const [search, setSearch] = useState('');
    const [editingService, setEditingService] = useState<ServiceItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0,
    });


    const [form, setForm] = useState<{ name: string; icon: string }>({
        name: '',
        icon: '',
    });


    const getServices = async () => {
        try {
            const res = await Service({ page });
            setServices(res.data.data);
            if (res.data.pagination) {
                setPagination(res.data.pagination);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getServices();
    }, [page]);



    /* ================= FILTER ================= */
    const filteredServices = services.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
    );

    /* ================= IMAGE UPLOAD (PREVIEW ONLY) ================= */
    const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const previewUrl = URL.createObjectURL(file);
        setForm((prev) => ({ ...prev, icon: previewUrl }));

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await imageUpload(formData);
            setForm((prev) => ({
                ...prev,
                icon: res.data.data.url,
            }));
        } catch (error) {
            console.error('Image upload failed', error);
        }
    };


    /* ================= SUBMIT ================= */
    const handleSubmit = async () => {
        if (!form.name || !form.icon) return;

        try {
            if (editingService) {
                await updateService({
                    id: editingService._id,
                    name: form.name,
                    icon: form.icon,
                });
            } else {
                await createService({
                    name: form.name,
                    icon: form.icon,
                });
            }

            await getServices();

            setIsModalOpen(false);
            setForm({ name: '', icon: '' });
            setEditingService(null);

        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Services</h2>
                    <p className="text-gray-600 font-medium">Manage all service and their listings</p>
                </div>

                {/* Manage Services  */}
                <div className="flex items-center gap-3">

                    <button
                        onClick={() => {
                            setEditingService(null);
                            setForm({ name: '', icon: '' });
                            setIsModalOpen(true);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white text-sm font-semibold rounded-xl hover:bg-pink-700"
                    >
                        <Plus className="w-4 h-4" />
                        Add Service
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white border rounded-xl overflow-hidden">

                {/* Tabs Header */}
                <div className="border-b border-gray-200">
                    <div className="flex items-center gap-2 p-2">
                        <button className="flex-1 md:flex-none md:px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg text-sm">
                            <span className="flex items-center justify-center gap-2">
                                <span>Total Services: {pagination.total} </span>
                            </span>
                        </button>
                    </div>
                </div>

                {/* Filters Bar */}
                <div className="p-4 border-b border-gray-200 space-y-3">
                    <div className="flex flex-col md:flex-row gap-3">
                        {/* Search UI */}
                        <div className="flex-1 flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-2.5">
                            <span className="text-gray-400">🔍</span>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by name"
                                className="bg-transparent border-none outline-none text-sm font-medium text-gray-900 w-full placeholder:text-gray-400"
                            />
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Icon
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Service Name
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Created At
                                </th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {filteredServices.map((service) => (
                                <tr
                                    key={service._id}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    {/* Service Info */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-10 h-10 rounded-lg overflow-hidden border bg-white">
                                                <img
                                                    src={`${IMAGE_BASE_URL}${service.icon}`}
                                                    alt={service.name}
                                                    className="w-full h-full object-cover"
                                                />

                                                {/* <img
                                                    src={
                                                        form.icon.startsWith('blob:')
                                                            ? form.icon
                                                            : `${IMAGE_BASE_URL}${form.icon}`
                                                    }
                                                    alt="Preview"
                                                    className="w-full h-full object-cover"
                                                /> */}


                                            </div>

                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-bold text-gray-900">
                                                {service.name}
                                            </span>
                                        </div>
                                    </td>


                                    {/* Created Date */}
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-semibold text-gray-600">
                                            {new Date(service.createdAt).toISOString().split('T')[0]}

                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => alert(JSON.stringify(service, null, 2))}
                                                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                                            >
                                                <Eye className="w-4 h-4 text-gray-600" />
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setEditingService(service);
                                                    setForm({
                                                        name: service.name,
                                                        icon: service.icon,
                                                    });
                                                    setIsModalOpen(true);
                                                }}
                                                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-50 transition-colors"
                                            >
                                                <Edit2 className="w-4 h-4 text-blue-600" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {filteredServices.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={3}
                                        className="px-6 py-6 text-center text-sm font-semibold text-gray-500"
                                    >
                                        No services found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>




            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4">
                {filteredServices.map((service) => (
                    <div
                        key={service._id}
                        className="bg-white border rounded-xl p-4 flex gap-4 items-center"
                    >
                        <div className="w-14 h-14 rounded-lg overflow-hidden border shrink-0">
                            <img
                                src={`${IMAGE_BASE_URL}${service.icon}`}
                                alt={service.name}
                                className="w-full h-full object-cover"
                            />


                        </div>

                        <div className="flex-1">
                            <h3 className="text-sm font-bold text-gray-900">
                                {service.name}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">
                                {new Date(service.createdAt).toISOString().split('T')[0]}
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => alert(JSON.stringify(service, null, 2))}
                                className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100"
                            >
                                <Eye className="w-4 h-4 text-gray-600" />
                            </button>

                            <button
                                onClick={() => {
                                    setEditingService(service);
                                    setForm({ name: service.name, icon: service.icon });
                                    setIsModalOpen(true);
                                }}
                                className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50"
                            >
                                <Edit2 className="w-4 h-4 text-blue-600" />
                            </button>
                        </div>
                    </div>
                ))}

                {filteredServices.length === 0 && (
                    <p className="text-center text-sm font-semibold text-gray-500">
                        No services found
                    </p>
                )}
            </div>





            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white w-full max-w-md rounded-2xl p-5 space-y-4 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-lg font-semibold text-black">
                            {editingService ? 'Edit Service' : 'Add Service'}
                        </h2>

                        <input
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Service name"
                            className="w-full px-3 py-2 border rounded-lg text-sm text-black"
                        />

                        <label className="flex items-center gap-3 px-3 py-2 border rounded-lg cursor-pointer text-sm text-gray-600">
                            <ImageIcon className="w-4 h-4" />
                            Upload icon
                            <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
                        </label>

                        {form.icon && (
                            <div className="relative w-full h-40 rounded-lg overflow-hidden border">
                                <img src={`${IMAGE_BASE_URL}${form.icon}`} alt="Preview" className="object-cover" />
                            </div>
                        )}

                        <div className="flex gap-2 pt-2">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-full border py-2 rounded-lg text-sm text-black"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-semibold"
                            >
                                {editingService ? 'Update Service' : 'Create Service'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
