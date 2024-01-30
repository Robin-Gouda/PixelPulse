import React from "react";
import ProfileImage from "../../../img/profileImg.jpg";
import "./PostShare.css";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaRegCirclePlay } from "react-icons/fa6";
import { UilSchedule, UilScenery } from "@iconscout/react-unicons";
import { UilLocationPoint, UilPlayCircle } from "@iconscout/react-unicons";

const PostShare = () => {
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="profile Image" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div className="option">
            {/* <HiOutlinePhotograph /> */}
            <UilScenery />
            Photo
          </div>
          <div className="option">
            <UilPlayCircle />
            Video
          </div>
          <div className="option">
            {/* <IoLocationOutline /> */}
            <UilLocationPoint />
            Location
          </div>
          <div className="option">
            {/* <SlCalender /> */}
            <UilSchedule />
            Schedule
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostShare;
