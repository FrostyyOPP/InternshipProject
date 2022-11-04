import React from "react";
import { Article } from "../../Components/Article/Article";
import { Box } from "../../Components/Box/Box";
import "./journey.css";
export const Journey = () => {
  return (
    <>
      <div className="section-2">
        <div className="sec-design">
          <div className="box-1">
            <Box boxCount={"50K"} plus={"+"} boxBody={"Mobile Downloads"} />
            <Box boxCount={"80K"} plus={"+"} boxBody={"Happy Learners"} />
          </div>
          <div className="box-2">
            <Box boxCount={"53K"} plus={"+"} boxBody={"Sessions per month"} />
            <Box
              boxCount={"200"}
              plus={"+"}
              boxBody={"Speakers around the globe"}
            />
          </div>
        </div>
        <div className="sec-2">
          <span className="span">Book a trial</span>
          <Article
            articleHead={"Start your English speaking journey today!"}
            articleBody={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque praesent vitae sit sagittis venenatis."
            }
          />
          <button className="btn book-btn">Book a trial</button>
        </div>
      </div>
    </>
  );
};
