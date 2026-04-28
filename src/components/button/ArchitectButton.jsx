// src/components/button/ArchitectButton.jsx
import React from "react";
import PropTypes from 'prop-types';
import { StyledButton } from "./ArchitectButton.styles";

function ArchitectButton({ name, onClick, isBlack = false, type = "button", variant }) {
  return (
    <StyledButton
      $isBlack={isBlack}
      $variant={variant}
      onClick={onClick}
      type={type}
    >
      {name}
    </StyledButton>
  );
}

ArchitectButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isBlack: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['goldGlass']),
};

export default ArchitectButton;