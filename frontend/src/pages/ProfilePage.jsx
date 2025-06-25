import React, { useState } from 'react';
import { User, BookOpen } from 'lucide-react';
import PersonalDetailsContent from './PersonalDetails';
import EnrolledCoursesContent from './EnrollmentCourses';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('personal-details');

  return (
    <div className='min-h-screen bg-gray-900 text-white p-20'>
      <div className='container mx-auto p-6'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-2xl font-semibold text-gray-200'>Account Center</h1>
        </div>

        <div className='flex gap-8'>
          {/* Sidebar */}
          <div className='w-64 flex-shrink-0'>
            <nav className='space-y-2'>
              <button
                onClick={() => setActiveTab('personal-details')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                  activeTab === 'personal-details'
                    ? 'text-blue-400 bg-gray-800/50'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <User size={20} />
                Personal Details
              </button>
              <button
                onClick={() => setActiveTab('enrolled-courses')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                  activeTab === 'enrolled-courses'
                    ? 'text-blue-400 bg-gray-800/50'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <BookOpen size={20} />
                Enrolled Courses
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <main className='flex-1'>
            {activeTab === 'personal-details' && <PersonalDetailsContent />}
            {activeTab === 'enrolled-courses' && <EnrolledCoursesContent />}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;