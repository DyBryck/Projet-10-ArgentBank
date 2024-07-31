import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  const signUpUser = (e) => {
    e.preventDefault();

    if (!email || !password || !firstName || !lastName || !userName) {
      alert("Tous les champs doivent être remplis.");
      return;
    }

    const body = { email, password, firstName, lastName, userName };
    fetch("http://localhost:3001/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        alert("Successfully registered");
        window.location.href = "/sign-in";
      }
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
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          />
        </div>
        <button className="sign-in-button" type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignUp;
