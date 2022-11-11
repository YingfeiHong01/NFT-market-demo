import React from 'react';

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {HeroSection, Service, NFTSlider, Subscribe, Title} from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}> 
      <HeroSection />
      <Service />
      <NFTSlider />
      <Title 
         heading = "Browse by category"
         paragraph = "Explore the NFTs in the most featured categories."
      />
      <Subscribe />

    </div>
  )
};

export default Home;