import React, { useRef } from "react";
import {
  IoCallOutline,
  IoMailOutline,
  IoNavigateOutline,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { PagesData } from "../../pages/PagesData";
import "./Menu.scss";
import MenuButton from "./MenuButton";

export default function Menu({ menuEnabled, setMenuEnabled }) {
  const nodeRef = useRef(null);
  const navigate = useNavigate();

  const handleCall = () => {
    window.location.href = "tel:+123456789";
    setMenuEnabled(false);
  };

  const handleNavigate = () => {
    window.location.href = "https://maps.google.com/?q=adres";
    setMenuEnabled(false);
  };

  const handleEmail = () => {
    navigate("/contact");
    setMenuEnabled(false);
  };

  return (

      <div className="menu-container" ref={nodeRef}>
        <div className="menu-pages-container">
          {PagesData.map((page, index) => (
            <Link
              key={index}
              to={page.path || page.element}
              className="menu-pages-container__link"
              onClick={() => setMenuEnabled(false)}
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
  );
}
