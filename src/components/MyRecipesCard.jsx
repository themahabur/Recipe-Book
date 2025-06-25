import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyRecipesCard = ({ recipe, setRecipes, recipes,handleOpen }) => {


  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete this!",
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
              Swal.fire({
                title: "Deleted!",
                text: "Your Recipe has been deleted.",
                icon: "success",
              });

              const remaining = recipes.filter((r) => r._id !== recipe._id);
              setRecipes(remaining);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          });
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 p-4 border-2 border-gray-100 rounded-lg">
      <img className="rounded-lg md:w-100 md:h-60 h-60" src={recipe?.photoURL} alt="" />

      <div className="flex flex-col gap-2 p-4 space-y-2">
        <h1 className="text-2xl font-medium">{recipe?.title}</h1>
        <h3 className="text-lg ">Cuisine {recipe?.cuisineType}</h3>
        <div>
          <p className="text-lg font-medium">Ingredients</p>
          <p className="text-lg">{recipe?.ingredients}</p>
        </div>
        <div>
          <p className="text-lg font-medium">Instructions</p>
          <p className="text-lg">{recipe?.instructions}</p>
        </div>
        <h1 className="text-lg ">
          <span className="font-medium">Preparation Time</span>{" "}
          {recipe?.preparationTime}
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <AiFillLike size={20} />
            <p className="text-lg font-medium">{recipe?.likes}</p>
          </div>
          <div>
            <Link to={`/viewRecipe/${recipe?._id}`}>
              <button className="py-2 px-3 bg-green-100 rounded-lg cursor-pointer hover:bg-green-200 font-medium text-green-600">
                View Recipe
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 gap-4">
        <div
          onClick={handleDelete}
          className="p-2 bg-red-100 rounded-full cursor-pointer"
        >
          <MdDelete className="text-red-700" size={24} />
        </div>
      
          <div onClick={()=>handleOpen(recipe)} className="p-2 bg-green-100 rounded-full cursor-pointer">
            <MdEdit className="text-green-700" size={24} />
          </div>
        
      </div>
    </div>
  );
};

export default MyRecipesCard;
