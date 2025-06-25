import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Users, Award, Zap, BookOpen, Star, ArrowRight, Play, CheckCircle } from 'lucide-react';

const CodeForgePlacement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const courses = [
    {
      title: "Frontend Web Development",
      description: "Master modern frontend technologies",
      tech: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
      duration: "3-4 months",
      level: "Beginner to Advanced"
    },
    {
      title: "Backend Web Development",
      description: "Build robust server-side applications",
      tech: ["Node.js", "Express.js", "MongoDB"],
      duration: "2-3 months",
      level: "Intermediate",
      prerequisite: "JavaScript Knowledge Required"
    },
    {
      title: "Full Stack Web Development",
      description: "Complete web development mastery",
      tech: ["HTML", "CSS", "JS", "React", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Microservices", "Git", "Deployment"],
      duration: "6-8 months",
      level: "Beginner to Expert"
    },
    {
      title: "Creative Web Development",
      description: "Next-gen interactive web experiences",
      tech: ["HTML", "CSS", "JS", "React", "TailwindCSS", "GSAP", "Framer Motion", "Three.js", "Lenis"],
      duration: "4-5 months",
      level: "Intermediate to Advanced",
      highlight: true
    },
    {
      title: "App Development",
      description: "Cross-platform mobile applications",
      tech: ["React Native", "Node.js", "Express.js", "MongoDB"],
      duration: "4-5 months",
      level: "Intermediate",
      prerequisite: "HTML, CSS, JS Knowledge Required"
    }
  ];

  const upcomingCourses = [
    { name: "AI & ML", status: "Coming Soon", icon: "🤖" },
    { name: "Data Science", status: "Coming Soon", icon: "📊" }
  ];

  const instructors = [
    {
      name: "Dhruv Verma",
      role: "MERN Stack & Creative Web Developer",
      experience: "2+ years at CodeLevate",
      expertise: ["MERN Stack", "Creative Web Development", "Modern UI/UX"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Vishnu Mishra",
      role: "Java Developer & Backend Specialist",
      experience: "2+ years in Enterprise Development",
      expertise: ["Java", "Spring", "Spring Boot", "Backend Architecture"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className={`relative z-10 text-center px-6 max-w-6xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-pulse">
              CodeForge
            </h1>
            <div className="text-xl md:text-2xl text-gray-400 mb-8">
              Forging the Future of Technology
            </div>
          </div>
          
          <div className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            UP's <span className="text-purple-400 font-semibold">ONLY</span> institute focusing on 
            <span className="text-gradient bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-semibold"> Creative Web Development</span> with cutting-edge technologies
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl px-6 py-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-400" />
              <span>Next-Gen Technologies</span>
            </div>
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl px-6 py-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>Expert Instructors</span>
            </div>
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl px-6 py-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-green-400" />
              <span>Industry Recognition</span>
            </div>
          </div>

          <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            Start Your Journey
            <ArrowRight className="inline-block ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Certificate Program Highlight */}
      <section className="py-20 bg-gradient-to-r from-purple-900/10 to-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certificate in Software Engineering
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive program covering three major domains of modern software development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Full Stack Web Development", icon: "🌐", color: "from-blue-500 to-cyan-500" },
              { title: "App Development", icon: "📱", color: "from-green-500 to-emerald-500" },
              { title: "Creative Web Development", icon: "✨", color: "from-purple-500 to-pink-500" }
            ].map((domain, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
                <div className={`relative bg-gradient-to-br ${domain.color} p-[1px] rounded-2xl`}>
                  <div className="bg-black rounded-2xl p-8 h-full">
                    <div className="text-4xl mb-4">{domain.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{domain.title}</h3>
                    <div className="text-gray-400">
                      Master the skills needed for {domain.title.toLowerCase()} with hands-on projects and industry best practices.
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h2>
            <p className="text-xl text-gray-400">Choose from our comprehensive range of technology courses</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {courses.map((course, index) => (
              <div key={index} className={`group relative ${course.highlight ? 'lg:col-span-2' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${course.highlight ? 'from-purple-500/20 to-pink-500/20' : 'from-blue-500/10 to-purple-500/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl`}></div>
                <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 border ${course.highlight ? 'border-purple-500/50' : 'border-gray-700'} rounded-2xl p-8 transform transition-all duration-300 hover:scale-105`}>
                  {course.highlight && (
                    <div className="absolute -top-3 left-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      ⭐ Featured Course
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 rounded-full text-sm ${course.highlight ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Duration: {course.duration}</span>
                    <span className="text-gray-400">Level: {course.level}</span>
                  </div>
                  
                  {course.prerequisite && (
                    <div className="text-sm text-yellow-400 mb-4">
                      📋 {course.prerequisite}
                    </div>
                  )}
                  
                  <button className={`w-full bg-gradient-to-r ${course.highlight ? 'from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105`}>
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Courses */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-gray-300">Coming Soon</h3>
            <div className="flex justify-center gap-8">
              {upcomingCourses.map((course, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">{course.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{course.name}</h4>
                  <span className="text-yellow-400 text-sm">{course.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Instructors</h2>
            <p className="text-xl text-gray-400">Learn from industry professionals with real-world experience</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {instructors.map((instructor, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 transform transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-20 h-20 rounded-full border-4 border-purple-500/50 mr-6"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{instructor.name}</h3>
                      <p className="text-purple-400 font-semibold">{instructor.role}</p>
                      <p className="text-gray-400 text-sm">{instructor.experience}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join UP's most innovative coding institute and master the technologies that matter
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Enroll Now
            </button>
            <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            CodeForge
          </div>
          <p className="text-gray-400 mb-6">Forging the Future of Technology in Uttar Pradesh</p>
          <div className="text-gray-500 text-sm">
            © 2025 CodeForge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CodeForgePlacement;