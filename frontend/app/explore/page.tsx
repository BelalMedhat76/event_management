"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

interface Event {
  _id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export default function ExploreEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-8 flex items-center w-full max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search for events..."
            className="w-full py-3 pl-10 pr-4 text-gray-700 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="absolute left-3 text-gray-500 text-xl animate-pulse" />
        </div>

        {/* Events Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <motion.div 
                key={event._id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={event.image || "/fallback-image.jpg"}
                  alt={event.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">{event.title}</h2>
                  <p className="text-gray-600">{event.date} | {event.location}</p>
                  <p className="mt-2 text-gray-700 line-clamp-2">{event.description}</p>
                  <Link href={`/events/${event._id}`} className="mt-4 inline-block text-indigo-600 font-semibold hover:underline">
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No events found.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
