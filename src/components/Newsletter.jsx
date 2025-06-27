import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col justify-center items-center border-2 gap-2 border-gray-100 rounded-lg p-8 m-4">
      <h1 className="text-3xl font-bold">Let's Stay In Touch!</h1>
      <p className="text-xl text-center">
        Join our newsletter, so that we reach out to you with our latest recipes
      </p>
      <div className="flex justify-center items-center flex-col">
        <input
          type="email"
          placeholder="Enter your email"
          className="border-2 border-gray-300 rounded-lg p-2 m-2"
        />
        <button className="bg-yellow-600 text-white py-2 px-4 rounded-lg m-2">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
