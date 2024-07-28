import React from 'react';
import quran from '../assets/logo.png'

const About= ()=> {
  return (
    <div>
      <section className="pt-10 overflow-hidden bg-gradient-to-b from-green-50 to-[#e0f2f1] md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Hey 🎧 I am <br className="block sm:hidden" /> Listening to the Quran
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-700 md:mt-8">
                Experience the serenity and peace through the recitation of the Holy Quran. Our app provides high-quality audio recitations from renowned Qaris to accompany you on your spiritual journey.
              </p>

              <p className="mt-4 text-xl text-gray-700 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-[#6EE7B7]"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />Ask us on <a href="#" title="" className="transition-all duration-200 text-[#10B981] hover:text-[#34D399] hover:underline">Twitter</a>
              </p>
            </div>

            <div className="relative">
             
              <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={quran} alt="Listening to Quran" />
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
}

export default About;
