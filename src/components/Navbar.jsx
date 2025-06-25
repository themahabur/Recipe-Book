import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { userData, logoutUser } = useContext(AuthContext);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        // Sign-out successful.
        navigate("/auth/login");
      })
      .catch(() => {
        // An error happened.
      });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="relative flex justify-between items-center border-2 border-gray-300 rounded-lg p-4 m-4 ">
      <div className="flex items-center justify-center">
        <h1 className="text-xl font-bold">
          RECIPE <span className="text-green-600">BOOK</span>
        </h1>
      </div>
      <div className="md:flex gap-4 justify-center items-center hidden">
        <Link className="cursor-pointer font-medium" to="/">
          Home
        </Link>
        <Link className="cursor-pointer font-medium" to="/allRecipes">
          All Recipes
        </Link>
        <Link className="cursor-pointer font-medium" to="/addRecipe">
          Add Recipe
        </Link>
        <Link className="cursor-pointer font-medium" to="/myRecipes">
          My Recipes
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {userData ? (
          <div className="flex gap-4 ">
            <div
              className="cursor-pointer rounded-full bg-blue-100"
              onMouseEnter={() => setShowProfileMenu(!showProfileMenu)}
            >
              <img
                src={userData?.photoURL}
                className="w-10 rounded-full"
                alt=""
              />
            </div>
          </div>
        ) : (
          <div className=" flex gap-4">
            <Link to="/auth/login">
              <button className="bg-green-200 text-green-800 rounded-3xl px-4 py-2 font-medium cursor-pointer">
                Login
              </button>
            </Link>
            <Link to="/auth/register">
              <button className="bg-green-200 hidden md:block text-green-800 rounded-3xl px-4 py-2 font-medium cursor-pointer">
                Register
              </button>
            </Link>
          </div>
        )}
        <div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              checked={theme === "dark"}
              onChange={handleThemeChange}
            />

            {/* sun icon */}
            {theme === "dark" ? (
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            ) : (
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            )}

            {/* moon icon */}
          </label>
        </div>
      </div>
      <div
        onMouseLeave={() => setShowProfileMenu(!showProfileMenu)}
        className={`absolute  p-1 z-1 flex rounded-lg flex-col gap-1 mx-auto right-0 top-20 w-full md:w-1/4 transition-transform duration-300  ${
          showProfileMenu ? "" : "hidden"
        }`}
      >
        <button className="bg-green-200 text-green-800 rounded-lg px-4 py-2 font-medium cursor-pointer">
          <Link to={`/`}>{userData?.displayName}</Link>
        </button>
        <button className="bg-green-200 text-green-800 rounded-lg px-4 py-2 font-medium cursor-pointer">
          <Link className="cursor-pointer font-medium" to="/allRecipes">
            All Recipes
          </Link>
        </button>
        <button className="bg-green-200 text-green-800 rounded-lg px-4 py-2 font-medium cursor-pointer">
          <Link className="cursor-pointer font-medium" to="/addRecipe">
            Add Recipe
          </Link>
        </button>
        <button className="bg-green-200 text-green-800 rounded-lg px-4 py-2 font-medium cursor-pointer">
          <Link className="cursor-pointer font-medium" to="/myRecipes">
            My Recipes
          </Link>
        </button>
        <button
          onClick={handleLogout}
          className="bg-green-200 text-green-800 rounded-lg px-4 py-2 font-medium cursor-pointer"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
