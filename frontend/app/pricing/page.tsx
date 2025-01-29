"use client"
import { useState } from "react";

export default function Pricing() {
  // Optional: You can add state here for interactivity (e.g., toggle monthly/yearly pricing)
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      title: "Basic Plan",
      priceMonthly: "$10",
      priceYearly: "$100",
      features: [
        "1 Event per Month",
        "Basic Support",
        "Event Management Dashboard",
        "Email Notifications",
      ],
    },
    {
      title: "Pro Plan",
      priceMonthly: "$30",
      priceYearly: "$300",
      features: [
        "5 Events per Month",
        "Priority Support",
        "Advanced Reporting",
        "Custom Branding",
        "SMS Notifications",
      ],
    },
    {
      title: "Enterprise Plan",
      priceMonthly: "$50",
      priceYearly: "$500",
      features: [
        "Unlimited Events",
        "24/7 Support",
        "Custom Integrations",
        "Dedicated Account Manager",
        "Event Analytics",
      ],
    },
  ];

  return (
    <section className="px-6 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Event Management Pricing</h2>
        <p className="text-xl text-gray-600 mb-12">
          Choose the right plan for your event management needs.
        </p>

        {/* Toggle between monthly and yearly pricing */}
        <div className="mb-12">
          <button
            className={`px-4 py-2 font-semibold ${!isYearly ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"} rounded-md mr-4`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 font-semibold ${isYearly ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"} rounded-md`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 relative h-[370px]  red-lg shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800">{plan.title}</h3>
              <div className="flex items-baseline justify-center mt-4">
                <span className="text-4xl font-bold text-indigo-600">
                  {isYearly ? plan.priceYearly : plan.priceMonthly}
                </span>
                <span className="ml-2 text-lg text-gray-500">/ {isYearly ? "Year" : "Month"}</span>
              </div>
              <ul className="mt-6 space-y-2 text-gray-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-indigo-600 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[250px] py-2 mt-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                Sign Up
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
