import React, { useState, useEffect } from 'react';
import { Award, Globe, Sparkles, Smartphone, Code, Star, Users, Clock, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      bgGradient: "from-yellow-500/5 to-orange-500/5",
      badge: "Most Popular",
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
      bgGradient: "from-purple-500/5 to-pink-500/5",
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
      bgGradient: "from-pink-500/5 to-violet-500/5",
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
      bgGradient: "from-indigo-500/5 to-purple-500/5",
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
      bgGradient: "from-blue-500/5 to-cyan-500/5",
      prerequisites: "None"
    }
  ];

  const CourseCard = ({ course, index }) => {
    const IconComponent = course.icon;
    const isHovered = hoveredCard === course.id;
    
    return (
      <div 
        className={`group relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-500 ease-out hover:border-gray-700 hover:bg-gray-900/50 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        } ${course.isMain ? 'md:col-span-2' : ''}`}
        style={{ transitionDelay: `${index * 150}ms` }}
        onMouseEnter={() => setHoveredCard(course.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Badge */}
        {course.badge && (
          <div className="absolute -top-3 left-6 bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
            {course.badge}
          </div>
        )}
        
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${course.gradient} shadow-sm`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-yellow-400 mb-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{course.students}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
            {course.title}
          </h3>
          <p className="text-gray-400 text-sm font-medium mb-3">{course.subtitle}</p>
          <p className="text-gray-300 text-sm leading-relaxed">{course.description}</p>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {course.technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded-md text-xs border border-gray-700/50">
                {tech}
              </span>
            ))}
            {course.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-800/30 text-gray-500 rounded-md text-xs">
                +{course.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <div className="space-y-2">
            {course.highlights.slice(0, 3).map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-400">
                <div className="w-1 h-1 bg-gray-600 rounded-full" />
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">{course.price}</span>
            <span className="text-gray-600 line-through text-sm">{course.originalPrice}</span>
          </div>
          <Link to={`/courses/${course.id}`} className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
            View Details
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center py-20">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              We Are Not a
              <br />
              <span className="text-gray-500">Course Factory</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              We craft premium, industry-focused learning experiences. Each course is meticulously designed 
              to transform you into a skilled professional.
            </p>
            <div className="flex items-center justify-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>1300+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-current text-yellow-500" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;