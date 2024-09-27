import React from "react";
import { StyledMenuButton, MenuButtonIcon, MenuButtonTitle } from "./MenuButton.styles";

export default function MenuButton({ title, icon, action }) {
  return (
    <StyledMenuButton onClick={action}>
      <MenuButtonIcon>{icon}</MenuButtonIcon>
    </StyledMenuButton>
  );
}