import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Skills from "./Skills";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";
import logo from "../assets/Final Logo.png";

const Navbar = () => {
  const [isMobile, setMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const styles = {
    textDecoration: "none",
    padding: "7px",
    color: "white",
  };

  const imgStyles = {
    width: "15%",
    height:'100%'
  };

  const mobileMenuStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  };

  const mobileMenuListStyles = {
    listStyle: "none",
    padding: 0,
    textAlign: "center",
  };

  const mobileMenuItemStyles = {
    marginBottom: "15px",
  };

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div >
      <nav
        className="d-flex p-2 justify-content-between align-items-center fixed-top"
        style={{ backgroundColor: "#241c22", zIndex:"1000",height:'10%'}}
      >
        <img
          src={logo}
          alt="logo"
          style={imgStyles}
          className="align-self-start me-5"
        />
        {isMobile && (
          <button
            className="hamburger"
            onClick={handleMenuToggle}
            ref={menuRef}
            style={{ background: "none", border: "none" }}
          >
            <Hamburger
              toggled={isMenuOpen}
              color="white"
              style={{ width: "16px", height: "16px" }}
            />
          </button>
        )}
        {!isMobile && (
          <>
            <a
              href="#about"
              smooth={true}
              duration={500}
              className="nav-item me-3 ms-5"
              style={styles}
            >
              About
            </a>
            <a
              href="#resume"
              smooth={true}
              duration={300}
              style={styles}
              className="nav-item mx-3"
            >
              Resume
            </a>
            <a
              href="#skills"
              smooth={true}
              duration={500}
              className="nav-item mx-3 "
              style={styles}
            >
              Skills
            </a>
            <a
              href="#project"
              smooth={true}
              duration={500}
              className="nav-item mx-3"
              style={styles}
            >
              Project
            </a>
            <a
              href="#contact"
              smooth={true}
              duration={500}
              className="nav-item mx-3 ms-auto"
              style={styles}
            >
              Contact{" "}
              <ArrowRightIcon className="ms-1" style={{ width: "22px" }} />
            </a>
          </>
        )}
      </nav>

      {isMobile && isMenuOpen && (
        <div
          className="mobile-menu"
          style={mobileMenuStyles}
          onClick={handleMenuClose}
        >
          <ul
            className="mobile-menu-list"
            ref={menuRef}
            style={mobileMenuListStyles}
          >
            <li style={mobileMenuItemStyles}>
              <a
                href="#about"
                smooth={true}
                duration={500}
                style={styles}
              >
                About
              </a>
            </li>
            <li style={mobileMenuItemStyles}>
              <a
                href="#resume"
                smooth={true}
                duration={500}
                style={styles}
              >
                Resume
              </a>
            </li>
            <li style={mobileMenuItemStyles}>
              <a
                href="#skills"
                smooth={true}
                duration={500}
                style={styles}
              >
                Skills
              </a>
            </li>
            <li style={mobileMenuItemStyles}>
              <a
                href="#project"
                smooth={true}
                duration={500}
                style={styles}
              >
                Project
              </a>
            </li>
            <li style={mobileMenuItemStyles}>
              <a
                href="#contact"
                smooth={true}
                duration={500}
                style={styles}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Navbar;
