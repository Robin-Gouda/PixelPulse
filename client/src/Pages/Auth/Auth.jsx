import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../img/logo.png";
import "./Auth.css";
import { login, signUp } from "../../Action/AuthAction.js";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(!false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  console.log(loading);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });
  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(login(data));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  };

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
      {/* Right side of the page  */}
      <div className="a-right">
        <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />

              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              className="infoInput"
              placeholder="User Name"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              display: confirmPass ? "none" : "block",
              fontSize: "15px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
            className={confirmPass ? "" : "active"}
          >
            *Password provided didn't match
          </span>

          <div>
            <span
              style={{ fontSize: "18px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Create an account "}
            </span>
          </div>
          <button
            className="button infoButton"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
