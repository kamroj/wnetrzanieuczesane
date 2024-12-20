import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import topImg from "../../assets/images/portfolio/portfolio-header-img.jpg";
import { GridLine, GridLines } from '../../components/GridLines/GridLines.styles';
import PageHeader from '../../components/PageHeader/PageHeader';
import sanityClient from '../../SanityClient';
import Loading from '../Loading/Loading';
import {
  KeyInfoItem,
  KeyInfoLabel,
  KeyInfoValue,
  PaginationButton,
  PaginationContainer,
  PaginationEllipsis,
  PortfolioContainer,
  ProjectDetails,
  ProjectImage,
  ProjectItem,
  ProjectKeyInfo,
  ProjectsContainer,
  ProjectTitle
} from './Portfolio.styles';
import { useRef } from "react";

const PROJECTS_PER_PAGE = 5;
const MIN_PAGE_NUMBER = 1;
const MAX_VISIBLE_BUTTONS = 2;
const ELLIPSIS_THRESHOLD = 2;

function Portfolio() {
  const projectsContainerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get('page') || '1', 10);

  const { data: projects, error, isLoading } = useQuery({
    queryKey: ["portfolio"],
    queryFn: fetchProjects,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Błąd podczas ładowania projektów: {error.message}</div>;

  const { currentProjects, totalPages } = getPaginatedProjects(projects, currentPage);
  const paginate = (pageNumber) => {
    projectsContainerRef.current?.scrollIntoView({ block: 'start', inline: 'nearest' });
    window.scrollBy(0, -50);
    navigate(`/portfolio?page=${pageNumber}`);
  }

  return (
    <PortfolioContainer>
      <PageHeader title="PROJEKTY" backgroundImage={topImg} />
      <ProjectsContainer ref={projectsContainerRef}>
        <GridLines className="line-on-very-bottom">
          <GridLine />
        </GridLines>
        {renderProjects(currentProjects)}
      </ProjectsContainer>
      <PaginationContainer aria-label="Paginacja">
        <GridLines className="line-on-very-bottom">
          <GridLine />
        </GridLines>
        {renderPaginationButtons(currentPage, totalPages, paginate)}
      </PaginationContainer>
    </PortfolioContainer>
  );
}

function fetchProjects() {
  return sanityClient.fetch(
    `*[_type == "portfolio"] | order(order asc, createdAt desc) {
      title,
      slug,
      "mainImage": galleryImages[0].asset->,
      shortDescription,
      order,
      createdAt,
      area,
      buildingType,
      roomCount,
      purpose
    }`
  );
}

function getPaginatedProjects(projects, currentPage) {
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  return { currentProjects, totalPages };
}

function renderProjects(projects) {
  return projects.map((project) => (
    <ProjectItem key={project.slug.current}>
      <Link to={`/portfolio/${project.slug.current}`}>
        <ProjectImage
          src={project.mainImage?.url || topImg}
          alt={project.title}
        />
        <ProjectDetails>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectKeyInfo>
            <KeyInfoItem>
              <KeyInfoLabel>Powierzchnia:</KeyInfoLabel>
              <KeyInfoValue>{project.area}</KeyInfoValue>
            </KeyInfoItem>
            <KeyInfoItem>
              <KeyInfoLabel>Budownictwo:</KeyInfoLabel>
              <KeyInfoValue>{project.buildingType}</KeyInfoValue>
            </KeyInfoItem>
            <KeyInfoItem>
              <KeyInfoLabel>Liczba pokoi:</KeyInfoLabel>
              <KeyInfoValue>{project.roomCount}</KeyInfoValue>
            </KeyInfoItem>
            <KeyInfoItem>
              <KeyInfoLabel>Przeznaczenie:</KeyInfoLabel>
              <KeyInfoValue>{project.purpose}</KeyInfoValue>
            </KeyInfoItem>
          </ProjectKeyInfo>
        </ProjectDetails>
      </Link>
    </ProjectItem>
  ));
}

function renderPaginationButtons(currentPage, totalPages, paginate) {
  const buttons = [];

  buttons.push(renderNavigationButton('prev', currentPage, totalPages, paginate));
  buttons.push(...renderPageButtons(currentPage, totalPages, paginate));
  buttons.push(renderNavigationButton('next', currentPage, totalPages, paginate));

  return buttons;
}

function renderNavigationButton(
  type,
  currentPage,
  totalPages,
  paginate
) {
  const isPrev = type === 'prev';
  const pageNumber = isPrev
    ? Math.max(MIN_PAGE_NUMBER, currentPage - 1)
    : Math.min(totalPages, currentPage + 1);
  const isDisabled = isPrev
    ? currentPage === MIN_PAGE_NUMBER
    : currentPage === totalPages;

  return (
    <PaginationButton
      key={type}
      onClick={() => {
        paginate(pageNumber)}
      }
      disabled={isDisabled}
      aria-label={isPrev ? "Previous page" : "Next page"}
    >
      {isPrev ? '\u003C' : '\u003E'}
    </PaginationButton>
  );
}

function renderPageButtons(
  currentPage,
  totalPages,
  paginate
) {
  const buttons = [];

  if (totalPages <= MAX_VISIBLE_BUTTONS + 2) {
    for (let i = MIN_PAGE_NUMBER; i <= totalPages; i++) {
      buttons.push(renderPageButton(i, currentPage, paginate));
    }
  } else {
    buttons.push(renderPageButton(MIN_PAGE_NUMBER, currentPage, paginate));

    if (currentPage > ELLIPSIS_THRESHOLD + 1) {
      buttons.push(<PaginationEllipsis key="ellipsis1">...</PaginationEllipsis>);
    }

    const startPage = Math.max(MIN_PAGE_NUMBER + 1, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(renderPageButton(i, currentPage, paginate));
    }

    if (currentPage < totalPages - ELLIPSIS_THRESHOLD) {
      buttons.push(<PaginationEllipsis key="ellipsis2">...</PaginationEllipsis>);
    }

    if (currentPage < totalPages) {
      buttons.push(renderPageButton(totalPages, currentPage, paginate));
    }
  }

  return buttons;
}

function renderPageButton(
  pageNumber,
  currentPage,
  paginate
) {
  return (
    <PaginationButton
      key={pageNumber}
      onClick={() => paginate(pageNumber)}
      $active={currentPage === pageNumber}
      aria-label={`Page ${pageNumber}`}
      aria-current={currentPage === pageNumber ? 'page' : undefined}
    >
      {pageNumber}
    </PaginationButton>
  );
}

export default Portfolio;