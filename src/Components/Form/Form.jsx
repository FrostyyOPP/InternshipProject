import React, { useState } from "react";
import "./form.css";
export const Form = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const handle = () => {
    localStorage.setItem("userID", userID);
    localStorage.setItem("password", password);
  };
  const remove = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("password");
  };
  return (
    <div>
      <div className="form-content">
        <div className="form-control">
          <label htmlFor="userID">UserID</label> <br />
          <input
            type="email"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            id="userID"
            className="user-input"
            placeholder="example@mail.com"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="password-input"
            placeholder="password"
          />
        </div>
      </div>
      <div className="btn">
        <button className="logged-btn btn" type="submit" onClick={handle}>
          Login
        </button>
      </div>
    </div>
  );
};
