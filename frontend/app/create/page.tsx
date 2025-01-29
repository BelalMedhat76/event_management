/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Hook for navigation after form submission

export default function CreateEventForm() {
  const router = useRouter(); // Initialize useRouter for navigation

  // State to store event input data
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    image: "",
  });

  const [error, setError] = useState(""); // To track any errors during submission
  const [loading, setLoading] = useState(false); // To track loading state during submission

  // Handle input change and update state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(""); // Reset error on each submit attempt

    // POST request to your backend
    try {
      const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        // Navigate to a success page or the event list after successful creation
        router.push("/"); // Redirect to the events list (or wherever you want)
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to create event");
      }
    } catch (err) {
      setError("Error creating event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Create New Event</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">Event Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">Event Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700">Event Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">Event Description</label>
            <textarea
              id="description"
              name="description"
              value={eventData.description}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              rows={2}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">Event Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={eventData.image}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-full mt-4 hover:bg-indigo-700 transition"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Event"}
          </button>
        </form>
      </div>
    </section>
  );
}









