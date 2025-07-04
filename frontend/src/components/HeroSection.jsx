import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Smartphone, Brain, Globe, Zap, Star, Award, Users, TrendingUp, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const technologies = ['Full Stack Web Development', 'App Development', 'Creative Web Development'];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingIcon = ({ icon: Icon, className, delay = 0 }) => (
    <div 
      className={`absolute opacity-20 ${className}`}
      style={{
        animation: `float 8s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <Icon size={32} className="text-blue-400" />
    </div>
  );

  const ParticleField = () => (
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="relative pt-20 pb-20 min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Interactive Mouse Gradient */}
      <div 
        className="absolute w-96 h-96 opacity-20 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.2) 50%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Multiple Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Enhanced Floatin Tech Icons */}
        <FloatingIcon icon={Code} className="top-24 left-24" delay={0} />
        <FloatingIcon icon={Smartphone} className="top-40 right-40" delay={1} />
        <FloatingIcon icon={Brain} className="bottom-40 left-40" delay={2} />
        <FloatingIcon icon={Globe} className="bottom-24 right-24" delay={3} />
        <FloatingIcon icon={Layers} className="top-1/2 left-20" delay={4} />
        <FloatingIcon icon={Zap} className="top-1/3 right-20" delay={5} />
      </div>

      {/* Particle Field */}
      <ParticleField />

      {/* Advanced Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 50px 50px, 50px 50px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Enhanced Bagdge */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-full px-6 py-3 mb-2 backdrop-blur-xl shadow-2xl">
          <div className="relative">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          </div>
          <span className="text-sm font-medium text-blue-200">🚀 Industry-Certified Program</span>
          <Star size={16} className="text-yellow-400" />
        </div>

        {/* Enhanced Main Headline */}
        <h1 className="text-6xl md:text-8xl font-black mb-4 sm:mb-8 leading-none">
  <span className="bg-gradient-to-r leading-none from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
    Get Skilled & Placed
  </span>
  <br />
  <span className="bg-gradient-to-r leading-none from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent relative inline-block">
    As A Software Engineer
    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl -z-10 rounded-lg"></div>
    <div className="text-base md:text-xl font-medium mt-2">
      in ₹1500/
      <span className="text-xs align-top">month</span>
    </div>
  </span>
</h1>


        {/* Course Specializations */}
        <div className="mb-5 hidden sm:block">
          <p className="text-xl md:text-2xl text-gray-300 leading-none">
            Master the art of{' '}
            <span 
              key={currentTech}
              className=" font-bold inline-block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in"
            >
              {technologies[currentTech]}
            </span>
          </p>
        </div>

        {/* Enhanced Description */}
        <p className="text-lg text-gray-300 mb-5 max-w-3xl mx-auto leading-tight">
          🎯 <strong className="text-blue-400">Industry-Certified Program</strong> designed to transform you into a skilled software engineer. 
          Build real-world projects, learn from industry veterans, and join an elite community of tech innovators.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link to='/courses' className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center gap-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">🚀 Enroll Now</span>
            <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" size={22} />
          </Link>
          
          <Link to='/free-career-counselling' className="group relative border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-xl hover:bg-cyan-400/10 flex items-center gap-3">
            <Award size={22} />
            Get Free Career Counselling
          </Link>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Users, value: '1000+', label: 'Students Certified', color: 'text-blue-400' },
            { icon: TrendingUp, value: '98%', label: 'Job Success Rate', color: 'text-green-400' },
            { icon: Award, value: '50+', label: 'Industry Partners', color: 'text-purple-400' },
            { icon: Star, value: '4.9/5', label: 'Student Rating', color: 'text-yellow-400' }
          ].map((stat, index) => (
            <div key={index} className="group text-center bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-xl hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <stat.icon className={`${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} size={24} />
              <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-cyan-400/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-3 animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(-15px) rotate(240deg); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;