// Opinions.jsx
import React, { useState } from "react";
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

const OpinionsExample = [
  {
    id: 1,
    text: "Jestem bardzo zadowolony z usług tej firmy. Profesjonalizm i zaangażowanie zespołu przekroczyły moje oczekiwania. Polecam każdemu, kto szuka niezawodnego partnera w biznesie.",
    author: "Jan Kowalski",
  },
  {
    id: 2,
    text: "Usługi tej firmy są na najwyższym poziomie. Zespół zawsze reaguje szybko i skutecznie na nasze potrzeby. Zdecydowanie polecam ich usługi każdemu, kto ceni sobie profesjonalizm i jakość.",
    author: "Anna Nowak",
  },
];

function Opinions() {
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
          {OpinionsExample.map((opinion) => (
            <div key={opinion.id}>
              <OpinionCard>
                <OpinionContent>
                  <OpinionText>{opinion.text}</OpinionText>
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
          {OpinionsExample.map((_, index) => (
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

export default Opinions;
