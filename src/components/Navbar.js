import { useRef } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Skills from './Skills';
import Resume from './Resume';
import Project from './Project';
import Contact from './Contact';
import About from './About';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Hamburger from 'hamburger-react';
import { useState, useEffect } from 'react';
import logo from '../assets/Final Logo.png';


const Navbar = () => {
  const [isMobile, setMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const styles = {
    textDecoration: 'none',
    padding: '7px',
    color: 'white',
  };

  const imgStyles = {
    width : '85px'
  }

  const mobileMenuStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  };

  const mobileMenuListStyles = {
    listStyle: 'none',
    padding: 0,
    textAlign: 'center',
  };

  const mobileMenuItemStyles = {
    marginBottom: '15px', // Add spacing between list items
  };

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="d-flex p-2 justify-content-between align-items-center position-sticky" style={{ backgroundColor: '#241c22' }}>
        <Link to="/" className="align-self-start me-5" style={styles}>
          <img src={logo} alt='logo' style={imgStyles}/>
        </Link>
        {isMobile && (
          <button className="hamburger" onClick={handleMenuToggle} ref={menuRef} style={{ background: 'none', border: 'none' }}>
            <Hamburger
              toggled={isMenuOpen}
              color="white"
              style={{ width: '16px', height: '16px' }}
            />
          </button>
        )}
        {!isMobile && (
          <>
            <Link to="/" className="nav-item me-3 ms-5" style={styles}>
              About
            </Link>
            <Link to="/Resume" className="nav-item mx-3 " style={styles}>
              Resume
            </Link>
            <Link to="/Skills" className="nav-item mx-3 " style={styles}>
              Skills
            </Link>
            <Link to="/Project" className="nav-item mx-3 " style={styles}>
              Project
            </Link>
            <Link to="/Contact" className="nav-item mx-3 ms-auto" style={styles}>
              Contact
              <ArrowRightIcon className="ms-1" style={{ width: '22px' }} />
            </Link>
          </>
        )}
      </nav>

      {isMobile && isMenuOpen && (
        <div className="mobile-menu" style={mobileMenuStyles} onClick={handleMenuClose}>
          <ul className="mobile-menu-list" ref={menuRef} style={mobileMenuListStyles}>
            <li style={mobileMenuItemStyles}>
              <Link to="/" style={styles}>
                About
              </Link>
            </li>
            <li style={mobileMenuItemStyles}>
              <Link to="/Resume" style={styles}>
                Resume
              </Link>
            </li>
            <li style={mobileMenuItemStyles}>
              <Link to="/Skills" style={styles}>
                Skills
              </Link>
            </li>
            <li style={mobileMenuItemStyles}>
              <Link to="/Project" style={styles}>
                Project
              </Link>
            </li>
            <li style={mobileMenuItemStyles}>
              <Link to="/Contact" style={styles}>
                Contact
              </Link>
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