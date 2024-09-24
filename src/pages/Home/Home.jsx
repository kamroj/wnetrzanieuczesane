import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';
import sanityClient from '../../SanityClient';
import Loading from '../Loading/Loading';
import Gallery from './Gallery/Gallery';
import Quote from './Quote/Quote';
import AboutProjects from './AboutProjects/AboutProjects';
import AboutOffer from './AboutOffer/AboutOffer';
import AboutCompany from './AboutCompany/AboutCompany';
import { HomeContainer } from './Home.styles';
import Opinions from './Opinions/Opinions';

const fetchHomeContent = async () => {
  return sanityClient.fetch(`
    *[_type == "home"][0] {
      slides[]{
        "url": asset->url
      },
      aboutProjects,
      aboutCompany{
        ...,
        image{
          asset->{
            url
          }
        }
      },
      aboutOffer,
      opinions,
      quote
    }
  `);
};

function Home() {
  const navigate = useNavigate();

  const {
    data: homeContent,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["homeContent"],
    queryFn: fetchHomeContent,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading content: {error.message}</div>;

  const images = homeContent?.slides?.filter(slide => slide.url).map(slide => ({
    original: slide.url,
    thumbnail: slide.url,
  })) || [];

  return (
    <HomeContainer>
      {images.length > 0 && <Gallery images={images} />}
      {homeContent?.quote && <Quote content={homeContent.quote} />}
      {homeContent?.aboutProjects && <AboutProjects content={homeContent.aboutProjects} onNavigate={() => navigate("/portfolio")} />}
      {homeContent?.aboutOffer && <AboutOffer content={homeContent.aboutOffer} onNavigate={() => navigate("/offer")} />}
      {homeContent?.aboutCompany && <AboutCompany content={homeContent.aboutCompany} onNavigate={() => navigate("/about")} />}
      {homeContent?.opinions && homeContent.opinions.length > 0 && <Opinions opinions={homeContent.opinions} />}
    </HomeContainer>
  );
}

export default Home;