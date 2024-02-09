import React, { useEffect, useState } from "react";
import "./FollowerCard.css";
import { Followers } from "../../../Data/FollowersData";
import Users from "../../User/Users";
import { useSelector } from "react-redux";
import { getAllUser } from "../../../API/UserRequest";

const FollowerCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="FollowersCard">
      <h3>People you Would like to know</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <Users person={person} key={id} />;
        }
      })}
    </div>
  );
};

export default FollowerCard;
