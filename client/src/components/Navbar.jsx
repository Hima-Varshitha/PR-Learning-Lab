import { useState } from "react";
import logo from "../assets/PR-learning-lab-logo.jpg";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar__container">
        <a
          className="navbar__brand"
          href="#home"
          onClick={closeMenu}
        >
          <img
            className="navbar__logo-image"
            src={logo}
            alt="PR Learning Lab logo"
          />

          <span className="navbar__brand-text">
            PR Learning Lab
          </span>
        </a>

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
          <a
            className="navbar__link"
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            className="navbar__link"
            href="#courses"
            onClick={closeMenu}
          >
            Courses
          </a>

          <a
            className="navbar__link"
            href="#about"
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