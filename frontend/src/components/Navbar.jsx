import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, ChevronDown, Code, Phone, Mail, BookOpen, Smartphone, Brain, Database, Globe, Sparkles, Zap, Layers, Palette, User, Home, GraduationCap, Users, Award } from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';


// Custom scrollbar styles
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const {isAuth, name} = useContext(AuthContext)

  useEffect(() => {
    // Add custom scrollbar styles
    const styleElement = document.createElement('style');
    styleElement.textContent = scrollbarStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Courses', href: '/courses', icon: GraduationCap },
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'SE01', href: '/se01-bootcamp', icon: Award }
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    // Handle navigation here
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-20 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-purple-500/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-64 left-1/4 w-1.5 h-1.5 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-blue-500/10' 
          : 'bg-transparent'
      }`}>
        {/* Animated Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 transition-all duration-700 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-md group-hover:blur-lg transition-all duration-300 opacity-60"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Code className="h-7 w-7 text-white" />
                  <div className="absolute top-1 right-1 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
                </div>
              </div>
              <div className="relative">
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  CodeForge
                </span>
                <div className="text-xs text-gray-400 font-medium tracking-wide">
                  INSTITUTE
                  <span className="ml-2 text-green-400">• LIVE</span>
                </div>
                <div className="absolute -top-2 -right-2 text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-0.5 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                  NEW
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <Link to={item.href} key={item.name} className="relative group">
                    <div
                      className="relative text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer group-hover:bg-white/5 rounded-lg"
                      onClick={() => handleNavClick(item.href)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      {/* Active indicator */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Enhanced Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 group">
                  <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="hidden 2xl:block">+91 98765 43210</span>
                </a>
                <a href="mailto:info@codeforge.edu" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 group">
                  <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="hidden 2xl:block">info@codeforge.edu</span>
                </a>
              </div>
              
              {
                isAuth ? (
                  <Link to='/profile' className='bg-purple-600 h-10 w-10 cursor-pointer flex justify-center items-center rounded-full text-white'>
                    {name?.[0]?.toUpperCase()}
                  </Link>
                ) : (
                  <Link to='/login' className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-60"></div>
                    <button 
                      className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg group-hover:shadow-xl"
                      
                    >
                      <span className="flex items-center gap-2">
                        <span>Login</span>
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                      </span>
                    </button>
                  </Link>
                )
              }

            </div>

            {/* Enhanced Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative text-gray-300 hover:text-white p-3 transition-all duration-300 hover:bg-white/10 rounded-xl group z-50"
              >
                <div className="relative">
                  <div className={`transition-all duration-300 ${isOpen ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}>
                    <Menu className="h-6 w-6" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`}>
                    <X className="h-6 w-6" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeSidebar}
      />

      {/* Animated Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/20 shadow-2xl z-50 lg:hidden transform transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        </div>

        {/* Sidebar Content */}
        <div className="relative h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-sm opacity-60"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">CodeForge</h2>
                  <p className="text-xs text-gray-400">INSTITUTE</p>
                </div>
              </div>
              <button
                onClick={closeSidebar}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 p-6 space-y-2 custom-scrollbar overflow-y-auto">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`group flex items-center space-x-4 p-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                    index === 0 ? 'animate-fade-in-right' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    <div className="relative p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-lg font-medium">{item.name}</span>
                    <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
                  </div>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              );
            })}
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-white/20 space-y-4">
            {/* Contact Links */}
            <div className="space-y-3">
              <a 
                href="tel:+919305335095" 
                className="flex items-center space-x-3 p-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+91 98765 43210</span>
              </a>
              <a 
                href="mailto:info@codeforge.edu" 
                className="flex items-center space-x-3 p-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <span>info@codeforge.edu</span>
              </a>
            </div>

            {/* CTA Button */}
            {isAuth ? (
              <Link 
                to="/profile" 
                className="relative group block"
                onClick={closeSidebar}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl blur-md opacity-60"></div>
                <div className="relative w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 px-6 rounded-2xl font-bold text-center hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">{name?.[0]?.toUpperCase()}</span>
                  </div>
                  <span>Profile</span>
                </div>
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="relative group block"
                onClick={closeSidebar}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-md opacity-60"></div>
                <div className="relative w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-2xl font-bold text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group-hover:scale-105">
                  <Sparkles className="h-5 w-5" />
                  <span>Start Your Journey</span>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Sidebar Decorative Elements */}
        <div className="absolute top-20 right-4 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-8 w-1 h-1 bg-purple-500/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 right-6 w-1.5 h-1.5 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;