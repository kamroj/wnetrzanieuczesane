// src/pages/Portfolio/Portfolio.jsx
import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import sanityClient from '../../SanityClient';
import { 
  PortfolioContainer, 
  HeaderImage, 
  HeaderTitle, 
  ProjectsContainer, 
  ProjectItem, 
  ProjectImage, 
  ProjectDetails, 
  ProjectTitle, 
  ProjectDescription,
  PaginationContainer,
  PaginationButton
} from './Portfolio.styles';
import Loading from '../Loading/Loading';

const PROJECTS_PER_PAGE = 5;

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: projects, error, isLoading } = useQuery({
    queryKey: ["portfolio"],
    queryFn: () => sanityClient.fetch(`
      *[_type == "portfolio"] {
        title,
        slug,
        mainImage {
          asset-> {
            _id,
            url
          }
        },
        shortDescription
      }
    `),
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading projects: {error.message}</div>;

  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <PortfolioContainer>
      <HeaderImage>
        <HeaderTitle>PROJEKTY</HeaderTitle>
      </HeaderImage>
      <ProjectsContainer>
        {currentProjects.map((project) => (
          <ProjectItem key={project.slug.current}>
            <ProjectImage src={project.mainImage.asset.url} alt={project.title} />
            <ProjectDetails>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.shortDescription}</ProjectDescription>
            </ProjectDetails>
          </ProjectItem>
        ))}
      </ProjectsContainer>
      <PaginationContainer>
        {Array.from({ length: Math.ceil(projects.length / PROJECTS_PER_PAGE) }, (_, i) => (
          <PaginationButton key={i} onClick={() => paginate(i + 1)} $active={currentPage === i + 1}>
            {i + 1}
          </PaginationButton>
        ))}
      </PaginationContainer>
    </PortfolioContainer>
  );
}

export default Portfolio;