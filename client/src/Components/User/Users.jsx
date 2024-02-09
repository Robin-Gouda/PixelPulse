import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../../Action/UserAction";

const Users = ({ person }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleFollow = () => {
    dispatch(unFollowUser(person._id, user));
  };
  return (
    <div className="follower">
      <div>
        <img
          src={
            person.coverPicture
              ? serverPublic + person.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt=""
          className="followersImg"
        />
        <div className="name">
          <span>{person.firstname}</span>
          <span>{person.username}</span>
        </div>
      </div>
      <button className="button fc-button" onClick={handleFollow}>
        Follow
      </button>
    </div>
  );
};

export default Users;
