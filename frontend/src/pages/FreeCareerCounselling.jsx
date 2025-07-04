import React, { useState } from 'react'
import { BACKEND_URI } from '../utils'
import { toast } from 'react-toastify'

const FreeCareerCounselling = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [prefferedLanguage, setPrefferedLanguage] = useState('Hindi')
  const [experienceLevel, setExperienceLevel] = useState('School_Student')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(`${BACKEND_URI}/mail/get-free-counselling`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, phoneNumber, prefferedLanguage, experienceLevel, message })
    })
    if (!response.ok) {
      const data = await response.json()
      return toast.error(data.error)
    }
    const data = await response.json()
    toast.success(data.message)
    setName('')
    setEmail('')
    setPhoneNumber('')
    setPrefferedLanguage('Hindi')
    setExperienceLevel('School_Student')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-6 py-24">
      <form onSubmit={handleSubmit} className="w-full max-w-5xl bg-zinc-800 p-10 rounded-2xl shadow-xl space-y-8">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Free Career Counselling</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full px-4 py-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="w-full px-4 py-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm text-gray-300 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number..."
              className="w-full px-4 py-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="prefferedLanguage" className="block text-sm text-gray-300 mb-1">Preferred Language</label>
            <select
              id="prefferedLanguage"
              value={prefferedLanguage}
              onChange={(e) => setPrefferedLanguage(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="experienceLevel" className="block text-sm text-gray-300 mb-1">Experience Level</label>
            <select
              id="experienceLevel"
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="School_Student">School Student</option>
              <option value="College_Student">College Student</option>
              <option value="Graduated">Graduated</option>
              <option value="Currently_Working_In_NonIt">Currently Working In Non-IT</option>
              <option value="Currently_Working_In_It">Currently Working In IT</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message..."
              rows="4"
              className="w-full px-4 py-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg text-white font-semibold text-lg"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  )
}

export default FreeCareerCounselling
