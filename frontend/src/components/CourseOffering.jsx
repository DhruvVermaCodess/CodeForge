import React, { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Clock,
  Users,
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle,
  Award,
  Zap,
  Layers,
  Server,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseOffering = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const allCourses = [
    {
      id: 'main',
      title: "Certificate in Software Engineering",
      subtitle: "Complete Industry-Ready Program",
      icon: Award,
      duration: "12 months",
      students: "500+",
      rating: 4.9,
      price: "₹30,000",
      originalPrice: "₹70,000",
      level: "Beginner to Advanced",
      description: "Master all aspects of software development with our comprehensive certificate program covering full-stack web development, mobile apps, and creative web technologies.",
      technologies: ["React", "Node.js", "MongoDB", "React Native", "GSAP", "Three.js", "Microservices", "Git"],
      highlights: [
        "Industry Certification",
        "3 Complete Specializations",
        "Job Placement Assistance",
        "Live Project Experience"
      ],
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
      badge: "🏆 Most Popular",
      specializations: ["Full Stack Web Development", "App Development", "Creative Web Development"],
      isMain: true
    },
    {
      id: 1,
      title: "Full Stack Web Development",
      subtitle: "Complete Web Development",
      icon: Globe,
      duration: "6 months",
      students: "300+",
      rating: 4.9,
      price: "₹15,000",
      originalPrice: "₹40,000",
      level: "Beginner to Advanced",
      description: "Complete web development program covering frontend, backend, deployment, and microservices architecture.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Microservices", "Git"],
      highlights: [
        "End-to-End Development",
        "Microservices Architecture",
        "Git & GitHub",
        "Production Deployment"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      prerequisites: "None"
    },
    {
      id: 2,
      title: "Creative Web Development",
      subtitle: "Interactive & Animated Web",
      icon: Sparkles,
      duration: "5 months",
      students: "120+",
      rating: 4.8,
      price: "₹10,000",
      originalPrice: "₹20,000",
      level: "Intermediate",
      description: "Create stunning, interactive websites with advanced animations and 3D effects using cutting-edge technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "GSAP", "Framer Motion", "Three.js", "Lenis"],
      highlights: [
        "Advanced Animations",
        "3D Web Experiences",
        "Interactive Design",
        "Creative Portfolio"
      ],
      gradient: "from-pink-500 to-violet-500",
      bgGradient: "from-pink-500/10 to-violet-500/10",
      prerequisites: "HTML, CSS, JS Knowledge"
    },
    {
      id: 3,
      title: "App Development",
      subtitle: "React Native Mobile Apps",
      icon: Smartphone,
      duration: "5 months",
      students: "180+",
      rating: 4.7,
      price: "₹15,000",
      originalPrice: "₹30,000",
      level: "Intermediate",
      description: "Build cross-platform mobile applications with React Native. Create apps for both iOS and Android platforms.",
      technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "Mobile UI/UX"],
      highlights: [
        "Cross-Platform Apps",
        "Native Performance",
        "App Store Deployment",
        "Real Device Testing"
      ],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      prerequisites: "HTML, CSS, JS Required"
    },
    {
      id: 4,
      title: "Frontend Web Development",
      subtitle: "Modern Frontend Stack",
      icon: Code,
      duration: "4 months",
      students: "200+",
      rating: 4.8,
      price: "₹8,000",
      originalPrice: "₹15,000",
      level: "Beginner",
      description: "Build stunning, responsive websites with modern frontend technologies. Perfect starting point for web development.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
      highlights: [
        "Responsive Design",
        "React Fundamentals",
        "Modern CSS Techniques",
        "Portfolio Projects"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      prerequisites: "None"
    }
  ];

  const CourseCard = ({ course }) => {
    const Icon = course.icon;
    const isMain = course.isMain;
    const isComingSoon = course.isComingSoon;
    const isViewAll = course.isViewAll;
    const navigate = useNavigate();
    
    const handleCourseClick = () => {
      if (isViewAll) {
        course.onClick();
      } else {
        navigate(`/course/${course.id}`);
      }
    };
    
    return (
      <div
        className={`group relative ${isMain ? 'md:col-span-2 lg:col-span-2' : ''} bg-gradient-to-br ${course.bgGradient} border ${isMain ? 'border-yellow-500/30' : 'border-white/10'} rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:border-white/20 cursor-pointer ${isMain ? 'ring-2 ring-yellow-500/20' : ''}`}
        onMouseEnter={() => setHoveredCard(course.id)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={handleCourseClick}
      >
        {/* Badge for main course */}
        {isMain && (
          <div className="absolute -top-3 left-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            {course.badge}
          </div>
        )}

        {/* Course Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${course.gradient} ${isMain ? 'scale-110' : ''}`}>
            <Icon className={`${isMain ? 'w-8 h-8' : 'w-6 h-6'} text-white`} />
          </div>
          {!isComingSoon && !isViewAll && (
            <div className="text-right">
              <div className="flex items-center gap-1 text-yellow-400 mb-1">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{course.rating}</span>
              </div>
              <div className="text-xs text-gray-400">{course.students} students</div>
            </div>
          )}
        </div>

        {/* Course Title */}
        <h3 className={`${isMain ? 'text-2xl' : 'text-xl'} font-bold text-white mb-2`}>{course.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{course.subtitle}</p>

        {/* Main course specializations */}
        {isMain && course.specializations && (
          <div className="mb-4">
            <p className="text-sm text-gray-300 mb-2">Includes:</p>
            <div className="grid grid-cols-1 gap-2">
              {course.specializations.map((spec, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
                  <span className="text-sm text-gray-300">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Course Description */}
        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          {course.description}
        </p>

        {/* Course Details */}
        {!isComingSoon && !isViewAll && (
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
              <span className="mx-2">•</span>
              <Users className="w-4 h-4" />
              <span>{course.level}</span>
            </div>
            {course.prerequisites && ( 
              <div className="flex items-center gap-2 text-sm text-orange-400">
                <Zap className="w-4 h-4" />
                <span>Prerequisites: {course.prerequisites}</span>
              </div>
            )}
          </div>
        )}

        {/* Technologies */}
        {course.technologies && !isViewAll && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {course.technologies.slice(0, isMain ? 8 : 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
              {course.technologies.length > (isMain ? 8 : 4) && (
                <span className="px-2 py-1 bg-white/10 text-xs text-gray-400 rounded-full">
                  +{course.technologies.length - (isMain ? 8 : 4)} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Highlights */}
        {course.highlights && !isViewAll && (
          <div className="mb-6">
            <div className={`grid ${isMain ? 'grid-cols-2' : 'grid-cols-2'} gap-2`}>
              {course.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing & CTA */}
        {!isComingSoon && !isViewAll && (
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`${isMain ? 'text-2xl' : 'text-xl'} font-bold text-white`}>{course.price}</span>
                  <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                </div>
                <div className="text-xs text-green-400">Limited time offer</div>
              </div>
            </div>
            
            <button className={`w-full group bg-gradient-to-r ${course.gradient} hover:shadow-lg hover:shadow-blue-500/25 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${isMain ? 'py-4 text-lg' : ''}`}>
              {isMain ? '🚀 Enroll in Complete Program' : 'Enroll Now'}
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                hoveredCard === course.id ? 'translate-x-1' : ''
              }`} />
            </button>
          </div>
        )}

        {/* View All CTA */}
        {isViewAll && (
          <div className="pt-4 border-t border-white/10">
            <button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              View All Courses
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Our Courses</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Learning Path
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From individual courses to comprehensive programs, we offer flexible learning paths 
            designed to meet your career goals and skill level.
          </p>
        </div>

        {/* All Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mb-16">
          <button 
            onClick={() => navigate('/courses')}
            className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Need help choosing the right course for your career goals?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Get Free Career Counseling
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
              Compare All Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOffering;