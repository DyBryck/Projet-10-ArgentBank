import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/argentBankLogo.webp";
import "../../styles/main.css";

const Header = () => {
  const isSignIn = localStorage.getItem("token");

  const signOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="ArgentBank logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isSignIn ? (
            <>
              <Link
                to={"/user"}
                className="main-nav-item"
                href="./sign-in.html"
              >
                <i className="fa fa-user-circle"></i> User Name
              </Link>
              <button className="main-nav-item" onClick={signOut}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to={"/sign-in"}
              className="main-nav-item"
              href="./sign-in.html"
            >
              <i className="fa fa-user-circle"></i> Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
