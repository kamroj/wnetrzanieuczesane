import styled from "styled-components";

export const AboutProjectsContainer = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  color: black;
  padding: 70px 0;
  min-height: 250px;
  height: 500px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    padding: 30px 0;
    flex-direction: column-reverse;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 60%;
  margin-left: 5%;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    text-align: center;
    margin: 0;
    align-items: center;
    width: 90%;
  }
`;

export const Header = styled.div`
  font-family: "architect-font", sans-serif;
  font-size: 4rem;
  font-weight: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase5}) {
    font-size: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    font-size: 2.5rem;
  }
`;

export const Content = styled.div`
  padding: 20px 0;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase1}) {
    font-size: ${({ theme }) => theme.fontSizes.phase1};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    justify-content: center;
    margin-top: 10px;
  }
`;

export const ScretchContainer = styled.div`
  width: 100%;
`;

export const ScretchImage = styled.img`
  top: 0;
  right: 1%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  overflow-x: visible;
  width: 50%;
  opacity: 0.95;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase5}) {
    width: 40%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase4}) {
    width: 30%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    padding-bottom: 30px;
    width: 100%;
    position: static;
    overflow-x: hidden;
  }
`;
