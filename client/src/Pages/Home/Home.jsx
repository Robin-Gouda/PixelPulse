import React from "react";
import "./home.css";
import ProfileSide from "../../Components/ProfileSide/ProfileSide";
import PostSide from "../../Components/PostSide/PostSide";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <p>C</p>
    </div>
  );
};

export default Home;
