import React, { useState } from "react";
import toast from "react-hot-toast";

const UpdateRecipe = ({ myRecipe,recipes,setRecipes }) => {

  const [selectCategory, setSelectCategory] = useState(myRecipe?.categories);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectCategory([...selectCategory, value]);
    } else {
      setSelectCategory(selectCategory.filter((cat) => cat !== value));
    }
  };

  const handleUpdateRecipe = (e) => {
    // e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const recipe = Object.fromEntries(formData.entries());
    const newRecipes = {
      ...recipe,
      categories: selectCategory,
      likes: myRecipe?.likes,
      author: myRecipe?.author,
    };

    fetch(`https://recipe-server-three.vercel.app/myRecipes/${myRecipe?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecipes),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Recipe updated successfully");
          // navigate("/myRecipes");
          form.reset();

          const updatedRecipes = recipes.map((rec) => {
            if (rec._id === myRecipe._id) {
              return newRecipes;
            }
            return rec;
          });
          setRecipes(updatedRecipes);

        }
      });
  };
  return (
    <form method="dialog" onSubmit={handleUpdateRecipe}>
      <div className="space-y-4 ">
        <div className="flex flex-col">
          <label className="font-medium" for="title">
            Recipe Title
          </label>
          <input
            className="p-2 border-2 border-gray-200 rounded-lg"
            type="text"
            defaultValue={myRecipe?.title}
            placeholder="Recipe Title"
            name="title"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" for="title">
            PhotoURL
          </label>
          <input
            className="p-2 border-2 border-gray-200 rounded-lg"
            type="text"
            defaultValue={myRecipe?.photoURL}
            name="photoURL"
            placeholder="PhotoURL"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" for="title">
            Ingredients
          </label>
          <input
            className="p-2 border-2 border-gray-200 rounded-lg"
            type="text"
            defaultValue={myRecipe?.ingredients}
            name="ingredients"
            placeholder="Ingredients"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium" for="title">
            Cuisine Type
          </label>
          <select
            name="cuisineType"
            defaultValue={myRecipe?.cuisineType}
            className="p-2 font-medium border-2 border-gray-200 rounded-lg"
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
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-medium" for="title">
            Preparation Time
          </label>
          <input
            className="p-2 border-2 border-gray-200 rounded-lg"
            type="text"
            defaultValue={myRecipe?.preparationTime}
            name="preparationTime"
            placeholder="Preparation Time"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" for="title">
            Categories{" "}
          </label>
          <div className="flex gap-2 py-3 px-2">
            <input
              type="checkbox"
              id="breakfast"
              checked={selectCategory?.includes("Breakfast")}
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
              checked={selectCategory?.includes("Lunch")}
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
              checked={selectCategory?.includes("Dinner")}
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
              checked={selectCategory?.includes("Dessert")}
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
              checked={selectCategory?.includes("Vegan")}
              onChange={handleCategoryChange}
            />
            <label className="font-medium" for="Vegan">
              Vegan
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-medium" for="title">
            Instructions
          </label>

          <textarea
            name="instructions"
            className="p-2 border-2 border-gray-200 rounded-lg"
            id=""
            defaultValue={myRecipe?.instructions}
            placeholder="Instructions"
            cols="20"
            rows="5"
          ></textarea>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="btn py-2 px-3 bg-green-100 rounded-lg cursor-pointer hover:bg-green-200 font-medium text-green-600"
          >
            Update Recipe
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateRecipe;
