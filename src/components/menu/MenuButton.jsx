import React from "react";
import { StyledMenuButton, MenuButtonIcon } from "./MenuButton.styles";

export default function MenuButton({ icon, action }) {
  return (
    <StyledMenuButton onClick={action}>
      <MenuButtonIcon>{icon}</MenuButtonIcon>
    </StyledMenuButton>
  );
}