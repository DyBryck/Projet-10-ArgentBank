import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Home, SignIn, SignUp, User } from "../pages/index";
import { getUser } from "../redux/actions";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      getUser(tokenFromStorage, true, navigate, dispatch);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <main className={isHomePage ? "" : "main bg-dark"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/user"
          element={token ? <User /> : <Navigate to="/sign-in" />}
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
};

const MainContent = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navigation />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default MainContent;
