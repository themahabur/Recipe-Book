import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyRecipesCard from "../components/MyRecipesCard";
import {  Link } from "react-router";
import UpdateRecipe from "./UpdateRecipe";

const MyRecipes = () => {
  const { userData} = useContext(AuthContext);
  const [open, setOpen] = useState(false)

  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState([]);

  useEffect(() => {
    fetch("https://recipe-server-three.vercel.app/myRecipes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: userData?.email }),
      }).then((res) => res.json())
      .then((data) => {
        setRecipes(data)
      })
   
  }, [userData?.email]);

  const handleOpen = (newRecipedata) => {
    setOpen(true);
    setNewRecipe(newRecipedata);

    document.getElementById("my_modal_5").showModal();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold ">My Recipes</h1>
        <Link to={`/addRecipe`}>
          <button className="py-2 px-3 bg-green-100 rounded-lg  hover:bg-green-200 font-medium text-green-600">
            Add Recipe
          </button>
        </Link>
      </div>
      <div className="relative space-y-4 p-4">
        {recipes.map((recipe) => (
          <MyRecipesCard
            key={recipe._id}
            recipe={recipe}
            recipes={recipes}
            setRecipes={setRecipes}
            handleOpen={handleOpen}
          ></MyRecipesCard>
        ))}
      </div>
      <div>
        <dialog id="my_modal_5" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Update recipe</h3>
            <div className="modal-action flex flex-col  justify-center">
              {open && <UpdateRecipe myRecipe={newRecipe} recipes={recipes} setRecipes={setRecipes}></UpdateRecipe>}
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyRecipes;
