import React from "react";
import Logo from "../../img/logo.png";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="Auth">
      {/* Left side of the page */}
      <div className="a-left">
        <img src={Logo} alt="logo" />
        <div className="Webname">
          <h1> Ken Media</h1>
          <h6>Explore the culture with everyone </h6>
        </div>
      </div>
      <SignUp />
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            className="infoInput"
            placeholder="User Name"
            name="usernames"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmpass"
          />
        </div>
        <div>
          <span>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Auth;
