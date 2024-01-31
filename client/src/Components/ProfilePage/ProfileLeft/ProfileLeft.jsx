import React from "react";
import LogoSearch from "../../../Components/ProfileSide/LogoSearch/LogoSearch.jsx";
import FollowerCard from "../../../Components/ProfileSide/FollowerCard/FollowerCard.jsx";
import InfoCard from "./InfoCard/InfoCard";
import "../../ProfileSide/ProfileSide.css";

const ProfileLeft = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <InfoCard />
      <FollowerCard />
    </div>
  );
};

export default ProfileLeft;
