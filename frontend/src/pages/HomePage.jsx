import React from 'react'
import HeroSection from '../components/HeroSection'
import CourseOffering from '../components/CourseOffering'
import WhyChooseUs from '../components/WhyChooseUs'
import StudentSuccess from '../components/StudentSuccess'
import LearningExperience from '../components/LearningExperience'
import AdmissionProcess from '../components/AdmissionProcess'

const HomePage = () => {
  return (
    <>
        <HeroSection />
        <CourseOffering />
        <WhyChooseUs />
        <StudentSuccess />
        <LearningExperience />
        <AdmissionProcess />
    </>
  )
}

export default HomePage