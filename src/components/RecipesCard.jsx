import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router"; // make sure you use 'react-router-dom' instead of 'react-router'

const RecipesCard = ({ recipe }) => {
  return (
    <div className="flex flex-col gap-4 p-6 border border-gray-200 rounded-lg  transition-all duration-300 hover:shadow-xl hover:scale-105 ">
      <img
        className="rounded-lg w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
        src={recipe?.photoURL}
        alt={recipe?.title}
      />
      
      <h1 className="text-2xl font-semibold  mt-4">{recipe?.title}</h1>
      <h3 className="text-lg font-medium ">{recipe?.cuisineType}</h3>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-3 ">
          <AiFillLike size={24} className="text-blue-500" />
          <p className="text-lg font-semibold">{recipe?.likes}</p>
        </div>

        <Link to={`/viewRecipe/${recipe?._id}`}>
          <button className="py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300 font-semibold ">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipesCard;
