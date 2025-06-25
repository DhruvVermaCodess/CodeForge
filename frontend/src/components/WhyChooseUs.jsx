import React, { useState, useEffect } from 'react';
import { 
  Award,
  Users,
  BookOpen,
  Briefcase,
  Star,
  TrendingUp,
  Clock,
  Shield,
  Target,
  Code,
  Zap,
  Heart,
  CheckCircle,
  ArrowRight,
  PlayCircle
} from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: '500+', label: 'Students Placed', icon: Users },
    { number: '95%', label: 'Job Success Rate', icon: TrendingUp },
    { number: '50+', label: 'Industry Partners', icon: Briefcase },
    { number: '4.9/5', label: 'Student Rating', icon: Star }
  ];

  const features = [
    {
      id: 1,
      icon: Users,
      title: "Expert Industry Mentors",
      description: "Learn from professionals with 10+ years of experience at top tech companies like Google, Microsoft, and Amazon.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      highlights: ["FAANG Experience", "1:1 Mentorship", "Live Code Reviews"]
    },
    {
      id: 2,
      icon: Code,
      title: "Hands-On Project Learning",
      description: "Build real-world projects and deploy them live. Create a portfolio that showcases your skills to employers.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      highlights: ["10+ Live Projects", "GitHub Portfolio", "Deployment Ready"]
    },
    {
      id: 3,
      icon: Briefcase,
      title: "100% Job Assistance",
      description: "Dedicated placement team, interview preparation, resume building, and direct connections with hiring partners.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      highlights: ["Resume Building", "Mock Interviews", "Hiring Partners"]
    },
    {
      id: 4,
      icon: Clock,
      title: "Flexible Learning Schedule",
      description: "Choose from weekday, weekend, or evening batches. Online and offline options available to suit your lifestyle.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      highlights: ["Multiple Batches", "Online & Offline", "Flexible Timing"]
    },
    {
      id: 5,
      icon: Shield,
      title: "Lifetime Access & Support",
      description: "Get lifetime access to course materials, community support, and free updates to keep your skills current.",
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-500/10 to-blue-500/10",
      highlights: ["Lifetime Access", "Community Support", "Free Updates"]
    },
    {
      id: 6,
      icon: Award,
      title: "Industry Recognized Certification",
      description: "Earn certificates recognized by top companies and add credibility to your professional profile.",
      gradient: "from-pink-500 to-violet-500",
      bgGradient: "from-pink-500/10 to-violet-500/10",
      highlights: ["Industry Recognized", "Digital Certificates", "LinkedIn Integration"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer at TCS",
      image: "PS",
      rating: 5,
      text: "CodeForge transformed my career completely. The mentors are amazing and the projects are industry-relevant."
    },
    {
      name: "Rahul Kumar",
      role: "AI Engineer at Wipro",
      image: "RK",
      rating: 5,
      text: "Best investment I made for my career. Got placed within 2 months of course completion!"
    },
    {
      name: "Anjali Patel",
      role: "Mobile App Developer at Infosys",
      image: "AP",
      rating: 5,
      text: "The hands-on approach and real projects made all the difference. Highly recommend!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-2/3 w-60 h-60 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-gray-300">Why Students Love Us</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              CodeForge Institute?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We don't just teach code, we build careers. Join thousands of successful developers 
            who started their journey with us and now work at top companies worldwide.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className={`text-center p-6 rounded-2xl border transition-all duration-500 ${
                  currentStat === index 
                    ? 'border-blue-500/50 bg-blue-500/10 scale-105' 
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-4 transition-colors duration-500 ${
                  currentStat === index ? 'text-blue-400' : 'text-gray-400'
                }`} />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`group relative bg-gradient-to-br ${feature.bgGradient} border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:border-white/20 cursor-pointer`}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

                {/* Highlights */}
                <div className="space-y-2">
                  {feature.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our Students Say
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our next batch and become part of a community that's shaping the future of technology. 
            Your dream job is just one course away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <button className="group flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-300">
              <PlayCircle className="group-hover:scale-110 transition-transform duration-300" size={20} />
              Watch Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;