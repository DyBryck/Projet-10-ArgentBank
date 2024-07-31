import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Home, SignIn, SignUp, User } from "../pages/index";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAuthenticated = localStorage.getItem("token");

  return (
    <main className={isHomePage ? "" : "main bg-dark"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/user"
          element={
            isAuthenticated ? <User /> : <Navigate replace to="/sign-in" />
          }
        />
        <Route path="/*" element={<Navigate replace to="/" />} />
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
