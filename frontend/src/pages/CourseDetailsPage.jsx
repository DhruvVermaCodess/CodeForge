import React, { useState, useEffect } from 'react';
import { 
  Star, Users, Clock, Award, ChevronDown, ChevronRight, Play, 
  Download, BookOpen, Code, Globe, CheckCircle, User, 
  ArrowLeft, Share2, Bookmark, Calendar, Target, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseDetailPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModule, setExpandedModule] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courseData = {
    title: "Full Stack Web Development",
    subtitle: "Complete Web Development Mastery",
    description: "Master modern web development with React, Node.js, and MongoDB. Build real-world applications and deploy them to production. This comprehensive course covers everything from frontend fundamentals to backend architecture.",
    instructor: {
      name: "Alex Kumar",
      title: "Senior Full Stack Developer",
      experience: "8+ years",
      students: "15,000+",
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    stats: {
      rating: 4.9,
      students: "300+",
      duration: "6 months",
      lessons: 48,
      projects: 8,
      level: "Beginner to Advanced"
    },
    price: {
      current: "₹15,000",
      original: "₹40,000",
      discount: 62
    },
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express.js", "Git"],
    outcomes: [
      "Build responsive web applications from scratch",
      "Master React hooks and state management",
      "Create RESTful APIs with Node.js and Express",
      "Work with MongoDB and database design",
      "Deploy applications to production",
      "Implement authentication and security",
      "Use Git for version control",
      "Follow industry best practices"
    ],
    modules: [
      {
        id: 1,
        title: "Frontend Fundamentals",
        duration: "3 weeks",
        lessons: [
          { title: "HTML5 & Semantic Markup", duration: "45 min", type: "video" },
          { title: "CSS3 & Flexbox/Grid", duration: "60 min", type: "video" },
          { title: "JavaScript ES6+", duration: "90 min", type: "video" },
          { title: "Responsive Design Project", duration: "2 hours", type: "project" }
        ]
      },
      {
        id: 2,
        title: "React Development",
        duration: "4 weeks",
        lessons: [
          { title: "React Components & JSX", duration: "50 min", type: "video" },
          { title: "State Management & Hooks", duration: "70 min", type: "video" },
          { title: "React Router & Navigation", duration: "40 min", type: "video" },
          { title: "Building a React App", duration: "3 hours", type: "project" }
        ]
      },
      {
        id: 3,
        title: "Backend Development",
        duration: "6 weeks",
        lessons: [
          { title: "Node.js & Express Setup", duration: "45 min", type: "video" },
          { title: "RESTful API Design", duration: "80 min", type: "video" },
          { title: "MongoDB & Mongoose", duration: "75 min", type: "video" },
          { title: "Authentication & Security", duration: "90 min", type: "video" },
          { title: "Full Stack Project", duration: "5 hours", type: "project" }
        ]
      },
      {
        id: 4,
        title: "Deployment & Production",
        duration: "2 weeks",
        lessons: [
          { title: "Git & Version Control", duration: "35 min", type: "video" },
          { title: "Cloud Deployment", duration: "60 min", type: "video" },
          { title: "Performance Optimization", duration: "45 min", type: "video" },
          { title: "Final Portfolio Project", duration: "8 hours", type: "project" }
        ]
      }
    ],
    reviews: [
      {
        name: "Priya Sharma",
        rating: 5,
        comment: "Excellent course! The projects were challenging and really helped me understand the concepts.",
        date: "2 weeks ago"
      },
      {
        name: "Rahul Gupta",
        rating: 5,
        comment: "Best investment I made for my career. Got a job as a full stack developer after completing this.",
        date: "1 month ago"
      },
      {
        name: "Sneha Patel",
        rating: 4,
        comment: "Great content and instructor. The pace was perfect for beginners.",
        date: "3 weeks ago"
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const ModuleCard = ({ module, isExpanded, onToggle }) => (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-900/50 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
            {module.id}
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-white">{module.title}</h4>
            <p className="text-sm text-gray-400">{module.duration} • {module.lessons.length} lessons</p>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-4 space-y-2">
          {module.lessons.map((lesson, idx) => (
            <div key={idx} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-900/30 transition-colors duration-150">
              <div className="flex items-center gap-3">
                {lesson.type === 'video' ? (
                  <Play className="w-4 h-4 text-blue-400" />
                ) : (
                  <Code className="w-4 h-4 text-green-400" />
                )}
                <span className="text-gray-300">{lesson.title}</span>
              </div>
              <span className="text-sm text-gray-500">{lesson.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 transition-all duration-300 ${isSticky ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 ">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="font-semibold">{courseData.title}</h2>
              <p className="text-sm text-gray-400">{courseData.instructor.name}</p>
            </div>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
            Enroll Now
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className={`py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-6 mt-10">
            <Link to={'/courses'} className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Courses</span>
              <ChevronRight className="w-4 h-4" />
              <span>Web Development</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {courseData.title}
                </h1>
                <p className="text-xl text-gray-400 mb-6">{courseData.subtitle}</p>
                <p className="text-gray-300 leading-relaxed mb-6">{courseData.description}</p>
                
                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{courseData.stats.rating}</span>
                    <span className="text-gray-400">({courseData.stats.students} students)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span>{courseData.stats.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    <span>{courseData.stats.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-gray-400" />
                    <span>{courseData.stats.projects} projects</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {courseData.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-800 mb-8">
                <div className="flex gap-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-4 font-medium transition-colors duration-200 border-b-2 ${
                        activeTab === tab.id 
                          ? 'text-white border-white' 
                          : 'text-gray-400 border-transparent hover:text-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="min-h-96">
                {activeTab === 'overview' && (
                  <div className="space-y-8 animate-fade-in">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {courseData.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-xl font-semibold mb-6">Course Curriculum</h3>
                    {courseData.modules.map((module) => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        isExpanded={expandedModule === module.id}
                        onToggle={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                      />
                    ))}
                  </div>
                )}

                {activeTab === 'instructor' && (
                  <div className="animate-fade-in">
                    <div className="flex items-start gap-6 mb-6">
                      <img 
                        src={courseData.instructor.avatar} 
                        alt={courseData.instructor.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{courseData.instructor.name}</h3>
                        <p className="text-gray-400 mb-2">{courseData.instructor.title}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{courseData.instructor.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{courseData.instructor.students}</span>
                          </div>
                          <span>{courseData.instructor.experience}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Experienced full stack developer with over 8 years in the industry. 
                      Specialized in modern web technologies and passionate about teaching. 
                      Has worked with startups and enterprise companies, building scalable applications.
                    </p>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-xl font-semibold">Student Reviews</h3>
                    {courseData.reviews.map((review, idx) => (
                      <div key={idx} className="border border-gray-800 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-medium">{review.name}</h4>
                              <div className="flex items-center gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-400">{review.date}</span>
                        </div>
                        <p className="text-gray-300">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-3xl font-bold">{courseData.price.current}</span>
                      <span className="text-gray-500 line-through">{courseData.price.original}</span>
                    </div>
                    <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm font-medium inline-block">
                      {courseData.price.discount}% OFF
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 mb-6">
                    <button className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                      Enroll Now
                    </button>
                    <button className="w-full border border-gray-600 text-gray-300 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                      Try Free Preview
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between py-4 border-t border-gray-800">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200">
                      <Bookmark className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                  </div>

                  {/* Course Includes */}
                  <div className="space-y-3 pt-4 border-t border-gray-800">
                    <h4 className="font-semibold mb-3">This course includes:</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Play className="w-4 h-4 text-gray-400" />
                        <span>20+ hours of video content</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-gray-400" />
                        <span>Downloadable resources</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-gray-400" />
                        <span>Certificate of completion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-gray-400" />
                        <span>Lifetime access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CourseDetailPage;