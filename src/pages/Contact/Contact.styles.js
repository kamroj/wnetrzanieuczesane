import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
`;

export const ContactForm = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.mainLight};
  border: ${({ theme }) => theme.borders.borderGold};
  box-sizing: border-box; 
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.golden};
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box; 
  font-family: inherit; 
  font-size: inherit; 
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.golden};
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 150px;
  box-sizing: border-box; 
  resize: vertical; 
  font-family: inherit;
  font-size: inherit;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

export const SuccessMessage = styled.div`
  color: green;
  margin-bottom: 1rem;
`;

export const RecaptchaWrapper = styled.div`
  margin-bottom: 1.5rem;
`;