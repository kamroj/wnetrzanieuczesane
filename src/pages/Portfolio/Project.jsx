// src/pages/Project/Project.jsx
import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import sanityClient from '../../SanityClient';
import Loading from '../Loading/Loading';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { 
  ProjectContainer, 
  HeaderImage, 
  HeaderTitle, 
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  GalleryContainer,
  BackLink
} from './Project.styles';

function Project() {
  const { slug } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get('page') || '1';

  const { data: project, error, isLoading } = useQuery({
    queryKey: ["project", slug],
    queryFn: () => sanityClient.fetch(`
      *[_type == "portfolio" && slug.current == $slug][0] {
        title,
        fullDescription,
        category,
        "galleryImages": galleryImages[].asset->{ url, metadata }
      }
    `, { slug }),
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading project: {error.message}</div>;

  const galleryItems = project.galleryImages.map(image => ({
    original: image.url,
    thumbnail: image.url,
  }));

  return (
    <ProjectContainer>
      <HeaderImage backgroundImage={project.galleryImages[0].url}>
        <HeaderTitle>{project.title}</HeaderTitle>
      </HeaderImage>
      <ProjectContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.fullDescription}</ProjectDescription>
        <GalleryContainer>
          <ImageGallery 
            items={galleryItems} 
            showPlayButton={false}
            showFullscreenButton={true}
            showNav={true}
            autoPlay={true}
            slideDuration={800}
            slideInterval={5000}
          />
        </GalleryContainer>
      </ProjectContent>
    </ProjectContainer>
  );
}

export default Project;