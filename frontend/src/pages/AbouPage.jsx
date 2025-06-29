import React, { useState } from 'react';
import {
  Code2,
  Rocket,
  Star,
  Users,
  Award,
  Target,
  Zap,
  Globe,
  Smartphone,
  Server,
  Brain,
  Database,
  Sparkles,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  TrendingUp,
  Heart,
  Coffee
} from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const instructors = [
    {
      id: 1,
      name: "Dhruv Verma",
      role: "MERN Stack & Creative Web Developer",
      image: "/api/placeholder/300/300",
      experience: "2+ Years",
      company: "CodeLevate",
      specialties: ["MERN Stack", "Creative Web Development", "React", "Node.js", "GSAP", "Three.js"],
      description: "Expert in both traditional and creative web development, bringing innovative solutions to modern web challenges.",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-600/10"
    },
    {
      id: 2,
      name: "Vishnu Mishra",
      role: "Java Developer & Backend Specialist",
      image: "/api/placeholder/300/300",
      experience: "2+ Years",
      company: "Industry Expert",
      specialties: ["Java", "Spring", "Spring Boot", "Backend Architecture", "Microservices", "API Development"],
      description: "Seasoned Java developer with deep expertise in enterprise-level backend development and system architecture.",
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-500/10 to-teal-600/10"
    }
  ];


  const values = [
    {
      title: "Innovation First",
      description: "We focus on cutting-edge technologies and creative solutions that prepare students for the future.",
      icon: Rocket,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Practical Learning",
      description: "Hands-on projects and real-world applications ensure students gain practical, job-ready skills.",
      icon: Target,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Creative Excellence",
      description: "Only institute in UP focusing on creative web development with advanced animations and 3D experiences.",
      icon: Sparkles,
      gradient: "from-pink-500 to-violet-600"
    },
    {
      title: "Industry Ready",
      description: "Our curriculum is designed with industry experts to ensure graduates meet current market demands.",
      icon: Briefcase,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const InstructorCard = ({ instructor }) => (
    <div className={`group relative bg-gradient-to-br ${instructor.bgGradient} border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:border-white/20`}>
      {/* Profile Image */}
      <div className="relative mb-6">
        <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${instructor.gradient} p-1`}>
          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-4xl font-bold">
            {instructor.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className={`bg-gradient-to-r ${instructor.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
            {instructor.experience}
          </div>
        </div>
      </div>

      {/* Instructor Info */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{instructor.name}</h3>
        <p className="text-gray-300 font-medium mb-2">{instructor.role}</p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <Briefcase className="w-4 h-4" />
          <span>Ex-{instructor.company}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm text-center mb-6 leading-relaxed">
        {instructor.description}
      </p>

      {/* Specialties */}
      <div className="space-y-3">
        <h4 className="text-white font-semibold text-sm">Specialties:</h4>
        <div className="flex flex-wrap gap-2">
          {instructor.specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${instructor.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
    </div>
  );

  return (
    <div className="bg-black min-h-screen">

      {/* Mission & Values Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Mission & Values
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Empowering students with future-ready skills and innovative technologies
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:border-white/20">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${value.gradient} mb-4 w-fit`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-4">
                <Target className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Our Mission</span>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bridging the Gap Between <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Education & Industry</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At CodeForge, we're committed to revolutionizing tech education by focusing on emerging technologies 
              and creative development practices. We're the only institute in Uttar Pradesh specializing in 
              creative web development, ensuring our students stand out in the competitive tech landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Meet Our Team</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Expert
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Instructors
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Learn from industry professionals with real-world experience and deep technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Coding Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join CodeForge and become part of UP's most innovative coding community. 
              Learn from experts, work on real projects, and prepare for a successful tech career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5" />
                Enroll Now
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                <Coffee className="w-5 h-5" />
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;