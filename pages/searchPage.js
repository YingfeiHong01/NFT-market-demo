import React, { useEffect, useState, useContext } from "react";

//INTRNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { Slider, Brand } from "../components/componentsindex";
import { SearchBar } from "../searchPage/searchPageIndex";
import { Filter } from "../components/componentsindex";

import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../img";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const searchPage = () => {
  const { fetchNFTs} = useContext( NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    try {
      fetchNFTs().then((items) => {
        setNfts(items);
        setNftsCopy(items);
        console.log(nfts)
      });
    } catch (error) {
      console.log("error");
    }
  }, []);

    const collectionArray = [
        {
          image: images.nft_image_1,
        },
        {
          image: images.nft_image_2,
        },
        {
          image: images.nft_image_3,
        },
        {
          image: images.nft_image_1,
        },
        {
          image: images.nft_image_2,
        },
        {
          image: images.nft_image_3,
        },
        {
          image: images.nft_image_1,
        },
        {
          image: images.nft_image_2,
        },
    ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar/> 
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  )
}

export default searchPage