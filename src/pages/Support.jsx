import React from "react";
import { FaHeadset, FaQuestionCircle, FaClock, FaLifeRing } from "react-icons/fa";

const Support = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4 min-h-screen">
      <div className="flex items-center gap-3">
        <FaHeadset className="text-yellow-600 text-2xl" />
        <h2 className="text-2xl font-bold">Support Center</h2>
      </div>

      <p className="text-gray-700 text-sm">
        Need help? We’re here for you! Our support team is always ready to assist with your
        questions or issues.
      </p>

      <ul className="text-gray-600 text-sm space-y-2">
        <li className="flex items-center gap-2"><FaClock /> Available: 24/7 including weekends</li>
        <li className="flex items-center gap-2"><FaQuestionCircle /> FAQ: Visit our <a href="#" className="text-yellow-700 underline">Help Center</a></li>
        <li className="flex items-center gap-2"><FaLifeRing /> Live Chat: Chat with an agent in real-time</li>
      </ul>

      <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 text-sm">
        Start Live Chat
      </button>
    </div>
  );
};

export default Support;
