import React, { useEffect, useState } from 'react';
import { Edit, Save,  LogOut } from 'lucide-react';
import { BACKEND_URI } from '../utils';

const PersonalDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState(null)
  const [formData, setFormData] = useState({
    fullName: 'Dhruv Verma',
    email: 'dhruv.verma@gmail.com',
    phone: '+919305535095',
    occupation: 'Student',
    city: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  const handleLogout = () => {
    // Logout logic here
    console.log('Logging out...');
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(`${BACKEND_URI}/user/profile` , {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json()
      setData(data)
    }

    fetchProfile()
  }, [])
  

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold text-white relative">
          {data?.name||null}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <Edit size={12} className="text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">{data?.name || null}</h2>
          <p className="text-gray-400">{formData.email}</p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Full Name</label>
          {isEditing ? (
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          ) : (
            <div className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
              {formData.fullName}
            </div>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Email</label>
          {isEditing ? (
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          ) : (
            <div className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
              {formData.email}
            </div>
          )}
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Contact Number</label>
          {isEditing ? (
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          ) : (
            <div className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
              {formData.phone}
            </div>
          )}
        </div>

        {/* Occupation */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Occupation</label>
          {isEditing ? (
            <select 
              value={formData.occupation}
              onChange={(e) => handleInputChange('occupation', e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="Student">Student</option>
              <option value="Professional">Professional</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <div className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
              {formData.occupation}
            </div>
          )}
        </div>

        {/* City */}
        <div className="col-span-2">
          <label className="block text-sm text-gray-400 mb-2">City</label>
          {isEditing ? (
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              placeholder="Enter city name"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          ) : (
            <div className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
              {formData.city || 'Enter city name'}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-8">
        {/* Edit/Save Button */}
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
        >
          {isEditing ? <Save size={18} /> : <Edit size={18} />}
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>

        {/* Logout Button */}
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;