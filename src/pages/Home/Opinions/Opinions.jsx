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

const OpinionsExample = [
  {
    id: 1,
    text: "Jestem bardzo zadowolony z usług tej firmy. Profesjonalizm i zaangażowanie zespołu przekroczyły moje oczekiwania. Polecam każdemu, kto szuka niezawodnego partnera w biznesie.",
    author: "Jan Kowalski",
    image: "/path/to/your/image.jpg"
  },
  {
    id: 2,
    text: "Usługi tej firmy są na najwyższym poziomie. Zespół zawsze reaguje szybko i skutecznie na nasze potrzeby. Zdecydowanie polecam ich usługi każdemu, kto ceni sobie profesjonalizm i jakość.",
    author: "Anna Nowak",
    image: "/path/to/your/image.jpg"
  }
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
        <OpinionsTitle>Opinie naszych Klientów</OpinionsTitle>
        <OpinionsItem>
          <OpinionsContent>
            <OpinionsText>
              {Opinions.text}
            </OpinionsText>
            <OpinionsAuthor>
              <AuthorName>{Opinions.author}</AuthorName>
            </OpinionsAuthor>
          </OpinionsContent>
          <OpinionsImage src={Opinions.image} alt={Opinions.author} />
        </OpinionsItem>
        <OpinionsNav>
          <NavButton onClick={prevOpinions}>&larr;</NavButton>
          <NavButton onClick={nextOpinions}>&rarr;</NavButton>
        </OpinionsNav>
      </OpinionsContainer>
      <GridLines>
        <GridLine/>
      </GridLines>
    </OpinionsSection>
  );
}

export default Opinions;