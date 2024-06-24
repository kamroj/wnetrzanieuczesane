import React from "react";
import PropTypes from 'prop-types';
import { StyledButton } from "./ArchitectButton.styles";

function ArchitectButton({ name, onClick, isBlack = false }) {
  return (
    <StyledButton
      $isBlack={isBlack}
      onClick={onClick}
    >
      {name}
    </StyledButton>
  );
}

ArchitectButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isBlack: PropTypes.bool
};

export default ArchitectButton;