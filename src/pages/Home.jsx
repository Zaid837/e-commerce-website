import React from "react";
import HeroBox from "../components/home/heroBox/herobox.component";
import HomePage from "../components/home/homepage-component";
import FilterItems from "../components/filter-item/filterItem.component";

const Home = () => {
  return (
    <div>
      <HeroBox />
      <HomePage />
      <FilterItems />
    </div>
  );
};

export default Home;
