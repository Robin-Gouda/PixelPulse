import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Notification from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "./TrendCard/TrendCard";

const RightSide = () => {
  //   const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="Home Page" />
        <UilSetting />
        <img src={Notification} alt="Notifications" />
        <img src={Comment} alt="Comments" />
      </div>

      <TrendCard />

      <button className="button r-button">
        {/* onClick={() => setModalOpened(true)} */}
        Share
      </button>
    </div>
  );
};

export default RightSide;
