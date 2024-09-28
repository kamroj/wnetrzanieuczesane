import React, { useState } from "react";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {
  CustomDot,
  DotContainer,
  NavButton,
  OpinionAuthor,
  OpinionCard,
  OpinionContent,
  OpinionText,
  OpinionsContainer,
  OpinionsNav,
  OpinionsSection,
  OpinionsTitle,
  StyledSlider,
} from "./Opinions.styles.js";

function Opinions({ opinions }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <OpinionsSection>
      <OpinionsContainer>
        <OpinionsTitle>Opinie naszych Klientów</OpinionsTitle>
        <StyledSlider ref={sliderRef} {...settings}>
          {opinions.map((opinion, index) => (
            <div key={index}>
              <OpinionCard>
                <OpinionContent>
                  <OpinionText>{opinion.content}</OpinionText>
                  <OpinionAuthor>{opinion.author}</OpinionAuthor>
                </OpinionContent>
              </OpinionCard>
            </div>
          ))}
        </StyledSlider>
        <OpinionsNav>
          <NavButton onClick={() => sliderRef.current.slickPrev()}>
            &larr;
          </NavButton>
          <NavButton onClick={() => sliderRef.current.slickNext()}>
            &rarr;
          </NavButton>
        </OpinionsNav>
        <DotContainer>
          {opinions.map((_, index) => (
            <CustomDot
              key={index}
              $active={index === currentSlide}
              onClick={() => sliderRef.current.slickGoTo(index)}
            />
          ))}
        </DotContainer>
      </OpinionsContainer>
    </OpinionsSection>
  );
}

Opinions.propTypes = {
  opinions: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Opinions;