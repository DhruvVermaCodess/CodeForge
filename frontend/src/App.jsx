// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AbouPage';
import CodeForgeBootcamp from './pages/CodeForgeBootcamp';
// import { useContext } from 'react';
// import { AuthContext } from './contexts/AuthContext';
// import LoadingUI from './components/LoadingUi';
// import CourseDetailsPage from './pages/CourseDetailsPage';
// import ProfilePage from './pages/ProfilePage';
// import PersonalDetails from './pages/PersonalDetails'
// import EnrollmentCourses from './pages/EnrollmentCourses';
// import CoursePage from './pages/CoursePage';
// import AdminLayout from './layouts/admin/AdminLayout';
// import AdminDashboard from './layouts/admin/components/AdminDashboard';
// import AddCoursePage from './layouts/admin/components/AddCoursePage';
// import PaymentPortal from './pages/PaymentPortal';
import FreeCareerCounselling from './pages/FreeCareerCounselling';
// import ProtectedRoutes from './components/ProtectedRoutes';
import { ToastContainer } from 'react-toastify';

// const AppRoutes = () => {
//   const location = useLocation();
//   const { isAuth, loading, role } = useContext(AuthContext);

//   if (loading) {
//     return <LoadingUI />;
//   }

//   return (
//     <>
//       {!location.pathname.startsWith('/admin') && <Navbar />}
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/login' element={isAuth ? <Navigate to='/' /> : <LoginPage />} />
//         <Route path='/signup' element={isAuth ? <Navigate to='/' /> : <SignupPage />} />
//         <Route path='/about' element={<AboutPage />} />
//         <Route path='/se01-bootcamp' element={<CodeForgeBootcamp />} />
//         <Route path='/profile' element={
//           <ProtectedRoutes>
//             <ProfilePage />
//           </ProtectedRoutes>
//         }>
//             <Route path='personal-details' element={<PersonalDetails />} />
//             <Route path='enrollment-courses' element={<EnrollmentCourses />} />
//         </Route>
//         <Route path='/payment/:id' element={<PaymentPortal />} />
//         <Route path='/free-career-counselling' element={<FreeCareerCounselling />}/>
//         <Route path='/courses' element={<CoursePage />} />
//         <Route path='/courses/:slug' element={<CourseDetailsPage />} />
//         <Route path='/admin' element={
//           <ProtectedRoutes>
//             {role === 'admin' ? <AdminLayout /> : <Navigate to='/'/>}
//           </ProtectedRoutes>
//         }>
//           <Route path='dashboard' element={<AdminDashboard />} />
//           <Route path='add-courses' element={<AddCoursePage />} />
//         </Route>
//         
//       </Routes>
//     </>
//   );
// };

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<CodeForgeBootcamp />} />
      <Route path='/free-career-counselling' element={<FreeCareerCounselling />}/>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    <ToastContainer />
  </Router>
);

export default App;