import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/author.module.css";
import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex";
import { Brand, Title } from "../components/componentsindex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "../img";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "../authorProfilePage/componentsIndex";

const author = () => {

    const followerArray = [
        {
          background: images.creatorbackground1,
          user: images.user1,
        //   seller: "7d64gf748849j47fy488444",
        },
        {
          background: images.creatorbackground2,
          user: images.user2,
        //   seller: "7d64gf748849j47fy488444",
        },
        {
          background: images.creatorbackground3,
          user: images.user3,
        //   seller: "7d64gf748849j47fy488444",
        },
        {
          background: images.creatorbackground4,
          user: images.user4,
        //   seller: "7d64gf748849j47fy488444",
        },
        {
          background: images.creatorbackground5,
          user: images.user5,
        //   seller: "7d64gf748849j47fy488444",
        },
        {
          background: images.creatorbackground6,
          user: images.user6,
        //   seller: "7d64gf748849j47fy488444",
        },
      ];

    const [collectables, setCollectables] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);

  return (
   <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard  />
      <AuthorTaps
        setCollectiables={setCollectables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

      <AuthorNFTCardBox
        collectiables={collectables}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NTF music or audio
"
      />
      {/* <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} />
        ))}
      </div> */}

      <Brand />
    </div>
  );
  
}

export default author

