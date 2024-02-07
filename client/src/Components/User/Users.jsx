import React from "react";

const Users = ({ person }) => {
  return (
    <div className="follower">
      <div>
        <img src={person.img} alt="" className="followersImg" />
        <div className="name">
          <span>{person.name}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button className="button fc-button">Follow</button>
    </div>
  );
};

export default Users;
