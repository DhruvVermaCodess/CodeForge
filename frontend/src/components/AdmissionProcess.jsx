import React from 'react'
import { ClipboardCheck, Calendar, CreditCard, CheckCircle, ArrowRight } from 'lucide-react'

const AdmissionProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Application",
      description: "Fill out the online application form with your details and course preferences",
      icon: ClipboardCheck
    },
    {
      id: 2,
      title: "Counseling Session",
      description: "Schedule a free career counseling session with our experts",
      icon: Calendar
    },
    {
      id: 3,
      title: "Enrollment",
      description: "Complete the enrollment process and secure your seat",
      icon: CreditCard
    }
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Simple Admission
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Start your journey towards a successful tech career with our simple three-step admission process.
          </p>
        </div>

        {/* Admission Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div 
                key={step.id}
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-400" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Apply Now
          </button>
          <p className="text-gray-400 mt-4">
            Need help? Contact our admission team at admissions@codeforge.edu
          </p>
        </div>
      </div>
    </section>
  )
}

export default AdmissionProcess