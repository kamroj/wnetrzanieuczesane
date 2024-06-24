import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';
import { fetchSlides } from '../../api/api';
import Loading from '../Loading/Loading';
import Gallery from './Gallery/Gallery';
import Quote from './Quote/Quote';
import AboutProjects from './AboutProjects/AboutProjects';
import AboutOffer from './AboutOffer/AboutOffer';
import AboutCompany from './AboutCompany/AboutCompany';
import { HomeContainer } from './Home.styles';
import Opinions from './Opinions/Opinions';

function Home() {
  const navigate = useNavigate();

  const {
    data: images,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["slides"],
    queryFn: fetchSlides,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading images: {error.message}</div>;

  return (
    <HomeContainer>
      <Gallery images={images} />
      <Quote />
      <AboutProjects onNavigate={() => navigate("/portfolio")} />
      <AboutOffer onNavigate={() => navigate("/offer")} />
      <AboutCompany onNavigate={() => navigate("/about")} />
      <Opinions />
    </HomeContainer>
  );
}

export default Home;