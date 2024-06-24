import React from "react";
import PropTypes from "prop-types";
import {
  AboutProjectsContainer,
  ContentContainer,
  Header,
  Content,
  ButtonContainer,
  ScretchContainer,
  ScretchImage,
} from "./AboutProjects.styles";
import ArchitectButton from "../../../components/button/ArchitectButton";
import scretchImage from "../../../assets/images/scretch.png";
import { GridLine, GridLines } from "../GridLines/GridLines.styles";

function AboutProjects({ onNavigate }) {
  return (
    <AboutProjectsContainer>
      <ContentContainer>
        <Header>OD PROJEKTU DO REALIZACJI</Header>
        <Content>
          Specjalizuję się w dostarczaniu wyjątkowych i spersonalizowanych
          projektów, które wyróżniają się dzięki mojej innowacyjności i
          kreatywności. Współpracuję z klientami na każdym etapie – od pomysłu,
          przez rozwijanie koncepcji, aż po finalną realizację. Dzięki mojemu
          doświadczeniu i pasji, szybko przekształcam wizje w rzeczywistość,
          zachowując najwyższe standardy estetyki i funkcjonalności. Zawsze
          jestem gotowa doradzać i wspierać moich klientów, zapewniając, że
          końcowy efekt przewyższy ich oczekiwania.
        </Content>
        <ButtonContainer>
          <ArchitectButton name="PROJEKTY" onClick={onNavigate} />
        </ButtonContainer>
      </ContentContainer>
      <ScretchContainer>
        <ScretchImage src={scretchImage} alt="quote-background" />
      </ScretchContainer>
      <GridLines className="grid-lines-vertical line-on-very-top">
        <GridLine className="g-line-vertical line-left g-line-vertical-black" />
        <GridLine className="g-line-vertical line-center g-line-vertical-black" />
        <GridLine className="g-line-vertical line-right g-line-vertical-black" />
      </GridLines>
    </AboutProjectsContainer>
  );
}

AboutProjects.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default AboutProjects;
