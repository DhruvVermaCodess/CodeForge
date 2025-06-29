import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, X, CreditCard, Clock } from 'lucide-react';

const PaymentPortal = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/courses.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((c) => c.id === id);
        setCourse(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
        <div className="text-center">
          <div className="text-2xl font-semibold mb-2">Course not found</div>
          <Link to="/" className="text-purple-400 underline">Go back to courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-4">
      <div className="w-full max-w-xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl relative flex flex-col gap-8">
        {/* Stepper */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold shadow-lg">1</div>
            <span className="text-xs mt-1 text-gray-300">Course</span>
          </div>
          <div className="w-10 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold shadow-lg">2</div>
            <span className="text-xs mt-1 text-gray-300">Payment</span>
          </div>
          <div className="w-10 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-gray-400 font-bold">3</div>
            <span className="text-xs mt-1 text-gray-500">Success</span>
          </div>
        </div>
        {/* Card Content */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img src={course.image} alt={course.coursename} className="w-32 h-32 object-cover rounded-2xl shadow-lg border-2 border-white/10" />
          <div className="flex-1 flex flex-col gap-2 items-center md:items-start">
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1 text-center md:text-left">{course.coursename}</h3>
            <div className="flex items-center gap-2 mb-2 flex-wrap justify-center md:justify-start">
              <span className="px-3 py-1 bg-gray-800/60 text-gray-300 rounded-full text-xs border border-gray-700/50">
                {course.status}
              </span>
              {course.languages?.map((lang, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-700/40 text-gray-300 rounded-full text-xs border border-gray-700/50">
                  {lang}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
              <span className="text-3xl font-bold text-white">
                ₹{course.discounted_price}
              </span>
              <span className="text-lg line-through text-gray-400">
                ₹{course.real_price}
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-semibold">
                {course.discount} OFF
              </span>
            </div>
            <div className="text-xs text-gray-400 text-center md:text-left mb-2">One-time payment, lifetime access</div>
          </div>
        </div>
        {/* Payment Button */}
        <button
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 mb-2 mt-2"
          onClick={() => setShowModal(true)}
        >
          <CreditCard className="w-6 h-6" /> Proceed to Checkout
        </button>
        <Link to={`/course/${course.slug}`} className="block text-center text-purple-400 underline text-sm mt-2">Back to Course</Link>

        {/* Coming Soon Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl p-10 shadow-2xl w-full max-w-md relative border border-white/10 animate-fade-in">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-red-400"
                onClick={() => setShowModal(false)}
              >
                <X className="w-7 h-7" />
              </button>
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <Clock className="w-20 h-20 text-purple-400 animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-purple-400/10 blur-xl animate-pulse"></div>
                </div>
                <h3 className="text-3xl font-extrabold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Coming Soon!</h3>
                <p className="text-gray-300 mb-4 text-center text-lg">Payment integration is currently in development.<br/> We're working hard to bring you a seamless checkout experience!</p>
                <div className="bg-gray-800/50 rounded-2xl p-4 mb-4 w-full">
                  <p className="text-sm text-gray-400 text-center">For now, you can explore the course content and get ready for when payments go live!</p>
                </div>
                <Link
                  to={`/course/${course.slug}`}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 mt-2"
                  onClick={() => setShowModal(false)}
                >
                  Explore Course
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPortal;