import React from 'react';
import { useNavigate } from 'react-router';
import { FaPlusCircle, FaBookOpen } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 flex flex-col items-center p-6 rounded-lg my-8">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">🍽️ My Recipe Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        {/* Add Recipe Card */}
        <div
          onClick={() => navigate('/addRecipe')}
          className="cursor-pointer bg-white rounded-2xl border border-gray-200 p-6 flex items-center gap-4 hover:bg-blue-100 transition-all duration-300"
        >
          <FaPlusCircle className="text-4xl text-blue-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Add New Recipe</h2>
            <p className="text-sm text-gray-500">Create and share your own recipe</p>
          </div>
        </div>

        {/* My Recipe Card */}
        <div
          onClick={() => navigate('/myRecipes')}
          className="cursor-pointer bg-white rounded-2xl border border-gray-200 p-6 flex items-center gap-4 hover:bg-green-100 transition-all duration-300"
        >
          <FaBookOpen className="text-4xl text-green-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">My Recipes</h2>
            <p className="text-sm text-gray-500">View all your saved recipes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
