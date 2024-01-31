import React from "react";
import "./TrendCard.css";
import { TrendData } from "../../../Data/TrendData.js";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span>
              <b>#{trend.name}</b>
            </span>
            <span>{trend.shares}K Shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
