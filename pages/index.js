import React, { useState, useEffect, useContext } from "react";
//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {HeroSection, 
        Service, 
        NFTSlider, 
        Subscribe, 
        Title, 
        Category,
        Filter,
        NFTCard,
        Collection,
        AudioLive,
        FollowerTab,
        Slider,
        Brand,
        Video
    
      } from "../components/componentsindex";

//IMPORTING CONTRCT DATA
import { NFTMarketplaceContext } from '../Context/NFTMarketplaceContext';

const Home = () => {

   const { checkIfWalletConnected, currentAccount } = useContext(
      NFTMarketplaceContext
    );
    
    useEffect(() => {
      checkIfWalletConnected();
    }, []);


    

  return (
    <div className={Style.homePage}> 
      <HeroSection />
      <Service />
      <NFTSlider />
      <Title 
         heading = "Latest Audio Collection"
         paragraph = "Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />

      <FollowerTab />

      <Slider />

      <Title 
         heading = "Filter By Collection"
         paragraph = "Discover the most outstanding NFTs in all topics of life."
      />
      <Collection />

      <Title 
         heading = "Feature NFTs"
         paragraph = "Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <NFTCard/>
      <Title 
         heading = "Browse by category"
         paragraph = "Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />

    </div>
  )
};

export default Home;