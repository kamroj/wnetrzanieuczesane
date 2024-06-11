import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { useContext, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { IsMobileContext } from "../../App";
import logo from "../../assets/images/logo.png";
import useScroll from "../../hooks/useScroll";
import { PagesData } from "../../pages/PagesData";
import Menu from "../menu/Menu";
import "./Navbar.scss";

export default function Navbar() {
  const [menuEnabled, setMenuEnabled] = useState(false);
  const isMobile = useContext(IsMobileContext);
  const isScrolled = useScroll();

  function showMenu(enabled) {
    setMenuEnabled(enabled);
    enabled ? disableBodyScroll(document) : enableBodyScroll(document);
  }

  return (
    <div className="navbar-container">
      <div className={`navbar-container ${isScrolled || menuEnabled ? "scrolled" : ""}`}>
        <div className="navbar-side-container">
          <img src={logo} alt="logo" className="navbar-side-container__item" />
        </div>

        <div className="navbar-center-container">
          {!isMobile() &&
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
          {isMobile() && (
            <div
              className="menu-button-container"
              onClick={() => showMenu(!menuEnabled)}
            >
              {(!menuEnabled && (
                <IoMenuOutline
                  className={`menu-icon ${isScrolled || menuEnabled? "scrolled" : ""}`}
                />
              )) || (
                <div>
                  <VscClose
                    className={`menu-icon ${isScrolled || menuEnabled ? "scrolled" : ""}`}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {isMobile() && menuEnabled && <Menu menuEnabled={menuEnabled} setMenuEnabled={setMenuEnabled} />}
    </div>
  );
}
