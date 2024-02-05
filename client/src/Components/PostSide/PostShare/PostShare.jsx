import React from "react";
import { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImage from "../../../img/profileImg.jpg";
import {
  UilSchedule,
  UilScenery,
  UilLocationPoint,
  UilPlayCircle,
  UilTimes,
} from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../../Action/uploadAction";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const desc = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      console.log(newPost);
      try {
        dispatch(uploadImage(data)); //action to upload image
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="profile_Image" />
      <div>
        <input ref={desc} required type="text" placeholder="What's happening" />
        <div className="postOptions" style={{ color: "var(--photo)" }}>
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Schedule
          </div>

          <button className="button ps-button" onClick={handleSubmit}>
            Share
          </button>

          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="Loading..." />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
