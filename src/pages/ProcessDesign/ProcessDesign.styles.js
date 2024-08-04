import styled from 'styled-components';

export const ProcessContainer = styled.div`
  width: 100%;
`;

export const ProcessContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const ProcessStep = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
`;

export const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.golden};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1rem;
`;

export const StepContent = styled.div`
  flex: 1;
`;

export const StepTitle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0.5rem;
`;

export const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

export const AdditionalInfo = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const ContactEmail = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.golden};
`;