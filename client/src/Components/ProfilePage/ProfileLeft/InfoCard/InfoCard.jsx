import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
// import ProfileModal from "./ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          {/* <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          /> */}
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>In Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Live's in </b>
        </span>
        <span>Piyong Yang</span>
      </div>
      <div className="info">
        <span>
          <b>Work's At </b>
        </span>
        <span>TSMC</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
