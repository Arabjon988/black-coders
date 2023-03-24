import { useContext } from "react";
import Context from "../../context/Context";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/heroImg/logo.svg";
import { FiMenu } from "react-icons/fi";

import "./navbar.css";

const Navbar = () => {
  const { user } = useContext(Context);
  return (
    <>
      <header className="navbar">
        <div className="container">
          <nav className="nav_main">
            <div className="nav_mainLogo">
              <Link to="/">
                <img className="nav_mainImg" src={logo} alt="Logo rasm bor" />
              </Link>
            </div>
            <div className="nav_mainLink">
              <p className="nav_main_link_item">
                <Link to="/">ASOSIY</Link>
              </p>
              <p className="nav_main_link_item">
                <Link to="/about">BIZ XAQIMIZDA</Link>
              </p>
              <p className="nav_main_link_item">
                <Link to="/about-course">KURS XAQIDA</Link>
              </p>
              <p className="nav_main_link_item">
                <Link to="/contact">BOG'LANISH</Link>
              </p>
            </div>
            <div className="nav_mainBtn">
              {user.fullName ? (
                <>
                  <div className="user">
                    <p className="user_fullname">{user.fullName}</p>
                  </div>
                </>
              ) : (
                <Link to="/">
                  <button type="submit" className="nav_login_btn">
                    A'ZO BO'LISH
                  </button>
                </Link>
              )}
            </div>
            <div className="menu">
              <FiMenu className="nav_menu" />
            </div>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
