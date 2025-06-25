import React, { useContext, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const ViewRecipe = () => {
    const {userData} =useContext(AuthContext);
  const recipe = useLoaderData();


  const [likes, setLikes] = useState(recipe.likes);

  const handleLike = () => {
    setLikes(likes + 1);
    fetch(`https://recipe-server-three.vercel.app/recipe/${recipe._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + 1,
      }),
    })
      .then((res) => res.json())
      .then(() => {});
  };

  return (
    <div className="p-4 space-y-4">
      <div className="space-y-4">

        <div>
          <div className="bg-green-50 text-center p-3 rounded-lg">
            <h1 className="text-xl text-green-600"> "{likes} people interested in this recipe" </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-2xl rounded-lg" src={recipe.photoURL} alt="" />
          <h1 className="text-3xl font-medium">{recipe.title}</h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <h3 className="text-2xl font-medium">Ingredients</h3>
            <p className="text-lg">{recipe.ingredients}</p>
          </div>
          <div className={`flex justify-end items-center gap-2 w-1/2 p-4 ${userData?.email === recipe?.author  ? "hidden" : ""}`}>
            <h3 className="text-2xl font-medium">{likes}</h3>
            <button onClick={handleLike} className="cursor-pointer">
              <AiFillLike size={30} />
            </button>
          </div>
        </div>
        <h3 className="text-2xl font-medium">Instructions</h3>
        <p className="text-lg ">{recipe.instructions}</p>
        <h3 className="text-2xl font-medium">
          Cuisine Type: {recipe.cuisineType}
        </h3>
        <p className="text-lg font-medium">
          Preparation Time: {recipe.preparationTime}
        </p>
        <h3 className="text-2xl font-medium">Categories</h3>
        <div className="flex gap-2">
          {recipe.categories.map((category) => (
            <p key={category} className="text-lg font-medium">{category}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewRecipe;
