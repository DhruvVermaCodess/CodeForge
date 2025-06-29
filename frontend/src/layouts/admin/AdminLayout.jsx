import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Plus, 
  BookOpen, 
  Users, 
  FileText, 
  Settings, 
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
      description: 'Overview & Analytics'
    },
    {
      name: 'Add Courses',
      href: '/admin/add-courses',
      icon: Plus,
      description: 'Create New Courses'
    },
    {
      name: 'Manage Courses',
      href: '/admin/manage-courses',
      icon: BookOpen,
      description: 'Edit & Update Courses'
    },
    {
      name: 'Manage Batches',
      href: '/admin/manage-batches',
      icon: Users,
      description: 'Student Groups'
    },
    {
      name: 'Manage Notes',
      href: '/admin/manage-notes',
      icon: FileText,
      description: 'Study Materials'
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: Settings,
      description: 'System Configuration'
    }
  ];

  const isActiveRoute = (href) => {
    return location.pathname === href;
  };

  return (
    <div className="w-full flex h-screen overflow-hidden bg-gray-950">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`w-80 flex flex-col bg-gray-900 border-r border-gray-800 text-white transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50`}>
        {/* Logo/Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Admin Panel
            </h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveRoute(item.href);
            
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-gray-800 ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Icon className={`mr-3 h-5 w-5 transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {isActive && <ChevronRight className="w-4 h-4" />}
                  </div>
                  <div className={`text-xs mt-1 ${isActive ? 'text-blue-100' : 'text-gray-500 group-hover:text-gray-400'}`}>
                    {item.description}
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin User</p>
              <p className="text-xs text-gray-400 truncate">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center justify-between h-16 px-4 bg-gray-900 border-b border-gray-800">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold text-white">
            {navigationItems.find(item => isActiveRoute(item.href))?.name || 'Admin Dashboard'}
          </h2>
          <div className="w-9 h-9" /> {/* Spacer for centering */}
        </div>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-950">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;