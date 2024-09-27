import React, { useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import { IoCallOutline } from "react-icons/io5";
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

  const handleCall = () => {
    window.location.href = "tel:+48668108426";
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
              icon={<IoCallOutline />}
              action={handleCall}
            />
          </MenuButtonsContainer>
        </MenuContainer>
      </CSSTransition>
    </>
  );
}