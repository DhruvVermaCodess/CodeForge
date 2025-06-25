import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Code, Phone, Mail, BookOpen, Smartphone, Brain, Database, Globe, Sparkles, Zap, Clock, MapPin, Users, Layers, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

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
  const [mobileDropdowns, setMobileDropdowns] = useState({});
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

  const batches = [
    {
      id: 1,
      name: "VSICS Batch",
      timing: "2:00 PM - 4:00 PM",
      location: "VSICS Campus",
      students: "25",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "DAMS College Morning Batch",
      timing: "9:30 AM - 11:30 AM",
      location: "DAMS College",
      students: "30",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "DAMS College Afternoon Batch",
      timing: "11:30 AM - 1:30 PM",
      location: "DAMS College",
      students: "28",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const courses = [
    { 
      name: 'Full Stack Web Development', 
      duration: '6-7 months',
      icon: Layers,
      color: 'from-orange-500 to-red-500',
      students: '3.1K+',
      highlight: 'Complete Web Development',
      tech: 'Frontend + Backend + Microservices + Git + Deployment'
    },
    { 
      name: 'Creative Web Development', 
      duration: '4-5 months',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      students: '1.2K+',
      highlight: 'Animations & 3D Web',
      tech: 'GSAP • Framer Motion • Three.js • Lenis'
    },
    { 
      name: 'App Development', 
      duration: '4-5 months',
      icon: Smartphone,
      color: 'from-violet-500 to-purple-500',
      students: '1.5K+',
      highlight: 'React Native Apps',
      tech: 'React Native • Node.js • Express.js • MongoDB',
      prerequisite: 'HTML, CSS, JS Required'
    },
    { 
      name: 'Frontend Web Development', 
      duration: '3-4 months',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      students: '2.5K+',
      highlight: 'HTML, CSS, JS, React, Tailwind',
      tech: 'HTML • CSS • JavaScript • React • Tailwind CSS'
    },
    { 
      name: 'Backend Web Development', 
      duration: '3-4 months',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      students: '1.8K+',
      highlight: 'Node.js, Express, MongoDB',
      tech: 'Node.js • Express.js • MongoDB',
      prerequisite: 'JavaScript Required'
    },
    { 
      name: 'AI & Machine Learning', 
      duration: 'Coming Soon',
      icon: Brain,
      color: 'from-cyan-500 to-blue-500',
      students: 'New',
      highlight: 'Future Technology',
      tech: 'Machine Learning • AI Development',
      comingSoon: true
    },
    { 
      name: 'Data Science', 
      duration: 'Coming Soon',
      icon: Database,
      color: 'from-pink-500 to-rose-500',
      students: 'New',
      highlight: 'Data Analytics',
      tech: 'Data Analysis • Statistics • Visualization',
      comingSoon: true
    }
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses', hasDropdown: true, type: 'courses' },
    { name: 'Batches', hasDropdown: true, type: 'batches' },
    { name: 'About Us', href: '/about' },
    { name: 'Placements', href: '/placements' }
  ];

  const toggleMobileDropdown = (itemName) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  const handleNavClick = (href) => {
    setIsOpen(false);
    setMobileDropdowns({});
    // Handle navigation here
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
            <div className="flex items-center space-x-4 group cursor-pointer">
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
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <Link to={item.href} key={item.name} className="relative group">
                    <div
                      className="relative text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer group-hover:bg-white/5 rounded-lg"
                      onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                      onMouseLeave={() => !item.hasDropdown && setActiveDropdown(null)}
                      onClick={() => !item.hasDropdown && handleNavClick(item.href)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className={`h-4 w-4 transition-all duration-300 ${
                          activeDropdown === item.name ? 'rotate-180 text-blue-400' : ''
                        }`} />
                      )}
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      
                      {/* Active indicator */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                    </div>
                    
                    {/* Enhanced Courses/Batches Dropdown */}
                    {item.hasDropdown && activeDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 mt-3 w-96 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl transform transition-all duration-300 origin-top scale-100 opacity-100"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {/* Dropdown glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
                        
                        <div className="relative p-3">
                          <div className="text-xs font-bold text-gray-400 mb-3 flex items-center gap-2">
                            <Sparkles className="h-4 w-4" />
                            {item.type === 'courses' ? 'AVAILABLE COURSES' : 'LIVE BATCHES'}
                          </div>
                          
                          {item.type === 'courses' ? (
                            // Courses Dropdown Content
                            <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                              {courses.map((course, idx) => {
                                const Icon = course.icon;
                                return (
                                  <div
                                    key={course.name}
                                    className="group/item flex items-start gap-4 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                                  >
                                    {/* Course icon with glow */}
                                    <div className="relative mt-1">
                                      <div className={`absolute inset-0 bg-gradient-to-r ${course.color} rounded-xl blur-sm opacity-0 group-hover/item:opacity-60 transition-all duration-300`}></div>
                                      <div className={`relative p-2.5 rounded-xl bg-gradient-to-r ${course.color} group-hover/item:scale-110 transition-all duration-300 shadow-lg`}>
                                        <Icon className="h-5 w-5 text-white" />
                                      </div>
                                    </div>
                                    
                                    {/* Course details */}
                                    <div className="flex-1 min-w-0">
                                      <div className="font-semibold flex items-center gap-2 mb-1">
                                        <span className="truncate">{course.name}</span>
                                        {course.comingSoon && <div className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full font-bold whitespace-nowrap">SOON</div>}
                                        {idx === 0 && !course.comingSoon && <div className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-bold whitespace-nowrap">HOT</div>}
                                      </div>
                                      <div className="text-xs text-gray-500 mb-2 flex items-center gap-3">
                                        <span>{course.duration}</span>
                                        <span>•</span>
                                        <span className="text-green-400">{course.students} students</span>
                                      </div>
                                      <div className="text-xs text-blue-400 mb-1">{course.highlight}</div>
                                      <div className="text-xs text-gray-500 leading-relaxed">{course.tech}</div>
                                      {course.prerequisite && (
                                        <div className="text-xs text-orange-400 mt-1">Prerequisite: {course.prerequisite}</div>
                                      )}
                                    </div>
                                    
                                    {/* Hover arrow */}
                                    <div className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/item:translate-x-0 mt-4">
                                      <ChevronDown className="h-4 w-4 transform rotate-90 text-blue-400" />
                                    </div>
                                    
                                    {/* Hover background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover/item:opacity-5 transition-all duration-300`}></div>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            // Batches Dropdown Content
                            <>
                              {batches.map((batch) => (
                                <div
                                  key={batch.id}
                                  className="group/item flex items-center gap-4 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                                >
                                  {/* Batch icon with glow */}
                                  <div className="relative">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${batch.color} rounded-xl blur-sm opacity-0 group-hover/item:opacity-60 transition-all duration-300`}></div>
                                    <div className={`relative p-2.5 rounded-xl bg-gradient-to-r ${batch.color} group-hover/item:scale-110 transition-all duration-300 shadow-lg`}>
                                      <Clock className="h-5 w-5 text-white" />
                                    </div>
                                  </div>
                                  
                                  {/* Batch details */}
                                  <div className="flex-1">
                                    <div className="font-semibold">{batch.name}</div>
                                    <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-2">
                                      <MapPin className="h-3 w-3" />
                                      <span>{batch.location}</span>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                                      <Users className="h-3 w-3" />
                                      <span>{batch.students} Students</span>
                                    </div>
                                    <div className="text-xs text-blue-400 mt-1">{batch.timing}</div>
                                  </div>
                                  
                                  {/* Hover arrow */}
                                  <div className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/item:translate-x-0">
                                    <ChevronDown className="h-4 w-4 transform rotate-90 text-blue-400" />
                                  </div>
                                  
                                  {/* Hover background gradient */}
                                  <div className={`absolute inset-0 bg-gradient-to-r ${batch.color} opacity-0 group-hover/item:opacity-5 transition-all duration-300`}></div>
                                </div>
                              ))}
                            </>
                          )}
                          
                          {/* View all link */}
                          <div className="border-t border-white/10 mt-3 pt-3">
                            <div
                              className="flex items-center justify-between px-4 py-2 text-sm text-blue-400 hover:text-blue-300 font-medium cursor-pointer group/all hover:bg-blue-500/10 rounded-lg transition-all duration-300"
                              onClick={() => handleNavClick(item.type === 'courses' ? '#all-courses' : '/batches')}
                            >
                              <div className="flex items-center gap-2">
                                <Zap className="h-4 w-4" />
                                <span>{item.type === 'courses' ? 'Explore All Programs' : 'View All Batches'}</span>
                              </div>
                              <ChevronDown className="h-4 w-4 transform rotate-90 group-hover/all:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
                        <span>Enroll Now</span>
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
                className="relative text-gray-300 hover:text-white p-3 transition-all duration-300 hover:bg-white/10 rounded-xl group"
              >
                <div className="relative">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  {!isOpen && <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ${
          isOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-black/98 backdrop-blur-xl border-t border-white/20 shadow-2xl">
            <div className="px-6 pt-6 pb-8 space-y-4 max-h-[80vh] overflow-y-auto">
              {/* Mobile nav items */}
              {navItems.map((item, index) => (
                <div key={item.name} className="space-y-3">
                  <div 
                    className="flex items-center justify-between text-white py-3 text-lg font-medium cursor-pointer hover:text-blue-400 transition-colors duration-300"
                    onClick={() => {
                      if (item.hasDropdown) {
                        toggleMobileDropdown(item.name);
                      } else {
                        handleNavClick(item.href);
                      }
                    }}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${
                        mobileDropdowns[item.name] ? 'rotate-180 text-blue-400' : ''
                      }`} />
                    )}
                  </div>
                  
                  {/* Mobile Dropdown Content */}
                  {item.hasDropdown && (
                    <div className={`ml-4 space-y-2 transition-all duration-300 overflow-hidden ${
                      mobileDropdowns[item.name] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {item.type === 'courses' ? (
                        courses.map((course) => {
                          const Icon = course.icon;
                          return (
                            <div
                              key={course.name}
                              className="flex items-start gap-4 text-sm text-gray-400 hover:text-gray-200 py-3 cursor-pointer transition-all duration-300 hover:bg-white/5 rounded-lg px-3"
                              onClick={() => handleNavClick(`/courses/${course.name.toLowerCase().replace(/\s+/g, '-')}`)}
                            >
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${course.color} shadow-lg mt-1 flex-shrink-0`}>
                                <Icon className="h-4 w-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium flex items-center gap-2 mb-1">
                                  <span>{course.name}</span>
                                  {course.comingSoon && <div className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full font-bold">SOON</div>}
                                </div>
                                <div className="text-xs text-gray-500 flex items-center gap-2 mb-1">
                                  <span>{course.duration}</span>
                                  <span>•</span>
                                  <span className="text-green-400">{course.students}</span>
                                </div>
                                <div className="text-xs text-blue-400 mb-1">{course.highlight}</div>
                                <div className="text-xs text-gray-500 leading-relaxed">{course.tech}</div>
                                {course.prerequisite && (
                                  <div className="text-xs text-orange-400 mt-1">Prerequisite: {course.prerequisite}</div>
                                )}
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        batches.map((batch) => (
                          <div
                            key={batch.id}
                            className="flex items-center gap-4 text-sm text-gray-400 hover:text-gray-200 py-3 cursor-pointer transition-all duration-300 hover:bg-white/5 rounded-lg px-3"
                            onClick={() => handleNavClick(`/batches/${batch.name.toLowerCase().replace(/\s+/g, '-')}`)}
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${batch.color} shadow-lg flex-shrink-0`}>
                              <Clock className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{batch.name}</div>
                              <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                                <MapPin className="h-3 w-3" />
                                <span>{batch.location}</span>
                              </div>
                              <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                                <Users className="h-3 w-3" />
                                <span>{batch.students} Students</span>
                              </div>
                              <div className="text-xs text-blue-400 mt-1">{batch.timing}</div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact & CTA */}
              <div className="pt-6 border-t border-white/20 space-y-6">
                <div className="space-y-4">
                  <a href="tel:+919876543210" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300">
                    <div className="p-3 rounded-xl bg-white/10">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span className="text-lg">+91 98765 43210</span>
                  </a>
                  <a href="mailto:info@codeforge.edu" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300">
                    <div className="p-3 rounded-xl bg-white/10">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="text-lg">info@codeforge.edu</span>
                  </a>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-md opacity-60"></div>
                  <button 
                    className="relative w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                    onClick={() => {
                      setIsOpen(false);
                      handleNavClick('/login');
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span>Start Your Journey</span>
                      <Sparkles className="h-5 w-5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;