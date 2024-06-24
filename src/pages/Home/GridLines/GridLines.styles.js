import { styled } from 'styled-components';

const gridLineWidth = '1px';
const gridLineBackgroundColor = 'rgba(255, 255, 255, 0.132)';

export const GridLines = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  user-select: none;

  &.grid-lines-padding-menu {
    padding-top: 60px;
  }

  &.line-on-very-top {
    z-index: 10;
  }
`;

export const GridLine = styled.span`
  width: ${gridLineWidth};
  background-color: ${gridLineBackgroundColor};
  left: 0;

  &.line-center {
    left: 50%;
  }

  &.line-right {
    right: 0;
    left: auto;
  }

  &.g-line-vertical-black {
    background-color: #00000014;
  }
`;