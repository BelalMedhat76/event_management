

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// EventCardProps interface defines the structure of props passed to the component
interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
  id: string;
}

export default function EventCard({ title, date, location, image, id }: EventCardProps) {
  const altImage = "Event image"; // Default alt text for fallback
  const fallbackImage = "/fallback-image.jpg"; // Fallback image path

  // Log the id to ensure it's passed correctly
  console.log("Event ID passed to EventCard:", id);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
      whileHover={{ scale: 1.05 }}
    >
      {/* Event Image with fallback if image is not available */}
      <Image
        src={image || fallbackImage}
        alt={image ? `${title} Event Image` : altImage} // Provide proper alt text
        width={1000} // Adjusted width for better resolution
        height={600} // Adjusted height for better resolution
        className="w-full h-48 object-cover"
      />

      {/* Event Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">{date} | {location}</p>

        {/* View Details Button with the correct id in the URL */}
        <Link
          href={`/events/${id}`} // Ensure the id is used correctly in the URL
          className="mt-4 inline-block text-indigo-600 font-semibold hover:underline"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}
