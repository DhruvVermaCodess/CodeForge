import React from 'react';
import { Code, Layout, Terminal, GitBranch, Database, Globe, BookOpen, Users, Clock, CheckCircle } from 'lucide-react';

const LearningExperience = () => {
  const methodologies = [
    {
      icon: BookOpen,
      title: "Project-Based Learning",
      description: "Build real-world projects that solve actual business problems. Learn by doing, not just theory."
    },
    {
      icon: Users,
      title: "Peer Learning",
      description: "Collaborate with fellow students on group projects. Learn team dynamics and coding best practices."
    },
    {
      icon: Terminal,
      title: "Live Coding Sessions",
      description: "Watch experts code in real-time. Learn professional workflows and debugging techniques."
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Choose from weekend, weekday, or evening batches. Learn at your own pace with recorded sessions."
    }
  ];

  const technologies = [
    {
      category: "Frontend Development",
      tools: [
        { name: "React.js", icon: Code },
        { name: "Next.js", icon: Layout },
        { name: "TypeScript", icon: Terminal },
        { name: "Tailwind CSS", icon: Layout }
      ]
    },
    {
      category: "Backend Development",
      tools: [
        { name: "Node.js", icon: Terminal },
        { name: "Express.js", icon: Globe },
        { name: "MongoDB", icon: Database },
        { name: "PostgreSQL", icon: Database }
      ]
    },
    {
      category: "DevOps & Tools",
      tools: [
        { name: "Git", icon: GitBranch },
        { name: "Docker", icon: Code },
        { name: "AWS", icon: Globe },
        { name: "CI/CD", icon: Terminal }
      ]
    }
  ];

  const facilities = [
    "24/7 Lab Access",
    "High-Speed Internet",
    "Individual Workstations",
    "Latest Hardware",
    "Conference Rooms",
    "Break-out Zones",
    "Library Access",
    "Recreation Area"
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              World-Class Learning
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our teaching methodology combines hands-on practice, industry expertise, and cutting-edge technology.
          </p>
        </div>

        {/* Teaching Methodologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {methodologies.map((method, index) => {
            const Icon = method.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <p className="text-gray-400">{method.description}</p>
              </div>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technology Stack You'll Master</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h4 className="text-lg font-semibold text-white mb-4">{tech.category}</h4>
                <div className="grid grid-cols-2 gap-4">
                  {tech.tools.map((tool, toolIndex) => {
                    const Icon = tool.icon;
                    return (
                      <div 
                        key={toolIndex}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <Icon className="w-4 h-4 text-blue-400" />
                        <span>{tool.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">State-of-the-Art Facilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-gray-300"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningExperience;