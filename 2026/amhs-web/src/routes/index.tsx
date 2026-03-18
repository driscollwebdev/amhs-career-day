import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

// Home.tsx
function Home() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative w-full h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/amhs-teachers.jpg"
            alt="Avon Middle High School Staff - Unite, Empower, Achieve"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to
              <span className="block text-orange-500 mt-2">
                Avon Middle High School
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-semibold mb-4">
              Unite. Empower. Achieve.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              Building tomorrow's leaders through Panther PRIDE: Persistence, Respect, Integrity, Diversity, and Empowerment.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-lg">
                Learn More
              </button>
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-200 border-t-4 border-orange-600">
              <div className="text-orange-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Academics</h3>
              <p className="text-gray-600 mb-4">
                Explore our comprehensive curriculum and educational programs.
              </p>
              <a href="/academics" className="text-orange-600 font-semibold hover:text-orange-700">
                Learn More →
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-200 border-t-4 border-orange-600">
              <div className="text-orange-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Athletics</h3>
              <p className="text-gray-600 mb-4">
                Join our Panthers teams and discover your athletic potential.
              </p>
              <a href="/athletics" className="text-orange-600 font-semibold hover:text-orange-700">
                Learn More →
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-200 border-t-4 border-orange-600">
              <div className="text-orange-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Student Life</h3>
              <p className="text-gray-600 mb-4">
                Get involved in clubs, activities, and community events.
              </p>
              <a href="/students" className="text-orange-600 font-semibold hover:text-orange-700">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Panther PRIDE Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Panther PRIDE</h2>
            <p className="text-xl text-gray-600">Our Core Values</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { letter: 'P', value: 'Persistence', description: 'Never give up on your goals' },
              { letter: 'R', value: 'Respect', description: 'Honor yourself and others' },
              { letter: 'I', value: 'Integrity', description: 'Do what is right' },
              { letter: 'D', value: 'Diversity', description: 'Celebrate our differences' },
              { letter: 'E', value: 'Empowerment', description: 'Believe in your potential' },
            ].map((item) => (
              <div key={item.letter} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors duration-200">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.letter}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{item.value}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

