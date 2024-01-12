import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";

import { HomeIcon, CogIcon, UserCircleIcon, DocumentTextIcon } from '@heroicons/react/solid';


export const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate();
  const navbar = useRef();
  const hamburger = useRef();

  const showMobileNavbar = () => {
    hamburger.current.classList.toggle("is-active");
    navbar.current.classList.toggle("is-active");
  };

  return  (
    <nav className="navbar bg-gray-200 mb-3 rounded-md w-full" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={showMobileNavbar}
          ref={hamburger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu w-full" ref={navbar}>
        <div className="navbar-start flex space-x-4"> 
          {token ? (
            <>
              <Link to="/" className="navbar-item text-blue-500 nav-link">
                <HomeIcon className="w-8 h-8 mr-2" />
              </Link>

              <Link to="/vehicles" className="navbar-item text-blue-500 nav-link">
                Fleet
              </Link>
              <Link to="/clients" className="navbar-item text-blue-500 nav-link">
                Clients
              </Link>
              <Link to="/jobs" className="navbar-item text-blue-500 nav-link">
                Jobs
              </Link>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="navbar-end">
          <div className="navbar-logout">
            <div className="buttons">
              {token ? (
                <button
                  className="button is-outlined text-blue-500"
                  onClick={() => {
                    setToken("");
                    navigate("/login");
                  }}
                >
                  {"LOGOUT"}
                </button>
              ) : (
                <>
                 
                  <Link to="/register" className="button is-link text-white-500">
                    Register
                  </Link>
                  <Link to="/login" className="button is-outlined text-blue-500">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};