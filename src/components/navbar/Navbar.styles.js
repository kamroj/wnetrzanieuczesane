import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { VscClose } from "react-icons/vsc";

export const NavbarContainer = styled.div`
  transform: translate3d(0, 0, 0);
  border-bottom: ${({theme}) => theme.borders.borderGold};
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  background-color: ${(props) =>
    props.$isScrolled || props.$menuEnabled
      ? props.theme.colors.background
      : props.theme.colors.transparent};
  color: ${(props) =>
    props.$isScrolled || props.$menuEnabled
      ? props.theme.colors.black
      : props.theme.colors.white};
  display: flex;
  height: ${(props) => props.theme.sizes.navbarHeight};
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 80;
  transition: background-color ${({theme}) => theme.transitions.default},
    color ${(props) => props.theme.transitions.default},
    position ${(props) => props.theme.transitions.default};
  box-sizing: border-box;
`;

export const NavbarSideContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100px;
  flex-shrink: 0;
  justify-content: ${(props) => (props.$right ? "center" : "flex-start")};
`;

export const NavbarLogo = styled.img`
  height: 100%;
`;

export const NavbarCenterContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  &.fade-enter-done {
    width: 0;
  }
`;

export const NavbarLink = styled(Link)`
  display: flex;
  color: inherit;
  padding: 0px 20px;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.normal};
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  position: relative;
  transition: color ${(props) => props.theme.transitions.default};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.golden};
    transition: transform 250ms ease-in-out;
    transform: scaleX(0);
    transform-origin: 100% 50%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.golden};;

    &::after {
      transform: scaleX(1);
      transform-origin: 0 50%;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phase3}) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const MenuButtonContainer = styled.div`
  align-items: center;
  border: none;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
  display: flex;
  font-family: Arial, sans-serif;
  justify-content: center;
`;

export const MenuIcon = styled(IoMenuOutline)`
  font-size: 2.5rem;
  color: ${(props) =>
    props.$isScrolled || props.$menuEnabled
      ? props.theme.colors.black
      : props.theme.colors.white};
`;

export const CloseIcon = styled(VscClose)`
  font-size: 2.5rem;
  color: ${(props) =>
    props.$isScrolled || props.$menuEnabled
      ? props.theme.colors.black
      : props.theme.colors.white};
`;

export const NavbarMenuRefContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 0;
`;
