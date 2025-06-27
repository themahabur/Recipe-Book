import React from "react";
import { AiFillLike } from "react-icons/ai";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router"; // ✅ react-router-dom থেকে ইমপোর্ট
import Swal from "sweetalert2";

const MyRecipesCard = ({ recipe, setRecipes, recipes, handleOpen }) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://recipe-server-three.vercel.app/myRecipes/${recipe._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your recipe has been deleted.", "success");
              const remaining = recipes.filter((r) => r._id !== recipe._id);
              setRecipes(remaining);
            } else {
              Swal.fire("Oops...", "Something went wrong!", "error");
            }
          });
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-4 gap-4 ">
      {/* Image */}
      <div className="md:flex-shrink-0">
        <img
          src={recipe?.photoURL}
          alt={recipe?.title}
          className="w-full md:w-48 h-48 md:h-60 object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow space-y-3">
        <h2 className="text-2xl font-semibold   ">{recipe?.title}</h2>
        <p className="  font-medium">Cuisine: {recipe?.cuisineType}</p>

        <div>
          <h3 className="font-semibold   ">Ingredients</h3>
          <p className="  max-h-24 overflow-auto">{recipe?.ingredients}</p>
        </div>

        <div>
          <h3 className="font-semibold   ">Instructions</h3>
          <p className="  max-h-32 overflow-auto">{recipe?.instructions}</p>
        </div>

        <p className="   font-medium">
          Preparation Time: <span className="font-normal">{recipe?.preparationTime}</span>
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-blue-600 font-semibold">
            <AiFillLike size={22} />
            <span>{recipe?.likes || 0}</span>
          </div>

          <Link to={`/viewRecipe/${recipe?._id}`}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition">
              View Recipe
            </button>
          </Link>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col justify-between items-center space-y-4">
        <button
          onClick={handleDelete}
          className="p-2 bg-red-100 rounded-full hover:bg-red-200 transition"
          title="Delete Recipe"
        >
          <MdDelete className="text-red-700" size={28} />
        </button>

        <button
          onClick={() => handleOpen(recipe)}
          className="p-2 bg-yellow-100 rounded-full hover:bg-yellow-200 transition"
          title="Edit Recipe"
        >
          <MdEdit className="text-yellow-700" size={28} />
        </button>
      </div>
    </div>
  );
};

export default MyRecipesCard;
