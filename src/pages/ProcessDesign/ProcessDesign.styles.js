import styled from 'styled-components';
import { GridLines, GridLine } from '../../components/GridLines/GridLines.styles';

export const ProcessContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainLight};
  overflow-x: hidden;
`;

export const GridLineWrapper = styled.div`
  position: relative;
`;

export const ProcessContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
`;

export const ProcessStep = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 2rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    flex-direction: column;
  }
`;

export const StepDivider = styled.div`
  position: relative;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.goldenLight};
  margin: 2rem 0;
`;

export const StepDiamond = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.mainLight};
  border: 1px solid ${({ theme }) => theme.colors.golden};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepNumber = styled.span`
  transform: rotate(-45deg);
  color: ${({ theme }) => theme.colors.golden};
  font-weight: bold;
  font-size: 1.2rem;
`;

export const StepContent = styled.div`
  flex: 1;
  width: 50%;
  padding-right: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    width: 100%;
    padding: 0 0 1rem 0;
  }
`;

export const StepTitle = styled.div`
  color: ${({ theme }) => theme.colors.golden};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

export const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.6;
`;

export const StepImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  padding-left: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    width: 100%;
    padding: 0;
  }
`;

export const StepImage = styled.img`
  max-width: 300px;
  max-height: 350px;
  width: auto;
  height: auto;
  object-fit: contain;
  border: ${({ theme }) => theme.borders.borderGold};

  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    max-width: 100%;
  }
`;

export const ProcessGridLines = styled(GridLines)`
  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    display: none;
  }
`;

export const ProcessGridLine = styled(GridLine)`
  @media (max-width: ${({ theme }) => theme.breakpoints.phase3}) {
    display: none;
  }
`;