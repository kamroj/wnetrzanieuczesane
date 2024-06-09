import React, { useRef, useState } from "react";
import {
  IoMenuOutline,
  IoCallOutline,
  IoMailOutline,
  IoNavigateOutline,
} from "react-icons/io5";
import { CSSTransition } from "react-transition-group";
import { IoIosClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import "./Menu.scss";
import MenuButton from "./MenuButton";
import { PagesData } from "../../pages/PagesData";

export default function Menu({ isScrolled }) {
  const [showMenuButton, setShowMenuButton] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const nodeRef = useRef(null);
  const navigate = useNavigate();

  const handleCall = () => {
    window.location.href = "tel:+123456789";
    setShowMenu(false);
  };

  const handleNavigate = () => {
    window.location.href = "https://maps.google.com/?q=adres";
    setShowMenu(false);
  };

  const handleEmail = () => {
    navigate("/contact");
    setShowMenu(false);
  };

  return (
    <div>
      {showMenuButton && (
        <div
          className="menu-button-container"
          onClick={() => setShowMenu(true)}
        >
          <IoMenuOutline className={`menu-icon ${isScrolled ? "scrolled" : ""}`}/>
        </div>
      )}
      <CSSTransition
        in={showMenu}
        nodeRef={nodeRef}
        timeout={150}
        classNames="fade"
        unmountOnExit
        onEnter={() => setShowMenuButton(false)}
        onExited={() => setShowMenuButton(true)}
      >
        <div className="menu-container" ref={nodeRef}>
          <button
            className="menu-container__close-button"
            onClick={() => setShowMenu(false)}
          >
            <IoIosClose />
          </button>
          <div className="menu-pages-container">
            {PagesData.map((page, index) => (
              <Link
                key={index}
                to={page.path || page.element}
                className="menu-pages-container__link"
                onClick={() => setShowMenu(false)}
              >
                {page.title}
              </Link>
            ))}
          </div>
          <div className="menu-buttons-container">
            <MenuButton
              title="ZADZWOŃ"
              icon={<IoCallOutline />}
              action={handleCall}
            />
            <MenuButton
              title="NAWIGUJ"
              icon={<IoNavigateOutline />}
              action={handleNavigate}
            />
            <MenuButton
              title="EMAIL"
              icon={<IoMailOutline />}
              action={handleEmail}
            />
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
