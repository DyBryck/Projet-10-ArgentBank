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

  return (
    <main className={isHomePage ? "" : "main bg-dark"}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/*" element={<Navigate replace to="/" />} />
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
