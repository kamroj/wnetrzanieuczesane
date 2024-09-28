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
import { GridLine, GridLines } from "../../../components/GridLines/GridLines.styles";

function AboutProjects({ content, onNavigate }) {
  return (
    <AboutProjectsContainer>
      <ContentContainer>
        <Header>{content.header}</Header>
        <Content>{content.content}</Content>
        <ButtonContainer>
          <ArchitectButton name="PROJEKTY" onClick={onNavigate} />
        </ButtonContainer>
      </ContentContainer>
      <ScretchContainer>
        <ScretchImage src={scretchImage} alt="quote-background" />
      </ScretchContainer>
      <GridLines>
        <GridLine/>
      </GridLines>
    </AboutProjectsContainer>
  );
}

AboutProjects.propTypes = {
  content: PropTypes.shape({
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default AboutProjects;