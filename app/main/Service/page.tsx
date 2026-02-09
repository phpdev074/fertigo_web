'use client';

import { useState, ChangeEvent, useEffect } from 'react';
import { Search, Plus, Edit2, Eye, Activity, Image as ImageIcon, X } from 'lucide-react';
// import Image from 'next/image';
import { Service } from '@/app/api/api_client';
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

    const [form, setForm] = useState<{ name: string; icon: string }>({
        name: '',
        icon: '',
    });

    /* ================= FETCH SERVICES ================= */
    useEffect(() => {
        const getServices = async () => {
            try {
                const res = await Service({ page });
                setServices(res.data.data); // ✅ API aligned
            } catch (error) {
                console.error(error);
            }
        };

        getServices();
    }, [page]);

    /* ================= FILTER ================= */
    const filteredServices = services.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
    );

    /* ================= IMAGE UPLOAD (PREVIEW ONLY) ================= */
    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const previewUrl = URL.createObjectURL(file);
        setForm((prev) => ({ ...prev, icon: previewUrl }));
    };

    /* ================= SUBMIT ================= */
    const handleSubmit = () => {
        if (!form.name || !form.icon) return;

        if (editingService) {
            setServices((prev) =>
                prev.map((s) =>
                    s._id === editingService._id
                        ? { ...s, name: form.name, icon: form.icon }
                        : s
                )
            );
        } else {

            setServices((prev) => [
                ...prev,
                {
                    _id: Date.now().toString(),
                    name: form.name,
                    icon: form.icon,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                },
            ]);
        }

        setForm({ name: '', icon: '' });
        setEditingService(null);
        setIsModalOpen(false);
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-pink-600" />
                    Services
                </h1>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search service..."
                            className="pl-9 pr-4 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-200"
                        />
                    </div>

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
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th className="text-left px-4 py-3">Service</th>
                            <th className="text-right px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredServices.map((service) => (
                            <tr key={service._id} className="border-t">
                                <td className="px-4 py-3 flex items-center gap-3">
                                    <div className="relative w-10 h-10 rounded-lg overflow-hidden border">

                                        {/* <img
                                            src={`${IMAGE_BASE_URL}${service.icon}`}
                                            alt={service.name}
                                            className="w-full h-full object-cover"
                                        /> */}



                                    </div>
                                    <span className="font-medium text-gray-800">
                                        {service.name}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <div className="inline-flex gap-2">
                                        <button
                                            onClick={() => alert(JSON.stringify(service, null, 2))}
                                            className="p-2 rounded-lg hover:bg-gray-100"
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
                                            className="p-2 rounded-lg hover:bg-gray-100"
                                        >
                                            <Edit2 className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {filteredServices.length === 0 && (
                            <tr>
                                <td colSpan={2} className="px-4 py-6 text-center text-gray-500">
                                    No services found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
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
