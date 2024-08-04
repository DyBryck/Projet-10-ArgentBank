import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/argentBankLogo.webp";
import { logout } from "../../redux/userSlice";
import "../../styles/main.css";

const Header = () => {
  const isSignIn =
    useSelector((state) => state.user.isAuthenticated) ||
    localStorage.getItem("token");
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
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
              <Link to={"/user"} className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                {userName}
              </Link>
              <button className="main-nav-item" onClick={signOut}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </button>
            </>
          ) : (
            <Link to={"/sign-in"} className="main-nav-item">
              <i className="fa fa-user-circle"></i> Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
