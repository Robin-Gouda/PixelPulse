import React, { useEffect, useState } from "react";
import "./FollowerCard.css";
import { Followers } from "../../../Data/FollowersData";
import Users from "../../User/Users";

const FollowerCard = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    const fetchPersons = async () => {};
  }, []);
  return (
    <div className="FollowersCard">
      <h3>People you Would like to know</h3>
      {Followers.map((person, id) => {
        return <Users person={person} key={id} />;
      })}
    </div>
  );
};

export default FollowerCard;
