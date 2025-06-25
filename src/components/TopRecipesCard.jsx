import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";

const TopRecipesCard = ({recipe}) => {
  return (
    <div className="flex flex-col gap-2 p-4 border-2 border-gray-100 rounded-lg ">
      <img
        className="rounded-lg"
        src={recipe?.photoURL}
        alt=""
      />
      <h1 className="text-2xl font-medium">
        {recipe?.title} 
      </h1>
      <h3 className="text-lg font-medium">{recipe?.cuisineType} Cuisine</h3>
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <AiFillLike size={20} />
          <p className="text-lg font-medium">{recipe?.likes}</p>
        </div>
        <div>
          <Link to={`/viewRecipe/${recipe?._id}`}>
            <button className="py-2 px-3 bg-green-100 rounded-lg cursor-pointer hover:bg-green-200 font-medium text-green-600">
              View Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopRecipesCard;
