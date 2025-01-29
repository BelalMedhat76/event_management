"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r px-2 from-blue-500 to-purple-600 p-4 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          EventMaster
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
      
          
            <li>  <Link href="/" className="hover:text-gray-200 font-bold transition">
            Home
          </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-gray-200 font-bold transition">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200 font-bold transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-blue-600 p-4 absolute w-full left-0 top-16 shadow-lg z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <ul className="text-white space-y-4 text-center">
           
          <li>  <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          </li>
            <li>
              <Link
                href="/pricing"
                className="block hover:text-gray-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block hover:text-gray-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
