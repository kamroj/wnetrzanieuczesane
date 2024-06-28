import React from 'react';
import PropTypes from 'prop-types';
import { useIsMobile } from '../../../hooks/useIsMobile';
import ArchitectButton from "../../../components/button/ArchitectButton";
import { 
  StyledParallax,
  AboutOfferContainer,
  ContentText,
} from './AboutOffer.styles';
import parImg from '../../../assets/images/home-par2.jpg';

function AboutOffer({ onNavigate }) {
  const isMobile = useIsMobile();

  return (
    <StyledParallax
      bgImage={parImg}
      strength={isMobile(750) ? 300 : 600}
      className="home-about-offer-parallax"
    >
      <AboutOfferContainer>
        <ContentText>
          Twoje wymarzone wnętrze w zasięgu ręki
        </ContentText>
        <ArchitectButton name="OFERTA" onClick={onNavigate} />
      </AboutOfferContainer>
    </StyledParallax>
  );
}

AboutOffer.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default AboutOffer;