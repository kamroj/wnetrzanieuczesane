import React, { useState, useEffect, useCallback } from 'react';
import { 
  OpinionsSection,
  OpinionsContainer,
  OpinionsTitle,
  OpinionCard,
  OpinionText,
  OpinionAuthor,
  OpinionsNav,
  NavButton,
  QuoteMark,
  DotIndicator,
  DotContainer
} from './Opinions.styles.js';

const OpinionsExample = [
  {
    id: 1,
    text: "Jestem bardzo zadowolony z usług tej firmy. Profesjonalizm i zaangażowanie zespołu przekroczyły moje oczekiwania. Polecam każdemu, kto szuka niezawodnego partnera w biznesie.",
    author: "Jan Kowalski"
  },
  {
    id: 2,
    text: "Usługi tej firmy są na najwyższym poziomie. Zespół zawsze reaguje szybko i skutecznie na nasze potrzeby. Zdecydowanie polecam ich usługi każdemu, kto ceni sobie profesjonalizm i jakość.",
    author: "Anna Nowak"
  }
];

function Opinions() {
  const [currentOpinion, setCurrentOpinion] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeOpinion = useCallback((index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentOpinion(index);
      setIsAnimating(false);
    }, 500);
  }, []);

  const nextOpinion = useCallback(() => {
    changeOpinion((currentOpinion + 1) % OpinionsExample.length);
  }, [currentOpinion, changeOpinion]);

  const prevOpinion = useCallback(() => {
    changeOpinion((currentOpinion - 1 + OpinionsExample.length) % OpinionsExample.length);
  }, [currentOpinion, changeOpinion]);

  useEffect(() => {
    const interval = setInterval(nextOpinion, 10000);
    return () => clearInterval(interval);
  }, [nextOpinion]);

  const opinion = OpinionsExample[currentOpinion];

  return (
    <OpinionsSection>
      <OpinionsContainer>
        <OpinionsTitle>Opinie naszych Klientów</OpinionsTitle>
        <OpinionCard $isAnimating={isAnimating}>
          <OpinionText>{opinion.text}</OpinionText>
          <OpinionAuthor>{opinion.author}</OpinionAuthor>
        </OpinionCard>
        <OpinionsNav>
          <NavButton onClick={prevOpinion}>&larr;</NavButton>
          <NavButton onClick={nextOpinion}>&rarr;</NavButton>
        </OpinionsNav>
        <DotContainer>
          {OpinionsExample.map((_, index) => (
            <DotIndicator 
              key={index} 
              active={index === currentOpinion}
              onClick={() => changeOpinion(index)}
            />
          ))}
        </DotContainer>
      </OpinionsContainer>
    </OpinionsSection>
  );
}

export default Opinions;