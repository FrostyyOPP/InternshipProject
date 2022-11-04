import React from "react";
import "./article.css";

export const Article = ({ articleHead, articleBody }) => {
  return (
    <div className="sec">
      <h1 className="sec-head">{articleHead}</h1>
      <p className="sec-body">{articleBody}</p>
    </div>
  );
};
