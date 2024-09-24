import React from "react";
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
  KeyPointsContainer,
  KeyPoint,
  HighlightedText,
  StyledFade,
} from "./AboutCompany.styles";
import { GridLine, GridLines } from "../../../components/GridLines/GridLines.styles";

function AboutCompany({ content, onNavigate }) {
  return (
    <AboutCompanyContainer>
      <PhotoContainer>
        <ImageSignatureWrapper>
          {content.image && content.image.asset && (
            <CompanyImage src={content.image.asset.url} alt="Company" />
          )}
          <SignatureContainer>Weronika Rojek</SignatureContainer>
        </ImageSignatureWrapper>
      </PhotoContainer>
      <ContentContainer>
        <StyledFade delay={200} duration={1500} damping={0.4} cascade triggerOnce>
          <Header>{content.header}</Header>
          <Content>{content.content}</Content>
          <KeyPointsContainer>
            {content.keyPoints && content.keyPoints.map((point, index) => (
              <KeyPoint key={index}>
                <HighlightedText>{point.key}</HighlightedText>: {point.value}
              </KeyPoint>
            ))}
          </KeyPointsContainer>
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
  content: PropTypes.shape({
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    keyPoints: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })),
  }).isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default AboutCompany;