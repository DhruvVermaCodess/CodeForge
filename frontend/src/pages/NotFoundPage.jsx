import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 8; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-10 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: '6s',
          }}
        />
      ))}

      {/* Glowing Orb Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-gradient-radial from-cyan-500/10 via-cyan-500/5 to-transparent animate-pulse" 
             style={{ animationDuration: '4s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Animated 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-red-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x bg-300% leading-none">
            404
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-md text-gray-300 mb-10 leading-relaxed">
          Oops! The page you're looking for seems to have vanished into the digital void. 
          Don't worry though, even the best explorers sometimes take a wrong turn.
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        >
          <span className="relative z-10">Take Me Home</span>
          
          {/* Button shine effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-300" />
        </Link>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '3s' }} />

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-shine {
          animation: shine 0.5s ease-out;
        }
        
        .bg-300\\% {
          background-size: 300% 300%;
        }
        
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;