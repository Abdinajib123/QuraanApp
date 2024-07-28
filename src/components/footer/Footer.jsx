import React from "react";
import logo from '../../assets/logo.png';
const Footer = () =>{
    return (
      <div>
           <footer className="bg-gradient-to-b from-green-50 to-[#e0f2f1] py-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-black">About Us</h3>
              <p className="mt-4 text-base text-black">Learn more about our mission to provide easy access to the Quran.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-base text-black hover:text-green-500 no-underline">Home</a></li>
                <li><a href="#" className="text-base text-black hover:text-green-500 no-underline">About</a></li>
                <li><a href="#" className="text-base text-black hover:text-green-500 no-underline">Quran</a></li>
                <li><a href="#" className="text-base text-black hover:text-green-500 no-underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">Follow Us</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-base text-black hover:text-green-500 no-underline">Facebook</a></li>
                <li><a href="#" className="text-base text-black hover:text-green-500 no-underline">Twitter</a></li>
                <li><a href="#" className="text-base text-black hover:text-green-500 no-underline">Linkdin</a></li>
                <li><a href="#" className="text-base text-black hover:text-green-500 no-underline">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">Contact Us</h3>
              <p className="mt-4 text-base text-black">Email: support@quranapp.com</p>
              <p className="mt-2 text-base text-black">Phone: +123 456 7890</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <img
              className="w-auto h-10 mx-auto"
              src={logo}
              alt="Logo"
            />
            <p className="text-base text-black mt-4">© 2024 Quran App. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    );
}

export default Footer;
