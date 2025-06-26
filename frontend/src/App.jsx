import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AbouPage';
import CodeForgePlacement from './pages/CodeForgePlacement';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import LoadingUI from './components/LoadingUi';
import CourseDetailsPage from './pages/CourseDetailsPage';
import ProfilePage from './pages/ProfilePage';
import PersonalDetails from './pages/PersonalDetails';
import EnrollmentCourses from './pages/EnrollmentCourses';
import CoursePage from './pages/CoursePage';
import AdminLayout from './layouts/admin/AdminLayout';
import AdminDashboard from './layouts/admin/components/AdminDashboard';
import { useLocation } from 'react-router-dom';

const App = () => {
  const { isAuth, loading } = useContext(AuthContext)
  const { location } = useLocation();

  if (loading) {
    return <LoadingUI />
  }
  
  return (
    <Router>
      {!location.search}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={isAuth ? <Navigate to='/' /> : <LoginPage />} />
        <Route path='/signup' element={isAuth ? <Navigate to='/' /> : <SignupPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/placements' element={<CodeForgePlacement />} />
        <Route path='/profile' element={<ProfilePage />}>
            <Route path='personal-details' element={<PersonalDetails />} />
            <Route path='enrollment-courses' element={<EnrollmentCourses />} />
        </Route>
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/courses/:id' element={<CourseDetailsPage />} />
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<AdminDashboard />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
    
  )
}

export default App