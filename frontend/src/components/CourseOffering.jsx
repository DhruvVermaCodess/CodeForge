import React, { useState, useEffect } from 'react';
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
  Sparkles,
  Play
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseOffering = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/courses.json')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getCourseIcon = (courseName) => {
    if (courseName.includes('Full Stack') || courseName.includes('MERN')) return Globe;
    if (courseName.includes('Frontend')) return Code;
    if (courseName.includes('Backend')) return Server;
    if (courseName.includes('App') || courseName.includes('React Native')) return Smartphone;
    if (courseName.includes('Python')) return Sparkles;
    return Code;
  };

  const getCourseGradient = (index) => {
    const gradients = [
      "from-purple-500 to-pink-500",
      "from-blue-500 to-cyan-500", 
      "from-green-500 to-emerald-500",
      "from-yellow-500 to-orange-500",
      "from-indigo-500 to-purple-500",
      "from-pink-500 to-violet-500"
    ];
    return gradients[index % gradients.length];
  };

  const getCourseBgGradient = (index) => {
    const bgGradients = [
      "from-purple-500/10 to-pink-500/10",
      "from-blue-500/10 to-cyan-500/10",
      "from-green-500/10 to-emerald-500/10", 
      "from-yellow-500/10 to-orange-500/10",
      "from-indigo-500/10 to-purple-500/10",
      "from-pink-500/10 to-violet-500/10"
    ];
    return bgGradients[index % bgGradients.length];
  };

  const CourseCard = ({ course, index }) => {
    const Icon = getCourseIcon(course.coursename);
    const gradient = getCourseGradient(index);
    const bgGradient = getCourseBgGradient(index);
    
    const handleCourseClick = () => {
      navigate(`/courses/${course.slug}`);
    };
    
    return (
      <div
        className={`group relative bg-gradient-to-br ${bgGradient} border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:border-white/20 cursor-pointer`}
        onMouseEnter={() => setHoveredCard(course.id)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={handleCourseClick}
      >
        {/* Course Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-yellow-400 mb-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">4.9</span>
            </div>
            <div className="text-xs text-gray-400">2.8k+ students</div>
          </div>
        </div>

        {/* Course Title */}
        <h3 className="text-xl font-bold text-white mb-2">{course.coursename}</h3>
        <p className="text-sm text-gray-400 mb-4 capitalize">{course.status}</p>

        {/* Course Description */}
        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          Master {course.coursename.toLowerCase()} with hands-on projects and industry-standard practices. Build real-world applications from scratch.
        </p>

        {/* Course Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>40 hours</span>
            <span className="mx-2">•</span>
            <Users className="w-4 h-4" />
            <span>Beginner to Advanced</span>
          </div>
          {course.prerequistes && course.prerequistes[0] !== "None" && (
            <div className="flex items-center gap-2 text-sm text-orange-400">
              <Zap className="w-4 h-4" />
              <span>Prerequisites: {course.prerequistes.join(', ')}</span>
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {course.completesyllabus?.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
            {course.completesyllabus?.length > 4 && (
              <span className="px-2 py-1 bg-white/10 text-xs text-gray-400 rounded-full">
                +{course.completesyllabus.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span>Hands-on Projects</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span>Live Sessions</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span>Certification</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span>Lifetime Access</span>
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">₹{course.discounted_price}</span>
                <span className="text-sm text-gray-500 line-through">₹{course.real_price}</span>
              </div>
              <div className="text-xs text-green-400">{course.discount} OFF</div>
            </div>
          </div>
          
          <button className={`w-full group bg-gradient-to-r ${gradient} hover:shadow-lg hover:shadow-blue-500/25 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2`}>
            Enroll Now
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
              hoveredCard === course.id ? 'translate-x-1' : ''
            }`} />
          </button>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
      </div>
    );
  };

  if (loading) {
    return (
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
            <div className="text-2xl font-semibold text-white">Loading courses...</div>
          </div>
        </div>
      </section>
    );
  }

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

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {courses.slice(0, 4).map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
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