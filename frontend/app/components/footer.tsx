"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* About Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">EventMaster</h3>
          <p className="text-gray-400 mt-2 max-w-sm">
            The ultimate platform to create, manage, and explore amazing events.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="/events" className="text-gray-400 hover:text-white">Explore Events</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-3 justify-center">
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} EventMaster. All rights reserved.
      </div>
    </footer>
  );
}
