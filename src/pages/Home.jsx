import React from 'react'
import { Link } from 'react-router-dom';
import Quran from '../assets/Quran.jpg'

const Home = () => {


  return (
    <div>
      <div className="bg-gradient-to-b from-green-50 to-[#e0f2f1]">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  Discover the Beauty of
                  <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#6EE7B7]"></span>
                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">The Quran.</h1>
                  </div>
                </h1>
                <p className="mt-8 text-base text-black sm:text-xl">
                  Dive into the depths of divine wisdom and guidance. Explore the holy Quran with ease and grace.
                </p>

                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
          
                  <Link
                    to="/Quran"          
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#6EE7B7] hover:bg-[#34D399] focus:bg-[#34D399] rounded-md shadow-md"
                    role="button"
                  >
                    Start Reading
                  </Link>

                  
                </div>
              </div>

              <div>
                <img
                  className="w-full rounded-lg shadow-lg"
                  src={Quran }
                  alt="Quran"
                  onError={(e) => { e.target.onerror = null; e.target.src="path/to/fallback-image.png"}}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gradient-to-b from-green-50 to-[#e0f2f1] py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">Key Features</h2>
            <p className="mt-4 text-base text-black sm:text-xl">Explore the features that make our Quran App unique and helpful for your spiritual journey.</p>
          </div>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-green-500 rounded-full">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black">Easy Navigation</h3>
              <p className="text-base text-black">Quickly find and read any Surah or Ayah with our user-friendly interface.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-green-500 rounded-full">
                <span className="text-2xl">🔔</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black">Daily Reminders</h3>
              <p className="text-base text-black">Receive daily reminders and notifications to keep you connected with the Quran.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-green-500 rounded-full">
                <span className="text-2xl">🎧</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black">Audio Recitations</h3>
              <p className="text-base text-black">Listen to beautiful recitations from renowned Qaris directly within the app.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-green-50 to-[#e0f2f1] py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">Testimonials</h2>
            <p className="mt-4 text-base text-black sm:text-xl">Hear what our users have to say about their experience with the Quran App.</p>
          </div>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="mb-4 text-base text-black">"The Quran App has transformed my daily routine. The reminders and recitations keep me connected with my faith."</p>
              <h3 className="text-xl font-semibold text-black">- Sarah A.</h3>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="mb-4 text-base text-black">"I love the easy navigation and beautiful design of the app. It's a must-have for anyone wanting to explore the Quran."</p>
              <h3 className="text-xl font-semibold text-black">- Ahmed K.</h3>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="mb-4 text-base text-black">"The audio recitations are soothing and perfect for my daily commutes. Highly recommend this app to all Muslims."</p>
              <h3 className="text-xl font-semibold text-black">- Fatima B.</h3>
            </div>
          </div>
        </div>
      </div>
   
    </div>
    
  )
}

export default Home
