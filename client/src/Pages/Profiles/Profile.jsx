import React from "react";
import "./Profile.css";
import ProfileCard from "../../Components/ProfileSide/ProfileCard/ProfileCard.jsx";
import ProfileLeft from "../../Components/ProfilePage/ProfileLeft/ProfileLeft.jsx";
import PostSide from "../../Components/PostSide/PostSide.jsx";
import RightSide from "../../Components/RightSide/RightSide.jsx";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />

      <div className="Profile-center ">
        <ProfileCard location={"profilePage"} />
        <PostSide />
      </div>

      <RightSide />
    </div>
  );
};

export default Profile;
