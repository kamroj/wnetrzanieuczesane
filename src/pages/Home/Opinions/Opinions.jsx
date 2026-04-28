import React, { useRef, useState } from "react";
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
  const sliderRef = useRef(null);
  const hasMultipleOpinions = opinions.length > 1;

  const removeWrappingQuotes = (text) =>
    text.replace(/^[„“”\"']+\s*/, "").replace(/\s*[”“„\"']+$/, "");

  const goToPreviousSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const goToSlide = (index) => {
    sliderRef.current?.slickGoTo(index);
  };

  const settings = {
    dots: false,
    infinite: hasMultipleOpinions,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: hasMultipleOpinions,
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
            <div key={opinion._key || `${opinion.author}-${index}`}>
              <OpinionCard>
                <OpinionContent>
                  <OpinionText>{removeWrappingQuotes(opinion.content)}</OpinionText>
                  <OpinionAuthor>{opinion.author}</OpinionAuthor>
                </OpinionContent>
              </OpinionCard>
            </div>
          ))}
        </StyledSlider>
        {hasMultipleOpinions && (
          <>
            <OpinionsNav aria-label="Nawigacja opinii klientów">
              <NavButton onClick={goToPreviousSlide} aria-label="Poprzednia opinia">
                &larr;
              </NavButton>
              <NavButton onClick={goToNextSlide} aria-label="Następna opinia">
                &rarr;
              </NavButton>
            </OpinionsNav>
            <DotContainer aria-label="Wybierz opinię">
              {opinions.map((opinion, index) => (
                <CustomDot
                  key={opinion._key || `${opinion.author}-dot-${index}`}
                  $active={index === currentSlide}
                  onClick={() => goToSlide(index)}
                  aria-label={`Pokaż opinię ${index + 1}`}
                  aria-current={index === currentSlide ? "true" : undefined}
                />
              ))}
            </DotContainer>
          </>
        )}
      </OpinionsContainer>
    </OpinionsSection>
  );
}

Opinions.propTypes = {
  opinions: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      _key: PropTypes.string,
    })
  ).isRequired,
};

export default Opinions;