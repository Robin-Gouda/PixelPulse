import React from "react";
import "../ProfileSide/ProfileSide.css";
import LogoSearch from "./LogoSearch/LogoSearch";
import ProfileCard from "./ProfileCard/ProfileCard";
import FollowerCard from "./FollowerCard/FollowerCard";

const ProfileSide = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard location="homepage" />
      <FollowerCard />
    </div>
  );
};

export default ProfileSide;
