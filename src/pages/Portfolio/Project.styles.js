import styled from 'styled-components';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Link } from 'react-router-dom';

export const ProjectContainer = styled.div`
  width: 100%;
`;

export const HeaderImage = styled.div`
  width: 100%;
  height: 40vh;
  background-image: ${props => `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${props.$backgroundimage})`};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ theme }) => theme.borders.borderGold};
`;

export const HeaderTitle = styled.div`
  color: ${({ theme }) => theme.colors.golden};
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProjectContent = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const ProjectTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 1rem;
`;

export const ProjectDescription = styled.pre`
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2rem;
  white-space: pre-wrap;
  font-family: inherit;
  line-height: 1.5;
`;

export const GalleryContainer = styled.div`
  .image-gallery-slide img {
    height: 60vh;
    object-fit: cover;
  }

  .fullscreen .image-gallery-slide img {
    height: 100vh;
}

  .image-gallery-thumbnail {
    width: 80px;
    height: 60px;

    img {
      object-fit: cover;
    }
  }

  .image-gallery-swipe {
    border: ${({ theme }) => theme.borders.borderGold};
  }

  .image-gallery-left-nav .image-gallery-svg, 
  .image-gallery-right-nav .image-gallery-svg {
    height: 60px;
    width: 60px;
  }

  .image-gallery-fullscreen-button,
  .image-gallery-play-button,
  .image-gallery-left-nav,
  .image-gallery-right-nav {
    color: ${({ theme }) => theme.colors.golden};
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover,
  .image-gallery-thumbnail:focus {
    border: 2px solid ${({ theme }) => theme.colors.golden};
  }
`;