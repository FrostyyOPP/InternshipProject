import React from "react";
import "./card.css";

export const Card = ({ img, bodyHead, bodyContent }) => {
  return (
    <div className="card">
      <img className="card-img" src={img} alt="" />
      <div className="card-body">
        <p className="body-head">{bodyHead}</p>
        <p className="body-content">{bodyContent}</p>
      </div>
    </div>
  );
};
