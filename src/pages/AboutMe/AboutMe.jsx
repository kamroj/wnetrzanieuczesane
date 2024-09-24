import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import sanityClient from '../../SanityClient';
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
import ArchitectButton from '../../components/button/ArchitectButton';
import Loading from '../Loading/Loading';

const fetchAboutMeContent = async () => {
  return sanityClient.fetch(`
    *[_type == "aboutMe"][0] {
      title,
      "topImageUrl": topImage.asset->url,
      "profileImageUrl": profileImage.asset->url,
      content
    }
  `);
};

const AboutMe = () => {
  const navigate = useNavigate();
  const { data: aboutMeContent, error, isLoading } = useQuery({
    queryKey: ["aboutMeContent"],
    queryFn: fetchAboutMeContent,
  });

  const handleContactClick = () => {
    navigate('/contact');
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading content: {error.message}</div>;

  return (
    <AboutMeContainer>
      <PageHeader title={aboutMeContent.title || "O MNIE"} backgroundImage={aboutMeContent.topImageUrl} />
      <ContentWrapper>
        <ImageContainer>
          <StyledImage src={aboutMeContent.profileImageUrl} alt="Weronika Rojek" />
        </ImageContainer>
        <TextContainer>
          <Content>
            {aboutMeContent.content.split('\n').map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                <br />
              </React.Fragment>
            ))}
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