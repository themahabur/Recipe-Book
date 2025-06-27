import React from "react";
import TopRecipesCard from "./TopRecipesCard";
import { Link } from "react-router";

const TopRecipes = ({ topRecipes }) => {

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-3xl font-bold">Trending Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
            topRecipes.map(recipe=> <TopRecipesCard key={recipe._id} recipe={recipe}></TopRecipesCard>)
        }

      </div>
      <div className="flex justify-center items-center">
        <Link to={"/allRecipes"}>
          <button className="py-2 px-3 bg-yellow-100 rounded-lg cursor-pointer hover:bg-yellow-200 font-medium text-yellow-600">
            View All Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopRecipes;
