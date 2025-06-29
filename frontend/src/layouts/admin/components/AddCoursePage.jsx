import React, { useState } from 'react';
import { Plus, X, Upload, Save, Eye } from 'lucide-react';

const AddCoursePage = () => {
  const [formData, setFormData] = useState({
    image: '',
    coursename: '',
    slug: '',
    status: 'live batch',
    languages: [],
    real_price: '',
    discounted_price: '',
    discount: '',
    completesyllabus: [],
    faqs: [],
    prerequistes: []
  });

  const [newLanguage, setNewLanguage] = useState('');
  const [newSyllabusItem, setNewSyllabusItem] = useState('');
  const [newFaq, setNewFaq] = useState('');
  const [newPrerequisite, setNewPrerequisite] = useState('');

  // Generate slug from course name
  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'coursename' && { slug: generateSlug(value) })
    }));
  };

  const addToArray = (arrayName, value, setValue) => {
    if (value.trim()) {
      setFormData(prev => ({
        ...prev,
        [arrayName]: [...prev[arrayName], value.trim()]
      }));
      setValue('');
    }
  };

  const removeFromArray = (arrayName, index) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((_, i) => i !== index)
    }));
  };

  const calculateDiscount = () => {
    if (formData.real_price && formData.discounted_price) {
      const discount = ((formData.real_price - formData.discounted_price) / formData.real_price * 100).toFixed(0);
      setFormData(prev => ({ ...prev, discount: `${discount}%` }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Course Data:', formData);
    // Here you would typically send the data to your API
    alert('Course added successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Add New Course</h1>
              <p className="text-gray-400 mt-1">Create and configure a new course for your platform</p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <Eye size={18} />
                Preview
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 font-medium"
              >
                <Save size={18} />
                Save Course
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Basic Information */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Basic Information
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Course Image */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Course Image URL</label>
                <div className="relative">
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                  <Upload className="absolute right-3 top-3 text-gray-400" size={20} />
                </div>
              </div>

              {/* Course Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Course Name</label>
                <input
                  type="text"
                  name="coursename"
                  value={formData.coursename}
                  onChange={handleInputChange}
                  placeholder="Complete React Development Course"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Slug</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  placeholder="complete-react-development-course"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Course Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                >
                  <option value="live batch">Live Batch</option>
                  <option value="recorded video">Recorded Video</option>
                </select>
              </div>

              {/* Languages */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Languages</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newLanguage}
                    onChange={(e) => setNewLanguage(e.target.value)}
                    placeholder="Add language (e.g., English)"
                    className="flex-1 px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToArray('languages', newLanguage, setNewLanguage))}
                  />
                  <button
                    type="button"
                    onClick={() => addToArray('languages', newLanguage, setNewLanguage)}
                    className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.languages.map((lang, index) => (
                    <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                      {lang}
                      <button
                        type="button"
                        onClick={() => removeFromArray('languages', index)}
                        className="text-blue-300 hover:text-red-300"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Pricing Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Real Price</label>
                <input
                  type="number"
                  name="real_price"
                  value={formData.real_price}
                  onChange={handleInputChange}
                  onBlur={calculateDiscount}
                  placeholder="2999"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Discounted Price</label>
                <input
                  type="number"
                  name="discounted_price"
                  value={formData.discounted_price}
                  onChange={handleInputChange}
                  onBlur={calculateDiscount}
                  placeholder="1999"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Discount</label>
                <input
                  type="text"
                  name="discount"
                  value={formData.discount}
                  onChange={handleInputChange}
                  placeholder="33%"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Complete Syllabus */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Complete Syllabus
              </h2>
              
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={newSyllabusItem}
                  onChange={(e) => setNewSyllabusItem(e.target.value)}
                  placeholder="Add syllabus topic"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToArray('completesyllabus', newSyllabusItem, setNewSyllabusItem))}
                />
                <button
                  type="button"
                  onClick={() => addToArray('completesyllabus', newSyllabusItem, setNewSyllabusItem)}
                  className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
              
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {formData.completesyllabus.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <span className="text-gray-200">{item}</span>
                    <button
                      type="button"
                      onClick={() => removeFromArray('completesyllabus', index)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                Prerequisites
              </h2>
              
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={newPrerequisite}
                  onChange={(e) => setNewPrerequisite(e.target.value)}
                  placeholder="Add prerequisite"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToArray('prerequistes', newPrerequisite, setNewPrerequisite))}
                />
                <button
                  type="button"
                  onClick={() => addToArray('prerequistes', newPrerequisite, setNewPrerequisite)}
                  className="px-4 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
              
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {formData.prerequistes.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <span className="text-gray-200">{item}</span>
                    <button
                      type="button"
                      onClick={() => removeFromArray('prerequistes', index)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Frequently Asked Questions
            </h2>
            
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newFaq}
                onChange={(e) => setNewFaq(e.target.value)}
                placeholder="Add FAQ"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToArray('faqs', newFaq, setNewFaq))}
              />
              <button
                type="button"
                onClick={() => addToArray('faqs', newFaq, setNewFaq)}
                className="px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
            
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {formData.faqs.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                  <span className="text-gray-200">{item}</span>
                  <button
                    type="button"
                    onClick={() => removeFromArray('faqs', index)}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoursePage;