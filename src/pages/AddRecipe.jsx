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
    const newRecipe = { ...recipe, likes: 0, categories: selectCategory, author: userData?.email };

    fetch("https://recipe-server-three.vercel.app/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Recipe added successfully");
          form.reset();
        }
      });
  };

  return (
    <div className="space-y-4 py-6 px-4">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold">Create new recipe</h1>
      </div>

      <div className="flex justify-center items-center">
        <form
          className="flex flex-col space-y-4 md:w-1/2"
          onSubmit={handleAddRecipe}
        >
          <label className="font-medium" for="title">
            Recipe Title
          </label>
          <input
            className="p-2 border-2 border-gray-200 rounded-lg"
            type="text"
            placeholder="Recipe Title"
            name="title"
          />
          <label className="font-medium" for="title">
            PhotoURL
          </label>
          <input
            className="p-2 border-2 border-gray-200 rounded-lg"
            type="text"
            name="photoURL"
            placeholder="PhotoURL"
          />
          <label className="font-medium" for="title">
            Ingredients
          </label>
          <input
            className="p-2 border-2 border-gray-200 rounded-lg"
            type="text"
            name="ingredients"
            placeholder="Ingredients"
          />
          <label className="font-medium" for="title">
            Instructions
          </label>

          <textarea
            name="instructions"
            className="p-2 border-2 border-gray-200 rounded-lg"
            id=""
            placeholder="Instructions"
            cols="20"
            rows="10"
          ></textarea>

          <label className="font-medium" for="title">
            Cuisine Type
          </label>
          <select
            name="cuisineType"
            className="p-2 font-medium border-2 border-gray-200 rounded-lg dark:!bg-gray-800"
          >
            <option value="Cuisine Type" disabled>
              Cuisine Type
            </option>
            <option className="font-medium" value="Italian">
              Italian
            </option>
            <option className="font-medium" value="Mexican">
              Mexican
            </option>
            <option className="font-medium" value="Indian">
              Indian
            </option>
            <option className="font-medium" value="Chinese">
              Chinese
            </option>
            <option className="font-medium" value="Others">
              Others
            </option>
          </select>
          <label className="font-medium" for="title">
            Preparation Time
          </label>
          <input
            className="p-2 border-2 border-gray-200 rounded-lg"
            type="text"
            name="preparationTime"
            placeholder="Preparation Time"
          />
          <label className="font-medium" for="title">
            Categories{" "}
          </label>
          <div className="flex gap-2 py-3 px-2">
            <input
              type="checkbox"
              id="breakfast"
              value="Breakfast"
              onChange={handleCategoryChange}
            />
            <label className="font-medium" for="breakfast">
              Breakfast
            </label>
            <input
              className="font-medium"
              type="checkbox"
              id="Lunch"
              value="Lunch"
              onChange={handleCategoryChange}
            />
            <label className="font-medium" for="Lunch">
              Lunch
            </label>
            <input
              className="font-medium"
              type="checkbox"
              id="Dinner"
              value="Dinner"
              onChange={handleCategoryChange}
            />
            <label className="font-medium" for="Dinner">
              Dinner
            </label>
            <input
              className="font-medium"
              type="checkbox"
              id="Dessert"
              value="Dessert"
              onChange={handleCategoryChange}
            />
            <label className="font-medium" for="Dessert">
              Dessert
            </label>
            <input
              className="font-medium"
              type="checkbox"
              id="Vegan"
              value="Vegan"
              onChange={handleCategoryChange}
            />
            <label className="font-medium" for="Vegan">
              Vegan
            </label>
          </div>
          <button
            type="submit"
            className="py-2 px-3 bg-green-100 rounded-lg cursor-pointer hover:bg-green-200 font-medium text-green-600"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
