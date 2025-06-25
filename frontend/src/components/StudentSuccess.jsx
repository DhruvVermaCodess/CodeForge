import React from 'react';
import { Star, Building, ArrowRight } from 'lucide-react';

const StudentSuccess = () => {
  const successStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/students/sarah.jpg",
      previousRole: "Marketing Associate",
      currentRole: "Full Stack Developer",
      company: "Microsoft",
      salary: "₹18 LPA",
      story: "From a marketing background to tech, CodeForge helped me transition into my dream role. The structured curriculum and mentorship made all the difference.",
      skills: ["React", "Node.js", "MongoDB"],
      graduationYear: 2023
    },
    {
      id: 2,
      name: "Rahul Verma",
      image: "/students/rahul.jpg",
      previousRole: "Fresh Graduate",
      currentRole: "ML Engineer",
      company: "Google",
      salary: "₹24 LPA",
      story: "Started as a fresh graduate, now working at Google. The AI/ML program gave me the perfect foundation for my career.",
      skills: ["Python", "TensorFlow", "AWS"],
      graduationYear: 2023
    },
    {
      id: 3,
      name: "Priya Patel",
      image: "/students/priya.jpg",
      previousRole: "School Teacher",
      currentRole: "Mobile App Developer",
      company: "Swiggy",
      salary: "₹16 LPA",
      story: "Switching careers was daunting, but the supportive environment at CodeForge made it possible. Now I'm living my tech dreams!",
      skills: ["React Native", "Flutter", "Firebase"],
      graduationYear: 2022
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Success Stories from
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Graduates
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real stories of transformation, growth, and success from our alumni network.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div 
              key={story.id}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300"
            >
              {/* Student Image & Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">
                  {story.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{story.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Building className="w-4 h-4" />
                    <span>{story.company}</span>
                  </div>
                </div>
              </div>

              {/* Career Transformation */}
              <div className="flex items-center gap-4 mb-6 text-sm">
                <div className="text-gray-400">{story.previousRole}</div>
                <ArrowRight className="w-4 h-4 text-blue-400" />
                <div className="text-green-400 font-medium">{story.currentRole}</div>
              </div>

              {/* Story */}
              <p className="text-gray-300 mb-6">{story.story}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {story.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Salary & Rating */}
              <div className="flex items-center justify-between text-sm">
                <div className="text-green-400 font-semibold">{story.salary}</div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span>5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300">
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentSuccess;