import React from "react";
import logo from "./logo.png";
import { Navbar } from "../Navbar/Navbar";
import { AiOutlineUser } from "react-icons/ai";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="login">
        <a href="/login">
          <button className="btn login-btn">
            <AiOutlineUser />
            Login
          </button>
        </a>
      </div>
    </header>
  );
};
