import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OfferContainer = styled.div`
  width: 100%;
`;

export const OfferWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainLight};
  padding: 2rem 0;
`;

export const OfferContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    flex-direction: column;
  }
`;

export const OfferSection = styled.div`
  width: 48%;
  margin-bottom: 2rem;
  border: ${({ theme }) => theme.borders.borderGold};
  border-radius: 10px;
  padding: 2rem;
  box-sizing: border-box;
  background-color: ${({ theme, $isComprehensive }) => 
    $isComprehensive ? "#fffbf2" : theme.colors.mainLight };
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    width: 100%;
  }
`;

export const OfferTitle = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.golden};
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase4}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    font-size: 1.4rem;
  }
`;

export const OfferList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const OfferItem = styled.li`
  margin-bottom: 1.5rem;
`;

export const OfferItemTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  margin-bottom: 0.5rem;

  &:before {
    content: '✓';
    color: ${({ theme }) => theme.colors.golden};
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase4}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    font-size: 0.95rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    font-size: 0.9rem;
  }
`;

export const OfferItemContent = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.black};
  padding-left: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase4}) {
    font-size: 0.85rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    font-size: 0.75rem;
  }
`;

export const ContactInfo = styled.div`
  text-align: center;
  padding: 2rem 0rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase4}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    font-size: 0.95rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    font-size: 0.9rem;
  }
`;

export const ContactLink = styled(Link)`
  color: ${({ theme }) => theme.colors.golden};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;