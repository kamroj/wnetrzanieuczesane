import { React, useContext } from "react";
import {Link} from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { IsMobileContext } from "../../App";
import "./Navbar.scss";

export default function Navbar() {
  const isMobile = useContext(IsMobileContext);

  return (
    <div className="navbar-container">
      <div className="navbar-side-container">
        <img src={logo} alt="logo" className="navbar-side-container__item" />
      </div>
      <div className="navbar-center-container">
        <Link className="navbar-center-container__link" to="/">HOME</Link>
        <Link className="navbar-center-container__link" to="/">REALIZACJE</Link>
        <Link className="navbar-center-container__link" to="/">KONTAKT</Link>
      </div>
      <div className="navbar-side-container" />
    </div>
  );
}
