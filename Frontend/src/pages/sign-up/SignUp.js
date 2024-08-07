import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import circleArrowRight from "../../images/circle-arrow-right.svg";
import { loginUser } from "../../redux/actions";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUpUser = (e) => {
    e.preventDefault();

    const body = { email, password, firstName, lastName, userName };
    fetch("http://localhost:3001/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(
            "Erreur lors de la connexion : " + response.statusText
          );
        }
        const loginBody = { email, password };
        const loginChecked = false;
        alert("Successfully registered.");
        loginUser(loginBody, loginChecked, navigate, dispatch);
      })
      .catch((error) => {
        console.error("Erreur lors de la tentative de connexion :", error);
        alert("Une erreur s'est produite lors de la tentative de connexion.");
      });
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign Up</h1>
      <form onSubmit={signUpUser}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <button className="sign-in-button" type="submit">
          Sign Up
        </button>
      </form>
      <div className="register-section">
        <p>Already registered?</p>
        <Link to={"/sign-in"} className="sign-up-link">
          <img src={circleArrowRight} alt="" />
          Sign In
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
