// src/components/Navbar/Navbar.jsx
import React, { useContext, useState, useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { CSSTransition } from "react-transition-group";
import { IsMobileContext } from "../../App";
import useScroll from "../../hooks/useScroll";
import { PagesData } from "../../pages/PagesData";
import Menu from "../menu/Menu";
import logo from "../../assets/images/logo.png";
import AnimatedMenuIcon from "./AnimatedMenuIcon";
import {
  NavbarContainer,
  NavbarSideContainer,
  NavbarLogo,
  NavbarCenterContainer,
  NavbarLink,
  MenuButtonContainer,
  NavbarMenuRefContainer
} from "./Navbar.styles";

export default function Navbar() {
  const [menuEnabled, setMenuEnabled] = useState(false);
  const isMobile = useContext(IsMobileContext);
  const isScrolled = useScroll();
  const nodeRef = useRef(null);

  function showMenu(enabled) {
    setMenuEnabled(enabled);
    enabled ? disableBodyScroll(document) : enableBodyScroll(document);
  }

  return (
    <NavbarContainer $isScrolled={isScrolled} $menuEnabled={menuEnabled}>
      <NavbarSideContainer>
        <NavbarLogo src={logo} alt="logo" />
      </NavbarSideContainer>

      <NavbarCenterContainer>
        {!isMobile() &&
          PagesData.map((page, index) => (
            <NavbarLink
              key={index}
              to={page.path || page.element}
              onClick={() => console.log('asdasdasd')}
            >
              {page.title}
            </NavbarLink>
          ))}
      </NavbarCenterContainer>
      <NavbarSideContainer $right>
        {isMobile() && (
          <MenuButtonContainer>
            <AnimatedMenuIcon isOpen={menuEnabled} onClick={() => showMenu(!menuEnabled)} />
          </MenuButtonContainer>
        )}
      </NavbarSideContainer>
      {isMobile() && (
        <CSSTransition
          in={menuEnabled}
          nodeRef={nodeRef}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <NavbarMenuRefContainer ref={nodeRef}>
            <Menu menuEnabled={menuEnabled} onClick={() => showMenu(!menuEnabled)} />
          </NavbarMenuRefContainer>
        </CSSTransition>
      )}
    </NavbarContainer>
  );
}