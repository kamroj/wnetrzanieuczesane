import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { IoCallOutline, IoMailOutline, IoNavigateOutline } from "react-icons/io5";
import { PagesData } from "../../pages/PagesData";
import MenuButton from "./MenuButton";
import { 
  MenuContainer, 
  MenuPagesContainer, 
  MenuLink, 
  MenuButtonsContainer,
  MenuAnimation
} from "./Menu.styles";

export default function Menu({ menuEnabled, onLinkClick }) {
  const nodeRef = useRef(null);
  const navigate = useNavigate();

  const handleCall = () => {
    window.location.href = "tel:+48668108426";
    onLinkClick();
  };

  const handleNavigate = () => {
    window.location.href = "https://maps.google.com/?q=adres";
    onLinkClick();
  };

  const handleEmail = () => {
    navigate("/contact");
    onLinkClick();
  };

  return (
    <>
      <MenuAnimation />
      <CSSTransition
        in={menuEnabled}
        nodeRef={nodeRef}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <MenuContainer ref={nodeRef}>
          <MenuPagesContainer>
            {PagesData.map((page, index) => (
              <MenuLink
                key={index}
                to={page.path || page.element}
                onClick={() => {
                  onLinkClick();
                }}
              >
                {page.title}
              </MenuLink>
            ))}
          </MenuPagesContainer>
          <MenuButtonsContainer>
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
          </MenuButtonsContainer>
        </MenuContainer>
      </CSSTransition>
    </>
  );
}