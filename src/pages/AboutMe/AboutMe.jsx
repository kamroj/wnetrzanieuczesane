import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AboutMeContainer,
  ContentWrapper,
  ImageContainer,
  StyledImage, 
  TextContainer,
  Content,
  ButtonContainer
} from './AboutMe.styles';
import PageHeader from '../../components/PageHeader/PageHeader';
import { GridLine, GridLines } from '../../components/GridLines/GridLines.styles';
import ArchitectButton from '../../components/button/ArchitectButton';
import topImg from '../../assets/images/living-room.jpg';
import profileImg from '../../assets/images/aboutme/werka.jpg';

const AboutMe = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <AboutMeContainer>
      <PageHeader title="O MNIE" backgroundImage={topImg} />
      <ContentWrapper>
        <GridLines className="line-on-very-bottom">
          <GridLine />
        </GridLines>
        <ImageContainer>
          <StyledImage src={profileImg} alt="Weronika Rojek" />
        </ImageContainer>
        <TextContainer>
          <Content>
            Zakup mieszkania czy budowa domu to jedno z ważniejszych wydarzeń w życiu, niosące ze sobą wiele radości, ale także sporo stresu. Moją ideą działania jest zostać Twoim nieocenionym pomocnikiem w procesie realizacji marzeń o idealnej przestrzeni.
          </Content>
          <Content>
            Przez moje zaangażowanie, doświadczenie i pozytywne nastawienie proces projektowania i realizacji wnętrza jest płynny i bezstresowy. Nazywam się Weronika Rojek i uwielbiam tworzyć przestrzenie przytulne, przepełnione domowym ciepłem. Dzięki mojej wiedzy, doświadczeniu i kreatywności stworzę dla Ciebie przestrzeń, która jest nie tylko estetyczna, ale także komfortowa i przyjazna do codziennego życia. Jestem tu po to aby pomóc Ci zrealizować marzenia o idealnym domu!
          </Content>
          <ButtonContainer>
            <ArchitectButton name="KONTAKT" onClick={handleContactClick} />
          </ButtonContainer>
        </TextContainer>
      </ContentWrapper>
    </AboutMeContainer>
  );
};

export default AboutMe;