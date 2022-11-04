import React from "react";
import { Article } from "../../Components/Article/Article";
import "./speaking.css";

export const Speaking = () => {
  return (
    <>
      <div className="section-1">
        <div className="sec-1">
          <Article
            articleHead={`Hone your english speaking skills over one-on-one video call`}
            articleBody={
              "Practice english conversation with excellent communuicators across the country and speak like a PRO 😎."
            }
          />
          <div className="sec-btn">
            <button className="btn book-btn">Book a trial</button>
            <button className="btn download-btn">Download our app</button>
          </div>
        </div>
        <div className="sec-box"></div>
      </div>
    </>
  );
};
