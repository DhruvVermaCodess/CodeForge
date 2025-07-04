import React from 'react';

const LoadingUI = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="text-center">
        {/* Main spinner */}
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-gray-700 rounded-full animate-spin border-t-cyan-400 mx-auto"></div>
          <div className="w-16 h-16 border-4 border-gray-700 rounded-full animate-spin border-t-fuchsia-500 absolute top-2 left-1/2 transform -translate-x-1/2 animate-reverse-spin"></div>
        </div>
        
        {/* Logo/Brand area */}
        <div className="mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-100 mb-2">Loading</h2>
          <p className="text-gray-400">Setting up your experience...</p>
        </div>
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 h-1 rounded-full animate-pulse" style={{width: '70%'}}></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-900 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-fuchsia-900 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gray-800 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <style jsx>{`
        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingUI;