import React, { useState, useEffect } from 'react';
import { CheckCircle, Code, Smartphone, Globe, Settings, Bot, FileText, Calendar, MapPin, DollarSign, Star, ArrowRight, Users, Award, Briefcase, Sparkles, Zap, Target, ChevronRight, Brain, Layers, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BACKEND_URI } from '../utils';

const EnhancedBootcampUI = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('online');
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const technologies = ['Full Stack Web Development', 'App Development', 'Creative Web Development'];
  const enrollmentLink = "https://forms.gle/8N8dtASGRGtMHWN77";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleBackendAwake = async () => {
      try {
        const response = await fetch(`${BACKEND_URI}/wakeup`);
        if (!response.ok) {
          throw new Error('Failed to fetch backend status');
        }
        const data = await response.json();
        console.log('Backend status:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    handleBackendAwake();
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
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40"
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

  const skills = [
    { icon: Code, title: 'Full Stack Development', subtitle: 'MERN Stack', delay: '0ms', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Smartphone, title: 'Mobile Development', subtitle: 'React Native (Android & iOS)', delay: '100ms', gradient: 'from-purple-500 to-pink-500' },
    { icon: Globe, title: 'Networking', subtitle: 'Internetworking, WebRTC, WebSockets', delay: '200ms', gradient: 'from-green-500 to-teal-500' },
    { icon: Settings, title: 'DevOps', subtitle: 'Vercel, Render, AWS, Docker', delay: '300ms', gradient: 'from-orange-500 to-red-500' },
    { icon: Bot, title: 'Generative AI', subtitle: 'Chatbots, LLM Integration, MCP Servers', delay: '400ms', gradient: 'from-indigo-500 to-purple-500' },
    { icon: FileText, title: 'Professional Skills', subtitle: 'Resume Building + English Speaking', delay: '500ms', gradient: 'from-yellow-500 to-orange-500' }
  ];

  const benefits = [
    { icon: CheckCircle, title: '110% Guaranteed Paid Internship', description: 'We guarantee you\'ll get a paid internship upon completion', delay: '0ms' },
    { icon: Briefcase, title: 'Real Work Experience', description: 'Add genuine work experience to your resume', delay: '200ms' },
    { icon: Award, title: 'Certificate of Completion', description: 'Official certification to showcase your skills', delay: '400ms' }
  ];

  const pricingOptions = [
    {
      title: 'Monthly Plan',
      price: '₹1,500',
      period: '/month',
      total: '₹12,000 total',
      features: ['8 months duration', 'Flexible payments', 'All course materials', 'Guaranteed internship'],
      delay: '0ms',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'One-time Payment',
      price: '₹8,000',
      period: 'full course',
      total: 'Save ₹4,000',
      features: ['Complete 8-month course', 'Best value option', 'All course materials', 'Guaranteed internship'],
      popular: true,
      delay: '200ms',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Partial Payment',
      price: '₹9,500',
      period: 'split payment',
      total: 'Pay in 2 parts',
      features: ['8 months duration', 'Split into 2 payments', 'All course materials', 'Guaranteed internship'],
      delay: '400ms',
      gradient: 'from-cyan-600 to-blue-600'
    }
  ];

  const stats = [
    { icon: Users, value: '1000+', label: 'Students Certified', color: 'text-blue-400' },
    { icon: TrendingUp, value: '98%', label: 'Job Success Rate', color: 'text-green-400' },
    { icon: Award, value: '50+', label: 'Industry Partners', color: 'text-purple-400' },
    { icon: Star, value: '4.9/5', label: 'Student Rating', color: 'text-yellow-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Interactive Mouse Gradient */}
        <div 
          className="absolute w-96 h-96 opacity-30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(147,51,234,0.3) 50%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Tech Icons */}
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
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 50px 50px, 50px 50px'
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Premium Badge */}
            <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full px-8 py-4 mb-8 backdrop-blur-xl shadow-2xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-base font-semibold text-blue-200">🚀 Industry-Certified Program</span>
              <Star size={18} className="text-yellow-400" />
            </div>

            {/* Main Headline */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-4">
                  Software Engineering
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Bootcamp 01
                </span>
              </h1>
            </div>

            {/* Subtitle with Tech Animation */}
            <div className={`mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <p className="text-2xl md:text-3xl text-gray-300 mb-4">
                Transform into a Job-Ready Developer in{' '}
                <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  8 Months
                </span>
              </p>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Master the art of{' '}
                <span 
                  key={currentTech}
                  className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in"
                >
                  {technologies[currentTech]}
                </span>
              </p>
            </div>

            {/* Key Info */}
            <div className={`flex flex-col md:flex-row items-center justify-center gap-8 mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full px-6 py-3 backdrop-blur-xl">
                <Calendar className="h-5 w-5 text-green-400" />
                <span className="font-semibold text-green-300">Starting July 15th</span>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 rounded-full px-6 py-3 backdrop-blur-xl animate-pulse">
                <Users className="h-5 w-5 text-red-400" />
                <span className="font-semibold text-red-300">Limited Seats Available</span>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-6 py-3 backdrop-blur-xl">
                <DollarSign className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold text-yellow-300">Starting at ₹1,500/month</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col md:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <a
                href={enrollmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={20} />
                  Enroll Now
                </span>
                <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" size={22} />
              </a>
              
              <Link to='/free-career-counselling' className="group relative border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 backdrop-blur-xl hover:bg-cyan-400/10 flex items-center gap-3">
                <Award size={22} />
                Free Career Counselling
              </Link>
            </div>

            {/* Stats Grid */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-xl hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                  <stat.icon className={`${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} size={28} />
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 border-2 border-cyan-400/40 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-3 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-24 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Course Structure
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Designed for maximum flexibility and optimal learning outcomes
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 p-10 rounded-3xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Globe className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">First 4 Months</h3>
                    <p className="text-blue-300 font-semibold text-lg">Fully Online</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Learn from the comfort of your home with live interactive sessions, 
                  hands-on projects, and personalized mentorship from industry experts.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 p-10 rounded-3xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">Next 4 Months</h3>
                    <p className="text-purple-300 font-semibold text-lg">Your Choice: Online or Offline</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Continue online or join our offline campus for enhanced learning 
                  experience, networking opportunities, and collaborative projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What You'll Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn the most in-demand technologies and skills that top companies are looking for
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 p-8 rounded-3xl hover:border-slate-600/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-xl"
                style={{ animationDelay: skill.delay }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-r ${skill.gradient} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <skill.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{skill.subtitle}</p>
                  </div>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                  <div className={`bg-gradient-to-r ${skill.gradient} h-3 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              What You'll Get
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive benefits designed to guarantee your success
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 p-10 rounded-3xl text-center transform hover:scale-105 transition-all duration-500 hover:shadow-2xl backdrop-blur-xl"
                style={{ animationDelay: benefit.delay }}
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-full w-fit mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-green-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Pricing Options
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to fit every budget
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
              <div 
                key={index} 
                className={`group bg-gradient-to-br from-slate-800/60 to-slate-900/60 border ${
                  option.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/50 shadow-2xl shadow-blue-500/25' 
                    : 'border-slate-600/50 hover:border-slate-500/50'
                } p-10 rounded-3xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl backdrop-blur-xl relative`}
                style={{ animationDelay: option.delay }}
              >
                {option.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold animate-pulse shadow-lg">
                      🔥 Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {option.title}
                  </h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {option.price}
                    </span>
                    <span className="text-lg text-gray-400 ml-2">
                      {option.period}
                    </span>
                  </div>
                  <p className="text-gray-300 font-semibold">{option.total}</p>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-300 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Zap className="h-12 w-12 text-yellow-400 animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent">
                Ready to Transform Your Career?
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our next cohort of future tech leaders. Limited seats available for July 15th intake.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href={enrollmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/50 flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={20} className="text-black" />
                  Enroll Now
                </span>
                <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" size={22} />
              </a>
              
              <Link to='/free-career-counselling'  className="group relative border-2 border-white/30 hover:border-white text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 backdrop-blur-xl hover:bg-white/10 flex items-center gap-3">
                <Calendar size={22} />
                Get Free Career Counselling
              </Link>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100 text-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>110% Placement Guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-cyan-400" />
                <span>1:1 Mentorship</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-red-400" />
                <span>Project-Based Learning</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </section>

      {/* Sticky Enrollment Bar */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 to-purple-900 border-t border-blue-700/50 z-50 backdrop-blur-xl shadow-2xl shadow-blue-500/30 animate-slide-up">
          <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Limited Time Offer</h3>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold">₹8,000</span>
                <span className="text-blue-200 line-through">₹12,000</span>
              </div>
              <a
                href={enrollmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Sparkles size={16} />
                Enroll Now
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-800 relative z-10 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Bootcamp 01</h3>
              <p className="text-gray-400 mb-4">
                Industry-certified program transforming students into job-ready developers in 8 months.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Program</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Curriculum</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instructors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Alumni Network</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Free Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Coding Challenges</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">123 Tech Park, Bangalore, India</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span className="text-gray-400">+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span className="text-gray-400">info@bootcamp01.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Bootcamp 01. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedBootcampUI;