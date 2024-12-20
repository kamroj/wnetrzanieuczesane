import styled from 'styled-components';

export const StyledMenuButton = styled.button`
  position: relative;
  top: 20%;
  height: 50px;
  width: 50px;
  background-color: rgb(241 235 235);
  color: #000000;
  border: 1px solid rgb(218, 165, 32);
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 0px 10px 2px rgb(159 133 8 / 30%);
  flex-shrink: 0;
`;

export const MenuButtonIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: rgb(218, 165, 32);
  margin-bottom: 0;
`;