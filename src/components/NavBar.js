import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Hamburger from "hamburger-react";
import { Link as ScrollLink} from "react-scroll";
import "./Navbar.css";


function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true);
  const isXlScreen = useMediaQuery({ query: "(min-width: 982px)" });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos || currentScrollPos < 10;
  
      setPrevScrollPos(currentScrollPos);
      setVisible(isScrollingUp);
      
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.style.transition = "top 0.3s";
      navbar.style.top = visible ? "0" : `-${navbar.offsetHeight}px`;
    }
  }, [visible]);

  const toggleMenu = () => {
    setOpen(!isOpen);
  }
  
  const closeMenu = () => {
    setOpen(false);
  };



  return (
    <div id="navbar" className="fixed-top" >
      <Navbar expand="lg mb-5" style={{ zIndex: isOpen ? 1001 : 999 }}>
        <Container className="d-flex justify-content-between align-items-center">
          <Link to="/" className="nav-link">
            <h1>SM</h1>
          </Link>
          <div>
            {isXlScreen ? (
              <div className="d-flex gap-3">
                <ScrollLink to="about" smooth={true} duration={500}>
                  About
                </ScrollLink>
                <ScrollLink to="project" smooth={true} duration={500}>
                  Projects
                </ScrollLink>
                <ScrollLink to="experience" smooth={true} duration={500}>
                  Experience
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Contacts
                </ScrollLink>
              </div>
            ) : (
              <div>
              <div className="text-color">
                <Hamburger className="hamburger-menu" toggled={isOpen} toggle={toggleMenu} size={30} />
              </div>
              </div>
            )}
          </div>
        </Container>
      </Navbar>
      {isOpen && (
                <div className="mobile-menu-overlay" onClick={closeMenu}>
                  <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                  <ul className="menu-list">
                      <li onClick={closeMenu}>
                        <ScrollLink to="about" smooth={true} duration={500}>
                          About
                        </ScrollLink>
                      </li>
                      <li onClick={closeMenu}>
                        <ScrollLink to="project" smooth={true} duration={500}>
                          Projects
                        </ScrollLink>
                      </li>
                      <li onClick={closeMenu}>
                        <ScrollLink to="experience" smooth={true} duration={500}>
                          Experience
                        </ScrollLink>
                      </li>
                      <li onClick={closeMenu}>
                        <ScrollLink to="contact" smooth={true} duration={500}>
                          Contacts
                        </ScrollLink>
                      </li>
                    </ul>
                    </div>
                </div>
              )}
    </div>
  );
}

export default NavBar;
