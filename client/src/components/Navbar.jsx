import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/PR-learning-lab-logo.jpg";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar__container">

        <NavLink
          className="navbar__brand"
          to="/"
          onClick={closeMenu}
          aria-label="PR Learning Lab home"
        >
          <img
            className="navbar__logo-image"
            src={logo}
            alt="PR Learning Lab logo"
          />

          <span className="navbar__brand-text">
            PR Learning Lab
          </span>
        </NavLink>

        <button
          className="navbar__menu-button"
          type="button"
          onClick={toggleMenu}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={
            isMenuOpen
              ? "navbar__navigation navbar__navigation--open"
              : "navbar__navigation"
          }
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
          >
            Courses
          </NavLink>

          <a
            className="navbar__link"
            href="/#about"
            onClick={closeMenu}
          >
            About
          </a>

          <div className="navbar__actions">
            <a
              className="navbar__login"
              href="#login"
              onClick={closeMenu}
            >
              Log in
            </a>

            <a
              className="navbar__primary-button"
              href="#register"
              onClick={closeMenu}
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;