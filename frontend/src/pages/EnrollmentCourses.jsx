import React from 'react';
import { BookOpen, CreditCard, X, Calendar, ExternalLink } from 'lucide-react';

const EnrollmentCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Job Ready AI Powered Cohort:',
      subtitle: 'Web + DSA + Aptitude',
      enrolledDate: '2025-01-22',
      icon: '🚀',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 2,
      title: 'DSA Domination Cohort',
      subtitle: '',
      enrolledDate: '2025-01-22',
      icon: '👥',
      gradient: 'from-blue-400 to-purple-500'
    }
  ];

  const handlePayFees = (courseId) => {
    console.log(`Pay fees for course ${courseId}`);
    // Payment logic here
  };

  const handleCancelEnrollment = (courseId) => {
    console.log(`Cancel enrollment for course ${courseId}`);
    // Cancel enrollment logic here
  };

  return (
    <div className="space-y-6">
      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300"
          >
            {/* Course Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${course.gradient} rounded-lg flex items-center justify-center flex-shrink-0 text-2xl`}>
                {course.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white mb-1 leading-tight">
                  {course.title}
                </h3>
                {course.subtitle && (
                  <p className="text-gray-400 text-sm mb-2">{course.subtitle}</p>
                )}
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <Calendar size={12} />
                  Enrolled on {new Date(course.enrolledDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric'
                  })}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => handlePayFees(course.id)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors font-medium flex-1 justify-center"
              >
                <CreditCard size={14} />
                Pay fees ✓
              </button>
              <button
                onClick={() => handleCancelEnrollment(course.id)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors font-medium flex-1 justify-center"
              >
                Cancel Enrollment
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="mt-8">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">
              {courses.length}
            </div>
            <div className="text-gray-300 font-medium">Total Enrolled Courses</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentCourses;