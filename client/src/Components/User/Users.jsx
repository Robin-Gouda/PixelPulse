import React from "react";

const Users = ({ person }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
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
      <button className="button fc-button">Follow</button>
    </div>
  );
};

export default Users;
