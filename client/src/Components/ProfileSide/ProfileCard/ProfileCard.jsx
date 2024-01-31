import React from "react";
import "./ProfileCard.css";
import cover from "../../../img/cover.jpg";
import profile from "../../../img/profileImg.jpg";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={cover} alt="cover" />
        <img src={profile} alt="profileImg" />
      </div>

      <div className="ProfileName">
        <span>J K Gupta</span>
        <span>Senior Engineer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
