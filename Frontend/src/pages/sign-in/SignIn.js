import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import circleArrowRight from "../../images/circle-arrow-right.svg";
import { loginUser } from "../../redux/actions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleCheck = () => {
    setChecked((prevState) => !prevState);
  };

  const logInUser = (e) => {
    e.preventDefault();
    const body = { email, password };
    loginUser(body, checked, navigate, dispatch);
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={logInUser}>
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
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
      <div className="register-section">
        <p>Not registered yet?</p>
        <Link to={"/sign-up"} className="sign-up-link">
          <img src={circleArrowRight} alt="" />
          Join us
        </Link>
      </div>
    </section>
  );
};

export default SignIn;
