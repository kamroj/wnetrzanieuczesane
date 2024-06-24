import styled from 'styled-components';

export const StyledMenuButton = styled.button`
  height: 70px;
  width: 90px;
  background-color: rgb(241 235 235);
  color: ${props => props.theme.colors.black};
  border: ${({theme}) => theme.borders.borderGold};
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
`;

export const MenuButtonIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

export const MenuButtonTitle = styled.div`
  font-size: 0.875rem;
`;