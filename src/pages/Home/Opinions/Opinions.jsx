import React, { useState } from 'react';
import { 
  OpinionsSection,
  OpinionsContainer,
  OpinionsTitle,
  OpinionsItem,
  OpinionsContent,
  OpinionsText,
  OpinionsAuthor,
  AuthorName,
  AuthorTitle,
  OpinionsImage,
  OpinionsNav,
  NavButton
} from './Opinions.styles.js';
import { GridLine, GridLines } from '../GridLines/GridLines.styles.js';

// Przykładowe dane - w rzeczywistości mogłyby być pobierane z API
const OpinionsExample = [
  {
    id: 1,
    text: "Jestem bardzo zadowolony z usług tej firmy. Profesjonalizm i zaangażowanie zespołu przekroczyły moje oczekiwania. Polecam każdemu, kto szuka niezawodnego partnera w biznesie.",
    author: "Jan Kowalski",
    title: "Dyrektor Generalny, Firma XYZ",
    image: "/path/to/your/image.jpg"
  },
  // Dodaj więcej Opinionsi...
];

function Opinions() {
  const [currentOpinions, setCurrentOpinions] = useState(0);

  const nextOpinions = () => {
    setCurrentOpinions((prev) => (prev + 1) % OpinionsExample.length);
  };

  const prevOpinions = () => {
    setCurrentOpinions((prev) => (prev - 1 + OpinionsExample.length) % OpinionsExample.length);
  };

  const Opinions = OpinionsExample[currentOpinions];

  return (
    <OpinionsSection>
      <OpinionsContainer>
        <OpinionsTitle>Co mówią nasi klienci</OpinionsTitle>
        <OpinionsItem>
          <OpinionsContent>
            <OpinionsText>
              {Opinions.text}
            </OpinionsText>
            <OpinionsAuthor>
              <AuthorName>{Opinions.author}</AuthorName>
              <AuthorTitle>{Opinions.title}</AuthorTitle>
            </OpinionsAuthor>
          </OpinionsContent>
          <OpinionsImage src={Opinions.image} alt={Opinions.author} />
        </OpinionsItem>
        <OpinionsNav>
          <NavButton onClick={prevOpinions}>&larr;</NavButton>
          <NavButton onClick={nextOpinions}>&rarr;</NavButton>
        </OpinionsNav>
      </OpinionsContainer>
      <GridLines className="grid-lines-vertical line-on-very-top">
        <GridLine className="g-line-vertical line-left g-line-vertical-black" />
        <GridLine className="g-line-vertical line-center g-line-vertical-black" />
        <GridLine className="g-line-vertical line-right g-line-vertical-black" />
      </GridLines>
    </OpinionsSection>
  );
}

export default Opinions;