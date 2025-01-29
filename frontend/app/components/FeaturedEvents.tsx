"use client";

import { useEffect, useState } from "react";
import EventCard from "./EventCard";

export default function FeaturedEvents() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [events, setEvents] = useState<any[]>([]);

  // Fetch events from the backend
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

  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Featured Events</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event._id} {...event} />
        ))}
      </div>
    </section>
  );
}
