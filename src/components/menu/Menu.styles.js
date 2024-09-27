import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.main};
  border-top: ${({theme}) => theme.borders.borderGold};
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${props => props.theme.sizes.navbarHeight});
  justify-content: center;
  position: fixed;
  top: ${props => props.theme.sizes.navbarHeight};
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const MenuPagesContainer = styled.div`
  align-items: center;
  border-bottom: ${({theme}) => theme.borders.borderGold};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box;
`;

export const MenuLink = styled(Link)`
  color: ${props => props.theme.colors.black};
  padding: 20px;
  font-size: 1.125rem;
  text-decoration: none;
`;

export const MenuButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  height: 300px;
  justify-content: space-evenly;
  overflow-x: auto;
  padding: 20% 5% 40%;;
  width: 100%;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuAnimation = createGlobalStyle`
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }
`;