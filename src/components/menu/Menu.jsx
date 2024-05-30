import React, { useState } from "react";
import {
  IoMenuOutline,
  IoCallOutline,
  IoMailOutline,
  IoNavigateOutline,
} from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import "./Menu.scss";
import MenuButton from "./MenuButton";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleCall = () => {
    window.location.href = 'tel:+123456789';
    toggleMenu();
  };

  const handleNavigate = () => {
    window.location.href = 'https://maps.google.com/?q=adres';
    toggleMenu();
  };

  const handleEmail = () => {
    navigate('/contact');
    toggleMenu();
  };

  return (
    <>
      {menuVisible ? (
        <div className="menu-container">
          <button className="menu-container__close-button" onClick={toggleMenu}>
            <IoIosClose />
          </button>
          <div className="menu-pages-container">
            PAGES
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
      ) : (
        <div className="menu-button-container" onClick={toggleMenu}>
          <IoMenuOutline className="menu-button-container__close_button" />
        </div>
      )}
    </>
  );
}
