import React, { useContext, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const ViewRecipe = () => {
  const { userData } = useContext(AuthContext);
  const recipe = useLoaderData();

  const [likes, setLikes] = useState(recipe.likes);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    fetch(`https://recipe-server-three.vercel.app/recipe/${recipe._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ likes: newLikes }),
    })
      .then((res) => res.json())
      .then(() => {});
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Like Banner */}
      <div className="bg-yellow-100 border border-yellow-300 text-center py-4 px-6 rounded-xl ">
        <h1 className="text-xl md:text-2xl font-semibold text-yellow-700">
          💚 {likes} people are interested in this recipe
        </h1>
      </div>

      {/* Recipe Image and Title */}
      <div className="flex flex-col items-center text-center space-y-4">
        <img
          className="w-full max-h-[400px] object-cover rounded-2xl shadow-md"
          src={recipe.photoURL}
          alt={recipe.title}
        />
        <h1 className="text-4xl font-bold ">{recipe.title}</h1>
      </div>

      {/* Ingredients and Like Button */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Ingredients */}
        <div className="md:w-1/2 space-y-2">
          <h3 className="text-2xl font-semibold ">🧂 Ingredients</h3>
          <p className="text-lg">{recipe.ingredients}</p>
        </div>

        {/* Like Section */}
        {userData?.email !== recipe?.author && (
          <div className="md:w-1/2 flex justify-end items-center gap-4 mt-4 md:mt-0">
            <h3 className="text-xl font-semibold ">{likes}</h3>
            <button
              onClick={handleLike}
              className="p-2 bg-green-200 rounded-full hover:bg-green-300 transition"
              title="Like this recipe"
            >
              <AiFillLike size={28} className="text-green-700" />
            </button>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold ">📋 Instructions</h3>
        <p className="text-lg">{recipe.instructions}</p>
      </div>

      {/* Cuisine Type and Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold ">🍽️ Cuisine Type</h3>
          <p className="text-lg ">{recipe.cuisineType}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold ">⏱️ Preparation Time</h3>
          <p className="text-lg ">{recipe.preparationTime}</p>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-2xl font-semibold ">🏷️ Categories</h3>
        <div className="flex flex-wrap gap-3 mt-2">
          {recipe.categories.map((category, idx) => (
            <span
              key={idx}
              className="bg-gray-200  text-sm font-medium px-3 py-1 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewRecipe;
