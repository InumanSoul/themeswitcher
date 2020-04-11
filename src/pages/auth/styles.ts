import styled from 'styled-components';

export const CustomInput = styled.input`
  border: 1px solid ${props => props.theme.colors.borderColor};
  padding: 0.375rem .75rem;
  border-radius: .25rem;
  display: inline-block;
  width: 100%;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;

  :active, :focus {
    outline: 0;
    border: 1px solid ${props => props.theme.colors.primary};
  }

`
export const InputLabel = styled.label`
  margin-bottom: .5rem;
  display: block;
`;

export const LoginCard = styled.div`
  padding: 1.2rem;
  margin-top: 90px;
  width: 240px;
  border-radius: .25rem;
  background-color: ${props => props.theme.colors.cardbg};
  border: 1px solid ${props => props.theme.colors.borderColor};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  padding: .375rem .75rem;
  background: #2a55d9;
  color: white;
  border: 2px solid transparent;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  
  :disabled {
    opacity: 0.5;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;