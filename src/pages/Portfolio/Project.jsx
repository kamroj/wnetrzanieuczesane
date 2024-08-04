import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import sanityClient from '../../SanityClient';
import Loading from '../Loading/Loading';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {
    ProjectContainer,
    ProjectContent,
    ProjectTitle,
    ProjectDescription,
    GalleryContainer
} from './Project.styles';
import PageHeader from '../../components/PageHeader/PageHeader';
import { useIsMobile } from '../../hooks/useIsMobile';

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
    const isMobile = useIsMobile();
    const { data: project, error, isLoading } = useQuery({
        queryKey: ["project", slug],
        queryFn: fetchProject
    });

    if (isLoading) return <Loading />;
    if (error) return <div>Error loading project: {error.message}</div>;

    const mainImage = project.galleryImages?.[0]?.url;
    const galleryItems = getGalleryItems(project.galleryImages);

    return (
        <ProjectContainer>
            <PageHeader title={project.title.toUpperCase()} backgroundImage={mainImage} />
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
                            slideDuration={isMobile(750) ? 300 : 800}
                            slideInterval={5000}
                        />
                    </GalleryContainer>
                )}
            </ProjectContent>
        </ProjectContainer>
    );
}

export default Project;