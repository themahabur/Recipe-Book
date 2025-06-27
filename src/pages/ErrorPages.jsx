import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { Link } from "react-router";

const ErrorPages = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <div>
        <DotLottieReact
          src="https://lottie.host/3f92296f-33ea-4847-ae0c-063597943f98/AAEWyBMHug.lottie"
          loop
          autoplay
        />
      </div>
      <Link to={"/"}>
        <button className="py-2 px-3 bg-yellow-100 rounded-lg cursor-pointer hover:bg-yellow-200 font-medium text-yellow-600">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPages;
