"use client";
import { motion } from 'motion/react';
import { 
  FileText, Search, Plus, Edit, Eye, Trash2, Save, X,
  ArrowLeft, Calendar, User, Clock, CheckCircle, AlertCircle
} from 'lucide-react';
import { useState } from 'react';

type ContentType = 'terms' | 'about' | 'privacy' | null;

interface ContentPage {
  id: string;
  type: ContentType;
  title: string;
  slug: string;
  content: string;
  lastUpdated: string;
  updatedBy: string;
  status: 'published' | 'draft';
}

export default function ContentManagementScreen() {
  const [view, setView] = useState<'list' | 'edit'>('list');
  const [editingContent, setEditingContent] = useState<ContentPage | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock content data
  const [contentPages, setContentPages] = useState<ContentPage[]>([
    {
      id: 'CNT-001',
      type: 'terms',
      title: 'Terms & Conditions',
      slug: 'terms-and-conditions',
      content: `Welcome to FertiGo. These terms and conditions outline the rules and regulations for the use of FertiGo's mobile application and services.

By accessing this app, we assume you accept these terms and conditions. Do not continue to use FertiGo if you do not agree to all of the terms and conditions stated on this page.

1. LICENSE TO USE
FertiGo grants you a limited, non-exclusive, non-transferable license to access and use the app for your personal, non-commercial use.

2. USER ACCOUNTS
When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms.

3. SERVICES
FertiGo is a platform that helps IVF/IUI patients find nearby fertility-friendly logistics services and read real community experiences. We do not provide medical advice or clinical decision support.

4. PROHIBITED USES
You may not use our app:
- For any unlawful purpose
- To solicit others to perform unlawful acts
- To violate any international, federal, provincial or state regulations
- To infringe upon or violate our intellectual property rights

5. LIMITATION OF LIABILITY
FertiGo shall not be held liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of the app.

6. CHANGES TO TERMS
We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "last updated" date.

Last Updated: January 15, 2026`,
      lastUpdated: 'Jan 15, 2026',
      updatedBy: 'Admin User',
      status: 'published',
    },
    {
      id: 'CNT-002',
      type: 'about',
      title: 'About Us',
      slug: 'about-us',
      content: `Welcome to FertiGo - Your Trusted Fertility Journey Companion

WHO WE ARE
FertiGo is a mobile-first platform designed specifically for IVF/IUI patients. We understand that your fertility journey is deeply personal and can be challenging. That's why we've created a comprehensive platform to help you find nearby fertility-friendly logistics services and connect with a supportive community.

OUR MISSION
Our mission is to simplify and support your fertility journey by providing easy access to reliable services and real community experiences. We believe that no one should navigate this path alone.

WHAT WE DO
- Connect patients with fertility-friendly service providers
- Provide a platform for sharing and reading authentic community experiences
- Offer location-based service finder for convenience
- Create a supportive community environment

WHAT WE DON'T DO
We want to be clear about our boundaries. FertiGo does not provide:
- Medical advice or consultations
- Clinical decision support
- Diagnosis or treatment recommendations
- Replacement for professional medical care

COMMUNITY-DRIVEN
Our platform thrives on real experiences shared by real people. Every review, tip, and recommendation comes from patients who have walked this journey. We're committed to maintaining authenticity and trust within our community.

OUR VALUES
- Empathy: We understand the emotional and physical challenges of fertility treatments
- Trust: We prioritize authentic experiences and verified service providers
- Privacy: Your journey is personal, and we respect that
- Support: We're here to make your journey easier, not add complications

CONTACT US
Have questions or feedback? We'd love to hear from you. Reach out to our support team anytime.

Last Updated: January 10, 2026`,
      lastUpdated: 'Jan 10, 2026',
      updatedBy: 'Content Team',
      status: 'published',
    },
    {
      id: 'CNT-003',
      type: 'privacy',
      title: 'Privacy Policy',
      slug: 'privacy-policy',
      content: `FertiGo Privacy Policy

INTRODUCTION
At FertiGo, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.

INFORMATION WE COLLECT
We collect information that you provide directly to us, including:
- Personal identification information (name, email address, phone number)
- Location data (to help you find nearby services)
- User-generated content (reviews, ratings, comments)
- Usage data (how you interact with our app)

HOW WE USE YOUR INFORMATION
We use the information we collect to:
- Provide, maintain, and improve our services
- Send you technical notices and support messages
- Respond to your comments and questions
- Connect you with nearby service providers
- Analyze usage patterns and trends
- Detect and prevent fraudulent activity

INFORMATION SHARING
We do not sell your personal information. We may share your information:
- With service providers who help us operate the app
- When required by law or to protect rights and safety
- With your consent or at your direction
- In aggregated, anonymized form for analytics

DATA SECURITY
We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.

YOUR PRIVACY RIGHTS
You have the right to:
- Access your personal information
- Correct inaccurate information
- Request deletion of your information
- Opt-out of marketing communications
- Withdraw consent at any time

CHILDREN'S PRIVACY
Our services are not directed to children under 13. We do not knowingly collect information from children under 13.

CHANGES TO PRIVACY POLICY
We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.

CONTACT US
If you have questions about this Privacy Policy, please contact us at privacy@fertigo.com

Last Updated: January 12, 2026`,
      lastUpdated: 'Jan 12, 2026',
      updatedBy: 'Legal Team',
      status: 'published',
    },
  ]);

  // Filter content
  const filteredContent = contentPages.filter((page) => {
    const matchesSearch = 
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  const handleEdit = (content: ContentPage) => {
    setEditingContent({ ...content });
    setView('edit');
  };

  const handleSave = () => {
    if (editingContent) {
      setContentPages(contentPages.map(page => 
        page.id === editingContent.id ? editingContent : page
      ));
      setView('list');
      setEditingContent(null);
    }
  };

  const handleCancel = () => {
    setView('list');
    setEditingContent(null);
  };

  const getStatusColor = (status: string) => {
    return status === 'published' 
      ? 'bg-green-100 text-green-700' 
      : 'bg-yellow-100 text-yellow-700';
  };

  const getStatusIcon = (status: string) => {
    return status === 'published' 
      ? <CheckCircle className="w-4 h-4" /> 
      : <AlertCircle className="w-4 h-4" />;
  };

  // List View
  if (view === 'list') {
    return (
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Content Management</h2>
          <p className="text-gray-600 font-medium">Manage app content pages and policies</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{contentPages.length}</h3>
            </div>
            <p className="text-sm font-semibold text-gray-600">Total Pages</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {contentPages.filter(p => p.status === 'published').length}
              </h3>
            </div>
            <p className="text-sm font-semibold text-gray-600">Published</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {contentPages.filter(p => p.status === 'draft').length}
              </h3>
            </div>
            <p className="text-sm font-semibold text-gray-600">Drafts</p>
          </motion.div>
        </div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-2.5">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search content pages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-sm font-medium text-gray-900 w-full placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Last Updated</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredContent.map((page) => (
                  <tr key={page.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-gray-900">{page.title}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-600">{page.lastUpdated}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(page)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-pink-100 transition-colors"
                        >
                          <Edit className="w-4 h-4 text-pink-600" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                          <Eye className="w-4 h-4 text-gray-600" />
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
            {filteredContent.map((page) => (
              <div key={page.id} className="p-4">
                <div className="mb-3">
                  <p className="text-sm font-bold text-gray-900 mb-2">{page.title}</p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                    <Calendar className="w-4 h-4" />
                    Updated: {page.lastUpdated}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => handleEdit(page)}
                    className="flex-1 px-3 py-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-xs font-semibold text-pink-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="flex-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  // Edit View
  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleCancel}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Edit Content</h2>
          <p className="text-gray-600 font-medium">Update page content and settings</p>
        </div>
      </div>

      {/* Edit Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <FileText className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{editingContent?.title}</h3>
              <p className="text-sm font-semibold text-gray-600">ID: {editingContent?.id}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Page Title <span className="text-pink-600">*</span>
            </label>
            <input
              type="text"
              value={editingContent?.title || ''}
              onChange={(e) => setEditingContent(editingContent ? { ...editingContent, title: e.target.value } : null)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium"
              placeholder="Enter page title"
            />
          </div>

          {/* Slug Field */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              URL Slug
            </label>
            <input
              type="text"
              value={editingContent?.slug || ''}
              onChange={(e) => setEditingContent(editingContent ? { ...editingContent, slug: e.target.value } : null)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium"
              placeholder="page-url-slug"
            />
            <p className="text-xs font-semibold text-gray-500 mt-1">
              URL: fertigo.com/{editingContent?.slug}
            </p>
          </div>

          {/* Content Field */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Page Content <span className="text-pink-600">*</span>
            </label>
            <textarea
              value={editingContent?.content || ''}
              onChange={(e) => setEditingContent(editingContent ? { ...editingContent, content: e.target.value } : null)}
              rows={20}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm font-medium resize-none"
              placeholder="Enter page content..."
            />
            <p className="text-xs font-semibold text-gray-500 mt-1">
              {editingContent?.content.length || 0} characters
            </p>
          </div>

          {/* Status Field */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Publication Status
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setEditingContent(editingContent ? { ...editingContent, status: 'published' } : null)}
                className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all font-semibold text-sm flex items-center justify-center gap-2 ${
                  editingContent?.status === 'published'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <CheckCircle className="w-5 h-5" />
                Published
              </button>
              <button
                onClick={() => setEditingContent(editingContent ? { ...editingContent, status: 'draft' } : null)}
                className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all font-semibold text-sm flex items-center justify-center gap-2 ${
                  editingContent?.status === 'draft'
                    ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <AlertCircle className="w-5 h-5" />
                Draft
              </button>
            </div>
          </div>

          {/* Last Updated Info */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs font-semibold text-gray-500">Last Updated</p>
                  <p className="text-sm font-bold text-gray-900">{editingContent?.lastUpdated}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs font-semibold text-gray-500">Updated By</p>
                  <p className="text-sm font-bold text-gray-900">{editingContent?.updatedBy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 flex flex-col-reverse md:flex-row gap-3">
          <button
            onClick={handleCancel}
            className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <X className="w-5 h-5" />
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>
      </motion.div>
    </div>
  );
}