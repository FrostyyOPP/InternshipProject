import React from "react";
import { Form } from "../../Components/Form/Form";
import logo from "./logo.png";
import "./login.css";

export const Login = () => {
  return (
    <>
      <div className="container">
        <div className="form-head">
          <img src={logo} alt="" className="login-logo" />
          <h1>Login with Your Account</h1>
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </>
  );
};
