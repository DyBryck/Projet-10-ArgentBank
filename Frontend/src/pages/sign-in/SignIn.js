import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/userSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleCheck = () => {
    setChecked((prevState) => !prevState);
  };

  const logInUser = (e) => {
    e.preventDefault();
    const body = { email, password };
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur lors de la connexion : " + res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        const token = data.body.token;
        if (!token) {
          throw new Error("Token manquant dans la réponse");
        }
        checked && localStorage.setItem("token", token);
        dispatch(login(email, password));
        navigate("/user");
      })
      .catch((error) => {
        console.error("Erreur lors de la tentative de connexion :", error);
        alert("Une erreur s'est produite lors de la tentative de connexion.");
      });
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={logInUser}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="username"
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
        <div className="input-remember">
          <input
            checked={checked}
            onChange={toggleCheck}
            type="checkbox"
            id="remember-me"
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit">
          Sign In
        </button>
      </form>
      <p>Not registered yet?</p>
      <Link to={"/sign-up"} className="sign-up-link">
        Join us
      </Link>
    </section>
  );
};

export default SignIn;
