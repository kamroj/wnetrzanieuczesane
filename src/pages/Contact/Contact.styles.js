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

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.golden};
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 0.65rem auto;
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