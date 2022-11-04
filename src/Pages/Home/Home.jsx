import React from "react";
import { Card } from "../../Components/Card/Card";
import { Header } from "../../Components/Header/Header";
import { Journey } from "../../Components/Journey/Journey";
import { Offer } from "../../Components/Offer/Offer";

import { Speaking } from "../../Components/Speaking/Speaking";
import "./home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <Speaking />
      <Journey />
      <Offer />
    </>
  );
};
