import { AuthContext } from "../provider/AuthProvider";
import { Fade } from "react-awesome-reveal";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import chefBro from "../assets/Chef-bro.svg";
import CookingPana from "../assets/Cooking-pana.svg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      className="w-full "
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-lg ">
        <div className="md:w-1/2 flex flex-col items-start  gap-4  p-8 rounded-lg">
          <h3 className="text-3xl font-bold">Delicious Recipes Just For You</h3>
          <p className="text-lg">
            Explore a variety of mouth-watering recipes curated just for you.
          </p>
          <Link to="/allRecipes">
            <button className="py-2 px-4 bg-yellow-100 rounded-lg cursor-pointer hover:bg-yellow-200 font-medium text-yellow-600">
              Explore Recipes
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <img src={chefBro} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-lg">
        <div className="md:w-1/2 flex flex-col items-start  gap-4  p-8 rounded-lg">
          <h3 className="text-3xl font-bold">Cook Like a Pro</h3>
          <p className="text-lg">
            Master the art of cooking with our expert tips and tricks.
          </p>
          <Link to="/allRecipes">
            <button className="py-2 px-4 bg-yellow-100 rounded-lg cursor-pointer hover:bg-yellow-200 font-medium text-yellow-600">
              Explore Recipes
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <img src={CookingPana} alt="" />
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
