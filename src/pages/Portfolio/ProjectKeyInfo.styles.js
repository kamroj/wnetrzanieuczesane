import styled from 'styled-components';

export const KeyInfoContainer = styled.div`
  margin-bottom: 2rem;
`;

export const KeyInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.phase2}) {
    grid-template-columns: 1fr;
    gap: 0.2rem;
  }
`;

export const KeyInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(201, 146, 8, 0.45);
`;

export const KeyInfoLabel = styled.span`
  color: rgb(201 146 8);
  font-weight: 600;
`;

export const KeyInfoValue = styled.span`
  color: ${({ theme }) => theme.colors.black};
  text-align: right;
`;