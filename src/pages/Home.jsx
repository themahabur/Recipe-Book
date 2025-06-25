import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import FaqSection from "../components/FaqSection";
import Newsletter from "../components/Newsletter";
import TopRecipes from "../components/TopRecipes";

const Home = () => {

  const topRecipes=useLoaderData()

  // console.log(topRecipes);

  return (
    <div >
      <div>
        <Banner></Banner>
      </div>
      <div>
        <TopRecipes topRecipes={topRecipes}></TopRecipes>
      </div>
      <div>
        <FaqSection></FaqSection>
      </div>
      <div>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
