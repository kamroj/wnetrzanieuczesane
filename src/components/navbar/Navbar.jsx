import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { PagesData } from "../../pages/PagesData";
import "./Navbar.scss";
import { IsMobileContext } from "../../App";
import Menu from "../menu/Menu";
import useScroll from "../../hooks/useScroll";

export default function Navbar() {
  const isMobile = useContext(IsMobileContext);
  const isScrolled = useScroll();

  return (
    <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-side-container">
        <img src={logo} alt="logo" className="navbar-side-container__item" />
      </div>

      <div className="navbar-center-container">
        {!isMobile &&
          PagesData.map((page, index) => (
            <Link
              key={index}
              to={page.path || page.element}
              className="navbar-center-container__link"
            >
              {page.title}
            </Link>
          ))}
      </div>
      <div className="navbar-side-container right">
        {isMobile && <Menu isScrolled={isScrolled} />}
      </div>
    </div>
  );
}
