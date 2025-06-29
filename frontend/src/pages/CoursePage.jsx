import React, { useState, useEffect } from 'react';
import { Award, Globe, Sparkles, Smartphone, Code, Star, Users, Clock, ChevronRight, Zap, BookOpen, Trophy, Target, Play, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [courses, setCourses] = useState([]);



  useEffect(() => {
    setIsVisible(true);
    
    // Fetch courses from JSON file
    const fetchCourses = async () => {
      try {
        const response = await fetch('/courses.json');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    
    fetchCourses();
  }, []);

  const getIconForCourse = (coursename) => {
    if (coursename.toLowerCase().includes('full stack') || coursename.toLowerCase().includes('mern')) {
      return Globe;
    } else if (coursename.toLowerCase().includes('frontend')) {
      return Code;
    } else if (coursename.toLowerCase().includes('backend')) {
      return Zap;
    } else if (coursename.toLowerCase().includes('app') || coursename.toLowerCase().includes('react native')) {
      return Smartphone;
    } else if (coursename.toLowerCase().includes('python')) {
      return BookOpen;
    }
    return Award;
  };

  const getGradientForCourse = (coursename) => {
    if (coursename.toLowerCase().includes('full stack') || coursename.toLowerCase().includes('mern')) {
      return 'from-blue-500 via-purple-500 to-pink-500';
    } else if (coursename.toLowerCase().includes('frontend')) {
      return 'from-emerald-500 via-teal-500 to-cyan-500';
    } else if (coursename.toLowerCase().includes('backend')) {
      return 'from-orange-500 via-red-500 to-pink-500';
    } else if (coursename.toLowerCase().includes('app') || coursename.toLowerCase().includes('react native')) {
      return 'from-violet-500 via-purple-500 to-blue-500';
    } else if (coursename.toLowerCase().includes('python')) {
      return 'from-yellow-500 via-orange-500 to-red-500';
    }
    return 'from-blue-500 to-purple-500';
  };

  const CourseCard = ({ course, index }) => {
    const IconComponent = getIconForCourse(course.coursename);
    const gradientClass = getGradientForCourse(course.coursename);
    const isHovered = hoveredCard === course.id;
    const isLive = course.status === 'live batch';

    return (
      <div 
        className={`group relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transition-all duration-700 ease-out hover:border-gray-600/70 hover:shadow-2xl hover:shadow-purple-500/10 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        } ${isHovered ? 'scale-[1.02] -translate-y-2' : ''}`}
        style={{ transitionDelay: `${index * 120}ms` }}
        onMouseEnter={() => setHoveredCard(course.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`} />
        
        {/* Live indicator */}
        {isLive && (
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            LIVE
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradientClass} shadow-lg group-hover:shadow-xl transition-all duration-500 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
            <IconComponent className="w-7 h-7 text-white" />
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-base font-semibold">4.9</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>2.1k+</span>
              </div>
              <div className="flex items-center gap-1">
                {isLive ? <Calendar className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span className="capitalize">{course.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-gray-100 transition-colors">
            {course.coursename}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {course.languages?.map((lang, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-800/60 text-gray-300 rounded-full text-xs font-medium border border-gray-700/50">
                {lang}
              </span>
            ))}
          </div>
          <div className="text-gray-300 text-sm leading-relaxed">
            <span className="font-medium text-gray-200">What you'll learn:</span>
            <div className="mt-2 flex flex-wrap gap-1">
              {course.completesyllabus?.slice(0, 4).map((topic, idx) => (
                <span key={idx} className="text-gray-400">
                  {topic}{idx < Math.min(course.completesyllabus.length - 1, 3) ? ', ' : ''}
                </span>
              ))}
              {course.completesyllabus?.length > 4 && (
                <span className="text-gray-500">+{course.completesyllabus.length - 4} more</span>
              )}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <div className="space-y-3">
            {course.faqs?.slice(0, 2).map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 text-gray-300">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Discount badge */}
        {course.discount && (
          <div className="absolute top-6 left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            {course.discount} OFF
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-white">₹{course.discounted_price.toLocaleString()}</span>
            <span className="text-gray-500 line-through text-lg">₹{course.real_price.toLocaleString()}</span>
          </div>
          <Link to={`/courses/${course.slug}`} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl group-hover:scale-105">
            View Details
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center py-24">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Premium Learning Experience</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-white leading-none">
              We Are Not a
              <br />
              <span className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent">
                Course Factory
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              We craft premium, industry-focused learning experiences. Each course is meticulously designed 
              to transform you into a skilled professional ready for today's tech challenges.
            </p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;