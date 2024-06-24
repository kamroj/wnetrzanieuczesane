import styled from "styled-components";

export const AboutCompanyContainer = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: #f1ebeb;
  padding: 70px 0;
  height: 100%;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    flex-direction: column;
    height: 100%;
  }
`;

export const PhotoContainer = styled.div`
  box-sizing: border-box;
  padding-right: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 50%;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    align-items: center;
    width: 100%;
    padding-right: 0px;
  }
`;

export const CompanyImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.golden};
  z-index: 50;
  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    width: 250px;
    height: 250px;
  }
`;

export const SignatureContainer = styled.div`
  color: black;
  font-size: 4rem;
  font-family: "signature-font", sans-serif;
  text-align: center;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    margin-bottom: 50px;
    font-size: 2.5rem;
  }
`;

export const ContentContainer = styled.div`
  box-sizing: border-box;
  padding: 0 60px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  color: black;
  font-size: 2rem;
`;

export const Content = styled.div`
  box-sizing: border-box;
  padding: 40px 0;
  max-width: 500px;
  color: black;
  font-size: 1rem;
`;

export const HighlightedText = styled.span`
  color: rgb(218, 165, 32);
`;
