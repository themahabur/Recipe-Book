import React from "react";

const FaqSection = () => {
  return (
    <div className="flex flex-col space-y-8 py-20 px-4 md:px-20 lg:px-40">
      <h1 className="text-2xl font-bold">Frequently Asked Questions (FAQ)</h1>
      <div className="flex flex-col gap-2  w-full">
        <div className="collapse collapse-arrow bg-base-100 border border-gray-100">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            What is Recipe Book?
          </div>
          <div className="collapse-content text-sm">
           The Recipe Book is a platform to discover, add, and manage your favorite recipes online.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-gray-100">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
           Do I need to log in to use the app?
          </div>
          <div className="collapse-content text-sm">
            You can browse recipes without logging in, but to add, like, or save recipes, you need to log in.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-gray-100">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
           How do I add a new recipe?
          </div>
          <div className="collapse-content text-sm">
           Go to the “Add Recipe” page after logging in, fill out the form, and submit your recipe.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-gray-100">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
           Can I see only my own recipes?
          </div>
          <div className="collapse-content text-sm">
           Yes, under the “My Recipes” page, you can view, edit, or delete your own recipes.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-gray-100">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
           Is this app mobile and desktop friendly?
          </div>
          <div className="collapse-content text-sm">
           Yes, the app works perfectly on both mobile and desktop devices.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
