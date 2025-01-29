// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="w-[100%] relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6">
//       {/* Animated Title */}
//       <motion.h1
//         className="text-5xl md:text-7xl font-extrabold mb-4"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Elevate Your Events 🚀
//       </motion.h1>

//       {/* Subtitle */}
//       <motion.p
//         className="text-lg md:text-2xl mb-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5, duration: 1 }}
//       >
//         Manage, sell tickets, and track attendees with ease.
//       </motion.p>

//       {/* CTA Buttons */}
//       <motion.div
//         className="flex space-x-4"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1, duration: 0.5 }}
//       >
//         <Link
//           href="/exploar"
//           className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition"
//         >
//           Explore Events
//         </Link>
//         <Link
//           href="/create"
//           className="bg-indigo-800 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-900 transition"
//         >
//           Create Event
//         </Link>
//       </motion.div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCalendarAlt, FaTicketAlt, FaUsers } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section
        className="w-full h-screen text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/15865085/pexels-photo-15865085/free-photo-of-crowd-wiith-hands-raised-on-concert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')", // Replace with your image URL
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center px-6">
          {/* Animated Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Elevate Your Events 🚀
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-2xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Manage, sell tickets, and track attendees with ease.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex space-x-6 md:space-x-12 mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link
              href="/explore"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              Explore Events
            </Link>
            <Link
              href="/create"
              className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-900 transition"
            >
              Create Event
            </Link>
          </motion.div>
        </div>
      </section>

      {/* New Section with Icons and Animations */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Why Choose Us?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Feature 1 - Tickets */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500 ease-in-out"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <div className="text-indigo-600 text-4xl mb-4">
                {/* Icon for Tickets */}
                <FaTicketAlt />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Sell Tickets</h3>
              <p className="text-gray-600 mt-2">
                Easily sell event tickets and manage your revenue with ease.
              </p>
            </motion.div>

            {/* Feature 2 - Calendar */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500 ease-in-out"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <div className="text-indigo-600 text-4xl mb-4">
                {/* Icon for Calendar */}
                <FaCalendarAlt />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Event Calendar</h3>
              <p className="text-gray-600 mt-2">
                Keep track of your events with our powerful calendar tool.
              </p>
            </motion.div>

            {/* Feature 3 - Attendees */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500 ease-in-out"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div className="text-indigo-600 text-4xl mb-4">
                {/* Icon for Users */}
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Track Attendees</h3>
              <p className="text-gray-600 mt-2">
                Easily manage and track your event attendees in real time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
