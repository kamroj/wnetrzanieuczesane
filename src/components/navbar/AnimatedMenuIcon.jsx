// src/components/AnimatedMenuIcon/AnimatedMenuIcon.jsx
import React from 'react';
import styled, { css } from 'styled-components';

const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
  cursor: pointer;
`;

const Line = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  display: block;
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.colors.golden};
  position: absolute;
  left: 0;
  transition: all 0.3s ease-in-out;

  &:nth-child(1) {
    top: 0;
  }

  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  &:nth-child(3) {
    bottom: 0;
  }

  ${props => props.isOpen && css`
    &:nth-child(1) {
      transform: translateY(11.5px) rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: translateY(-11.5px) rotate(-45deg);
    }
  `}
`;

const AnimatedMenuIcon = ({ isOpen, onClick }) => (
  <IconWrapper onClick={onClick}>
    <Line isOpen={isOpen} />
    <Line isOpen={isOpen} />
    <Line isOpen={isOpen} />
  </IconWrapper>
);

export default AnimatedMenuIcon;