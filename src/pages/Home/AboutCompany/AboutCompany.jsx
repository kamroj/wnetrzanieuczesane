// src/components/Home/AboutCompany/AboutCompany.jsx
import PropTypes from "prop-types";
import ArchitectButton from "../../../components/button/ArchitectButton";
import {
  AboutCompanyContainer,
  PhotoContainer,
  ImageSignatureWrapper,
  CompanyImage,
  SignatureContainer,
  ContentContainer,
  Header,
  Content,
  HighlightedText,
  StyledFade,
} from "./AboutCompany.styles";
import werkaPhoto from "../../../assets/images/aaaa.jpg";
import { GridLine, GridLines } from "../../../components/GridLines/GridLines.styles";

function AboutCompany({ onNavigate }) {
  return (
    <AboutCompanyContainer>
      <PhotoContainer>
        <ImageSignatureWrapper>
          <CompanyImage src={werkaPhoto} alt="werka" />
          <SignatureContainer>Weronika Rojek</SignatureContainer>
        </ImageSignatureWrapper>
      </PhotoContainer>
      <ContentContainer>
        <StyledFade delay={200} duration={1500} damping={0.4} cascade triggerOnce>
          <Header>
            Zakochaj się w swoim kącie - Projektowanie wnętrz z pasją
          </Header>
          <Content>
            Wirzymy, że dom to więcej niż cztery ściany - to miejsce, które
            powinno inspirować i dawać radość każdego dnia. Dlatego podchodzimy
            do każdego projektu z pasją, kreatywnością i dbałością o
            najdrobniejsze szczegóły.
            <br />
            <br />
            <HighlightedText>Funkcjonalność</HighlightedText>: Każdy element ma
            swoje miejsce i spełnia określoną rolę.
            <br />
            <HighlightedText>Ciepło i komfort</HighlightedText>: Wnętrza, które
            emanują ciepłem i przytulnością.
            <br />
            <HighlightedText>Naturalne światło</HighlightedText>: Optymalne
            wykorzystanie światła dziennego.
            <br />
            <HighlightedText>Wysokiej jakości materiały</HighlightedText>:
            Trwałe i eleganckie materiały, które dodają charakteru.
            <br />
            <HighlightedText>Indywidualny styl</HighlightedText>: Wnętrza, które
            odzwierciedlają unikalną osobowość i styl życia ich mieszkańców.
          </Content>
          <ArchitectButton name="O MNIE" onClick={onNavigate} />
        </StyledFade>
      </ContentContainer>
      <GridLines>
        <GridLine/>
      </GridLines>
    </AboutCompanyContainer>
  );
}

AboutCompany.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default AboutCompany;