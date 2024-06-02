import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { PagesData } from "../../pages/PagesData";
import "./Navbar.scss";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-container');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-side-container">
        <img src={logo} alt="logo" className="navbar-side-container__item" />
      </div>
      <div className="navbar-center-container">
        {PagesData.map((page, index) => (
          <Link
            key={index}
            to={page.path || page.element}
            className="navbar-center-container__link"
          >
            {page.title}
          </Link>
        ))}
      </div>
      <div className="navbar-side-container" />
    </div>
  );
}
