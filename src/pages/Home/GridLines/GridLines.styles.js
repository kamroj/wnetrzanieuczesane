import { styled } from "styled-components";

const gridLineWidth = "1px";

export const GridLines = styled.div`
  display: flex;
  justify-content: center;
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
  background-color: ${({ theme }) => theme.colors.goldenLight};

  &.g-line-vertical-black {
    background-color: ${({ theme }) => theme.colors.goldenLight};
  }
`;
