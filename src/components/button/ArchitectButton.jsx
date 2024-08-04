// src/components/button/ArchitectButton.jsx
import React from "react";
import PropTypes from 'prop-types';
import { StyledButton } from "./ArchitectButton.styles";

function ArchitectButton({ name, onClick, isBlack = false, type = "button" }) {
  return (
    <StyledButton
      $isBlack={isBlack}
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
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default ArchitectButton;