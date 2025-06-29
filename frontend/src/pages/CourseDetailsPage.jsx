import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  BookOpen, Code, User, Star, Play, TrendingUp, CheckCircle,
  Users, Clock, Target, Shield, ChevronRight, ArrowLeft, Heart, Bookmark, Share2
} from 'lucide-react';
import coursesDataJson from '../../public/courses.json';

const TABS = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'curriculum', label: 'Curriculum', icon: Code },
  { id: 'instructor', label: 'Instructor', icon: User },
  { id: 'reviews', label: 'Reviews', icon: Star }
];

const getStatusStyle = (status) => status === 'live batch'
  ? 'bg-green-500/20 text-green-400'
  : 'bg-blue-500/20 text-blue-400';

const CourseDetailPage = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [tab, setTab] = useState('overview');
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetch('/courses.json')
      .then(res => res.json())
      .then(data => {
        const match = data.find(c => c.slug === slug);
        setCourse(match || data[0]);
      });
  }, [slug]);

  if (!course) return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>
  );

  return (
    <div className="bg-[#0e0e0e] text-white min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/courses" className="p-2 bg-white/10 rounded hover:bg-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <span className="text-gray-400">/ {course.coursename}</span>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Course Info */}
          <div className="md:col-span-2 space-y-6">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${getStatusStyle(course.status)}`}>
              {course.status.toUpperCase()}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">{course.coursename}</h1>
            <p className="text-gray-400 max-w-xl">
              Master modern skills with real-world projects and top-tier instructors.
            </p>

            <div className="flex gap-3 flex-wrap">
              {course.languages.map((lang, i) => (
                <span key={i} className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/80">{lang}</span>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
              {[{
                icon: Star, label: 'Rating', value: '4.9'
              }, {
                icon: Users, label: 'Students', value: '2.8k+'
              }, {
                icon: Clock, label: 'Duration', value: '40h'
              }, {
                icon: Target, label: 'Projects', value: '12'
              }].map((stat, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl">
                  <stat.icon className="w-5 h-5 text-purple-400 mb-2" />
                  <div className="font-semibold text-lg">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-green-400" /> Prerequisites
              </h3>
              <div className="flex gap-2 flex-wrap">
                {course.prerequistes.map((p, i) => (
                  <span key={i} className="bg-green-500/10 text-green-300 px-4 py-1 rounded-full text-sm">{p}</span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex gap-2 border-b border-white/10 pb-2">
                {TABS.map(t => (
                  <button key={t.id} onClick={() => setTab(t.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${tab === t.id ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}> 
                    <t.icon className="w-4 h-4 inline mr-1" />{t.label}
                  </button>
                ))}
              </div>
              <div className="mt-6">
                {tab === 'overview' && (
                  <ul className="space-y-3">
                    {["Build full-stack apps", "Work with databases", "Deploy like a pro"].map((text, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" /> {text}
                      </li>
                    ))}
                  </ul>
                )}
                {tab === 'curriculum' && (
                  <ul className="space-y-2">
                    {course.completesyllabus.map((mod, idx) => (
                      <li key={idx} className="bg-white/5 p-4 rounded-xl text-gray-200">{idx + 1}. {mod}</li>
                    ))}
                  </ul>
                )}
                {tab === 'instructor' && (
                  <p className="text-gray-400">Led by industry veterans with years of experience in top tech companies.</p>
                )}
                {tab === 'reviews' && (
                  <div className="space-y-4">
                    {["Excellent course!", "Very clear explanations."].map((review, idx) => (
                      <div key={idx} className="bg-white/5 p-4 rounded-xl">
                        <div className="font-bold mb-1">Student {idx + 1}</div>
                        <div className="text-gray-300 text-sm">{review}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 bg-white/5 p-6 rounded-2xl">
            <div className="aspect-video bg-black/40 rounded-xl flex items-center justify-center">
              <img src="/fullstack.webp" alt="fullstack" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-bold">₹{course.discounted_price}</span>
                <span className="line-through text-gray-400">₹{course.real_price}</span>
              </div>
              <div className="text-sm text-green-400">{course.discount} OFF - Lifetime Access</div>
            </div>
            <Link to={`/payment/${course.id}`} className="block text-center bg-purple-600 hover:bg-purple-700 transition py-3 rounded-xl font-semibold">
              Enroll Now
            </Link>
            <div>
              <h4 className="font-medium text-lg mb-2">FAQs</h4>
              <ul className="text-gray-400 space-y-1 text-sm">
                {course.faqs.map((q, i) => <li key={i}>• {q}</li>)}
              </ul>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setLiked(!liked)} className={`p-2 rounded-full ${liked ? 'bg-pink-500/20' : 'bg-white/10'}`}>
                <Heart className={`w-5 h-5 ${liked ? 'text-pink-400' : 'text-gray-400'}`} />
              </button>
              <button className="p-2 rounded-full bg-white/10">
                <Bookmark className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 rounded-full bg-white/10">
                <Share2 className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
