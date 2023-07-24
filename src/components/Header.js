import React, { useEffect, useState } from 'react';
import "./header.css";
import logo from "./logo.png";
import { Link } from 'react-scroll';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");
      const sticky = navbar.offsetTop;

      setIsSticky(currentScrollPos >= sticky);

      // Check scroll direction and update the background color accordingly
      if (currentScrollPos > prevScrollPos) {
        navbar.classList.remove("original-bg");
      } else {
        navbar.classList.add("original-bg");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      <nav className={isSticky ? "header sticky" : "header"} id="navbar">
        <a href="/" className="headerlogo">
          <img src={logo} alt="logo" />
          HARSHVARDHAN PAWAR
        </a>
        <ul>
          <li>
          <Link to="about" smooth={true} offset={-70} duration={500} className="headerlogo">
              About
            </Link>
          </li>
          <li>
          <Link to="passion" smooth={true} offset={-70} duration={500} className="headerlogo">
              Passion
            </Link>
          </li>
          <li>
          <Link to="experience" smooth={true} offset={-70} duration={500} className="headerlogo">
          Experience
            </Link>
          </li>
          <li>
            <a className="headerlogo" href="/about">
              work
            </a>
          </li>
          <li>
            <a className="headerlogo" href="/about">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
