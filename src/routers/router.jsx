import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllRecipes from "../pages/AllRecipes";
import AddRecipe from "../pages/AddRecipe";
import MyRecipes from "../pages/MyRecipes";
import ProtectedRoute from "../provider/ProtectedRoute";
import ErrorPages from "../pages/ErrorPages";
import LoadingPage from "../pages/LoadingPage";
import UpdateRecipe from "../pages/UpdateRecipe";
import ViewRecipe from "../pages/ViewRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("https://recipe-server-three.vercel.app/topRecipes"),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/allRecipes",
        loader: () => fetch("https://recipe-server-three.vercel.app/recipes"),
        element: (
          <ProtectedRoute>
            <AllRecipes></AllRecipes>
          </ProtectedRoute>
        ),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/addRecipe",
        element: (
          <ProtectedRoute>
            <AddRecipe></AddRecipe>
          </ProtectedRoute>
        ),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/myRecipes",
        element: (
          <ProtectedRoute>
            <MyRecipes></MyRecipes>
          </ProtectedRoute>
        ),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/updateRecipe/:id",
        loader: ({ params }) =>
          fetch(`https://recipe-server-three.vercel.app/myRecipes/${params.id}`),
        element: (
          <ProtectedRoute>
            <UpdateRecipe></UpdateRecipe>
          </ProtectedRoute>
        ),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/viewRecipe/:id",
        loader: ({ params }) =>
          fetch(`https://recipe-server-three.vercel.app/viewRecipe/${params.id}`),
        element: (
          <ProtectedRoute>
            <ViewRecipe></ViewRecipe>
          </ProtectedRoute>
        ),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPages></ErrorPages>,
  },
]);

export default router;
