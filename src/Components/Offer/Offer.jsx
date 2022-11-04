import React from "react";
import { Card } from "../Card/Card";
import card1 from "../imgs/card1.png";
import card2 from "../imgs/card2.png";
import card3 from "../imgs/card3.png";
import "./offer.css";

export const Offer = () => {
  return (
    <div>
      <h1 className="offer-head">What we offer ?</h1>
      <div className="cards">
        <Card
          img={card1}
          bodyHead={"Customised Curriculum"}
          bodyContent={
            "Customised sessions and module for Basic, Intermediate and Advanced learners."
          }
        />
        <Card
          img={card2}
          bodyHead={"Experimental Learning "}
          bodyContent={"Do not study English, rather consume and use it."}
        />
        <Card
          img={card3}
          bodyHead={"Shadowing Method"}
          bodyContent={
            "Think and speak in English rather than translating it from mother tongue."
          }
        />
      </div>
    </div>
  );
};
