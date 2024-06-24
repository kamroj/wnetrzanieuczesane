import styled, { css } from 'styled-components';

const buttonStyles = css`
  font-weight: 600;
  display: inline-block;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.golden};
  padding: 15px 0;
  font-size: 0.8rem;
  width: 180px;
  background-color: ${props => props.isBlack ? props.theme.colors.black : props.theme.colors.white};
  color: ${props => props.isBlack ? props.theme.colors.white : props.theme.colors.black};
  box-sizing: border-box;
  transition: background-color 0.5s, color 0.5s;
  z-index: 30;
  cursor: pointer;

  &::after,
  &::before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    transition: 0.5s;
  }

  &::after {
    top: -1px;
    left: -1px;
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
  }

  &::before {
    bottom: -1px;
    right: -1px;
    border-bottom: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainLight};
    /* background-color: ${props => props.isBlack ? props.theme.colors.white : props.theme.colors.black}; */
    /* color: ${({ theme }) => theme.colors.golden}; */
    /* border-color: transparent; */
  }

  &:hover::after,
  &:hover::before {
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-color: ${({ theme }) => theme.colors.golden};
  }
`;

export const StyledButton = styled.button`
  ${buttonStyles}
`;