import React from "react";
import {
  FaInfoCircle,
  FaUsers,
  FaUtensils,
  FaCloudUploadAlt,
  FaHeart,
  FaLightbulb,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-6 min-h-screen">
      {/* Title */}
      <div className="flex items-center gap-3">
        <FaInfoCircle className="text-yellow-600 text-3xl" />
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
      </div>

      {/* Introduction */}
      <p className="text-gray-700 text-sm leading-relaxed">
        <strong className="text-yellow-700">Recipe Book</strong> is a community-driven platform where food lovers
        from around the world come together to share, explore, and celebrate recipes. Founded in 2023 by passionate cooks, our mission is to make cooking simple, joyful, and inspiring for everyone.
      </p>

      {/* Our Journey */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">📖 Our Journey</h3>
        <p className="text-gray-600 text-sm">
          What started as a small blog turned into a vibrant community of recipe creators. We believe everyone has a dish worth sharing, and our platform gives a space for home cooks, chefs, and foodies to express their creativity.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 border">
          <h4 className="text-md font-bold text-yellow-600">🎯 Our Mission</h4>
          <p className="text-sm text-gray-700">
            To empower people to cook better meals by providing access to high-quality, easy-to-follow recipes.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 border">
          <h4 className="text-md font-bold text-yellow-600">🚀 Our Vision</h4>
          <p className="text-sm text-gray-700">
            To become the world’s most loved recipe-sharing platform, uniting cultures through the language of food.
          </p>
        </div>
      </div>

      {/* Features List */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">✨ Key Features</h3>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <FaUsers className="text-blue-500 mt-1" />
            Community-powered recipe sharing and feedback
          </li>
          <li className="flex items-start gap-2">
            <FaUtensils className="text-green-500 mt-1" />
            Step-by-step cooking instructions
          </li>
          <li className="flex items-start gap-2">
            <FaCloudUploadAlt className="text-purple-500 mt-1" />
            Upload your own recipes with photos
          </li>
          <li className="flex items-start gap-2">
            <FaHeart className="text-red-500 mt-1" />
            Favorite & save recipes for later
          </li>
          <li className="flex items-start gap-2">
            <FaLightbulb className="text-yellow-500 mt-1" />
            Discover daily cooking inspirations
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
