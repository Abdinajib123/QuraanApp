import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
  <div>
     <header className="pb-6 bg-gradient-to-b from-green-50 to-[#e0f2f1] lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" title="Home" className="flex items-center no-underline">
               <img
                className="w-auto h-8 lg:h-10"
                src={logo}
                alt="Logo"
              />
            
              <span className="ml-3 text-xl font-bold text-black no-underline">Quran</span>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>

            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link
              to="/"
              className="text-base font-medium text-black transition-all duration-200 hover:text-[#10B981] focus:text-[#10B981] no-underline"
            >
              Home
            </Link>

            <Link
              to="/About"
              className="text-base font-medium text-black transition-all duration-200 hover:text-[#10B981] focus:text-[#10B981] no-underline"
            >
              About
            </Link>

            <Link
              to="/Quran"
              className="text-base font-medium text-black transition-all duration-200 hover:text-[#10B981] focus:text-[#10B981] no-underline"
            >
              Quran
            </Link>

            <Link
              to="/Contact"
              className="text-base font-medium text-black transition-all duration-200 hover:text-[#10B981] focus:text-[#10B981] no-underline"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <Link
                to="/"
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#10B981] focus:text-[#10B981] no-underline"
              >
                Home
              </Link>

              <Link
                to="/About"
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#10B981] focus:text-[#10B981] no-underline"
              >
                About
              </Link>

              <Link
                to="/Quran"
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#10B981] focus:text-[#10B981] no-underline"
              >
                Quran
              </Link>

              <Link
                to="/Contact"
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#10B981] focus:text-[#10B981] no-underline"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="px-6 mt-6">
            <Link
              to="/"
              className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#10B981] border border-transparent rounded-md items-center hover:bg-[#0F766E] focus:bg-[#0F766E] no-underline"
              role="button"
            >
              Get started now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  </div>
  );
}

export default Header;
