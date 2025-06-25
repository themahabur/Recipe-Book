import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import RecipesCard from "../components/RecipesCard";

const AllRecipes = () => {
  const allRecipesData = useLoaderData();
  const [allRecipesNewData, setAllRecipesNewData] = useState(allRecipesData);
  const [selectedCuisine, setSelectedCuisine] = useState("");

  useEffect(() => {
    if (selectedCuisine) {
      const filteredData = allRecipesData.filter(
        (recipe) => recipe.cuisineType === selectedCuisine
      );
      setAllRecipesNewData(filteredData);
    } else {
      setAllRecipesNewData(allRecipesData);
    }
    
  }, [selectedCuisine]);

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">All Recipes</h1>
        <div>
          <select
            className="py-2 px-3 bg-green-100 rounded-lg cursor-pointer font-medium text-green-600"
            onChange={(e) => setSelectedCuisine(e.target.value)}
            value={selectedCuisine}
          >
            <option value="">All</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Chinese">Chinese</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {allRecipesNewData.map((recipe) => (
          <RecipesCard key={recipe._id} recipe={recipe}></RecipesCard>
        ))}
      </div>
      {allRecipesNewData.length < 1 && (
        <h1 className="text-2xl font-bold text-center">No recipes found</h1>
      )}
    </div>
  );
};

export default AllRecipes;
