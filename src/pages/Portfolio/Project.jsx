import React from 'react';
import { useParams } from 'react-router-dom';
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
    GalleryContainer
} from './Project.styles';
import defaultImage from '../../assets/images/portfolio/top-img.jpg';

const fetchProject = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, slug] = queryKey;
    return sanityClient.fetch(`
    *[_type == "portfolio" && slug.current == $slug][0] {
      title,
      fullDescription,
      category,
      "galleryImages": galleryImages[].asset->{ url, metadata }
    }
  `, { slug });
};

const getGalleryItems = (images) =>
    images?.map(image => ({
        original: image.url,
        thumbnail: image.url,
    })) ?? [];

function Project() {
    const { slug } = useParams();
    const { data: project, error, isLoading } = useQuery({
        queryKey: ["project", slug],
        queryFn: fetchProject
    });

    if (isLoading) return <Loading />;
    if (error) return <div>Error loading project: {error.message}</div>;

    const mainImage = project.galleryImages?.[0]?.url ?? defaultImage;
    const galleryItems = getGalleryItems(project.galleryImages);

    return (
        <ProjectContainer>
            <HeaderImage $backgroundimage={mainImage}>
                <HeaderTitle>{project.title.toUpperCase()}</HeaderTitle>
            </HeaderImage>
            <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.fullDescription}</ProjectDescription>
                {galleryItems.length > 0 && (
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
                )}
            </ProjectContent>
        </ProjectContainer>
    );
}

export default Project;