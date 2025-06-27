import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyRecipesCard from "../components/MyRecipesCard";
import { Link } from "react-router"; // ✅ Fixed import
import UpdateRecipe from "./UpdateRecipe";

const MyRecipes = () => {
  const { userData } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userData?.email) return;
    setLoading(true);

    fetch("https://recipe-server-three.vercel.app/myRecipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userData.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [userData?.email]);

  const handleOpen = (recipeData) => {
    setNewRecipe(recipeData);
    setOpen(true);
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">👨‍🍳 My Recipes</h1>
        <Link to="/add-recipe">
          <button className="mt-4 md:mt-0 py-2 px-4 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition">
            ➕ Add Recipe
          </button>
        </Link>
      </div>

      {/* Recipe Cards or Loading */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-yellow-500"></div>
        </div>
      ) : recipes.length === 0 ? (
        <div className="text-center text-gray-500 mt-8">
          <p>No recipes found.</p>
          <Link to="/add-recipe" className="text-yellow-600 underline hover:text-yellow-800">
            Add your first recipe
          </Link>
        </div>
      ) : (
       <div className="grid grid-cols-1 gap-6">
  {recipes.map((recipe) => (
    <MyRecipesCard
      key={recipe._id}
      recipe={recipe}
      recipes={recipes}
      setRecipes={setRecipes}
      handleOpen={handleOpen}
    />
  ))}
</div>

      )}

      {/* Update Modal */}
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-xl mb-4">✏️ Update Recipe</h3>
          <div className="modal-action flex flex-col">
            {open && newRecipe && (
              <UpdateRecipe
                myRecipe={newRecipe}
                recipes={recipes}
                setRecipes={setRecipes}
              />
            )}
          </div>

        </div>
      </dialog>
    </div>
  );
};

export default MyRecipes;
