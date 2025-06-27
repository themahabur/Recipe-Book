import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const AddRecipe = () => {
  const { userData } = useContext(AuthContext);
  const [selectCategory, setSelectCategory] = useState([]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectCategory([...selectCategory, value]);
    } else {
      setSelectCategory(selectCategory.filter((cat) => cat !== value));
    }
  };

  const handleAddRecipe = (event) => {
    event.preventDefault();
    const form = event.target;
    const recipeFormData = new FormData(form);
    const recipe = Object.fromEntries(recipeFormData.entries());
    const newRecipe = {
      ...recipe,
      likes: 0,
      categories: selectCategory,
      author: userData?.email,
    };

    fetch("https://recipe-server-three.vercel.app/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Recipe added successfully!");
          form.reset();
          setSelectCategory([]);
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Create New Recipe</h1>
      <form
        onSubmit={handleAddRecipe}
        className="grid gap-6 sm:grid-cols-2 bg-white shadow-md rounded-lg p-6"
      >
        <div className="col-span-full">
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            className="w-full p-2 border border-gray-200 rounded-md"
            type="text"
            name="title"
            placeholder="e.g., Spaghetti Carbonara"
            required
          />
        </div>

        <div className="col-span-full">
          <label className="block font-medium mb-1">Photo URL</label>
          <input
            className="w-full p-2 border border-gray-200 rounded-md"
            type="text"
            name="photoURL"
            placeholder="https://..."
            required
          />
        </div>

        <div className="col-span-full sm:col-span-1">
          <label className="block font-medium mb-1">Ingredients</label>
          <input
            className="w-full p-2 border border-gray-200 rounded-md"
            type="text"
            name="ingredients"
            placeholder="e.g., pasta, egg, cheese"
            required
          />
        </div>

        <div className="col-span-full sm:col-span-1">
          <label className="block font-medium mb-1">Preparation Time</label>
          <input
            className="w-full p-2 border border-gray-200 rounded-md"
            type="text"
            name="preparationTime"
            placeholder="e.g., 30 minutes"
            required
          />
        </div>

        <div className="col-span-full">
          <label className="block font-medium mb-1">Instructions</label>
          <textarea
            className="w-full p-2 border border-gray-200 rounded-md"
            name="instructions"
            rows="5"
            placeholder="Step-by-step instructions"
            required
          ></textarea>
        </div>

        <div className="col-span-full sm:col-span-1">
          <label className="block font-medium mb-1">Cuisine Type</label>
          <select
            name="cuisineType"
            className="w-full p-2 border border-gray-200 rounded-md"
            required
          >
            <option disabled selected>
              Select a cuisine
            </option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="col-span-full sm:col-span-1">
          <label className="block font-medium mb-1">Categories</label>
          <div className="flex flex-wrap gap-4">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((cat) => (
              <label key={cat} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={cat}
                  onChange={handleCategoryChange}
                  checked={selectCategory.includes(cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div className="col-span-full text-center">
          <button
            type="submit"
          className="py-2 px-3 bg-yellow-100 rounded-lg cursor-pointer hover:bg-yellow-200 font-medium text-yellow-600"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
