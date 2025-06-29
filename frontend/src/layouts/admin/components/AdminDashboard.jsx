import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  DollarSign,
  Eye,
  Clock,
  Star,
  ArrowUp,
  ArrowDown,
  MoreVertical,
  Calendar,
  Activity,
  UserCheck,
  FileText,
  Award,
  Target
} from 'lucide-react';

const AdminDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  // Mock data - replace with real data from your API
  const stats = [
    {
      title: 'Total Students',
      value: '2,847',
      change: '+12.5%',
      isPositive: true,
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Active Courses',
      value: '34',
      change: '+3',
      isPositive: true,
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Revenue',
      value: '₹1,24,580',
      change: '+8.2%',
      isPositive: true,
      icon: DollarSign,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Course Views',
      value: '45,672',
      change: '-2.1%',
      isPositive: false,
      icon: Eye,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const recentCourses = [
    {
      id: 1,
      name: 'Complete React Development',
      students: 234,
      rating: 4.8,
      status: 'Live',
      revenue: '₹45,600',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Advanced JavaScript Concepts',
      students: 189,
      rating: 4.6,
      status: 'Live',
      revenue: '₹32,400',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Node.js Backend Development',
      students: 156,
      rating: 4.7,
      status: 'Recorded',
      revenue: '₹28,800',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'Python for Beginners',
      students: 298,
      rating: 4.9,
      status: 'Live',
      revenue: '₹52,200',
      image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=100&h=100&fit=crop&crop=center'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'enrollment',
      user: 'Rahul Sharma',
      course: 'Complete React Development',
      time: '2 minutes ago',
      icon: UserCheck
    },
    {
      id: 2,
      type: 'course_update',
      user: 'Admin',
      course: 'Advanced JavaScript Concepts',
      time: '15 minutes ago',
      icon: BookOpen
    },
    {
      id: 3,
      type: 'review',
      user: 'Priya Patel',
      course: 'Python for Beginners',
      time: '1 hour ago',
      icon: Star
    },
    {
      id: 4,
      type: 'completion',
      user: 'Amit Kumar',
      course: 'Node.js Backend Development',
      time: '2 hours ago',
      icon: Award
    },
    {
      id: 5,
      type: 'enrollment',
      user: 'Sneha Gupta',
      course: 'Complete React Development',
      time: '3 hours ago',
      icon: UserCheck
    }
  ];

  const quickActions = [
    {
      title: 'Add New Course',
      description: 'Create a new course',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      href: '/admin/add-courses'
    },
    {
      title: 'Manage Students',
      description: 'View student progress',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      href: '/admin/manage-batches'
    },
    {
      title: 'Upload Notes',
      description: 'Add study materials',
      icon: FileText,
      color: 'from-green-500 to-green-600',
      href: '/admin/manage-notes'
    },
    {
      title: 'View Analytics',
      description: 'Check performance',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
      href: '/admin/analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400 mt-1">Welcome back! Here's what's happening with your courses.</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2">
              <Calendar size={16} />
              Export Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:bg-gray-800/70 transition-colors">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                    {stat.change}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Courses */}
          <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Top Performing Courses</h2>
              <button className="text-gray-400 hover:text-white">
                <MoreVertical size={20} />
              </button>
            </div>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium truncate">{course.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {course.students} students
                      </span>
                      <span className="flex items-center gap-1">
                        <Star size={14} />
                        {course.rating}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        course.status === 'Live' 
                          ? 'bg-green-600/20 text-green-400' 
                          : 'bg-orange-600/20 text-orange-400'
                      }`}>
                        {course.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">{course.revenue}</p>
                    <p className="text-gray-400 text-sm">Revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="p-2 bg-gray-700 rounded-lg flex-shrink-0">
                      <Icon className="w-4 h-4 text-gray-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm">
                        <span className="font-medium">{activity.user}</span>
                        {activity.type === 'enrollment' && ' enrolled in '}
                        {activity.type === 'course_update' && ' updated '}
                        {activity.type === 'review' && ' reviewed '}
                        {activity.type === 'completion' && ' completed '}
                        <span className="text-blue-400">{activity.course}</span>
                      </p>
                      <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:bg-gray-900/70 transition-colors text-left group"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${action.color} inline-flex mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{action.title}</h3>
                  <p className="text-gray-400 text-sm">{action.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Course Performance</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Completion Rate</span>
                <span className="text-white font-semibold">78%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Student Satisfaction</span>
                <span className="text-white font-semibold">4.7/5</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Monthly Goals</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">New Enrollments</p>
                  <p className="text-gray-400 text-sm">847 / 1000</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '84.7%' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-600 rounded-xl">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Revenue Target</p>
                  <p className="text-gray-400 text-sm">₹1,24,580 / ₹2,00,000</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '62.3%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;