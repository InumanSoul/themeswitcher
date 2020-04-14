import styled from 'styled-components';

export const CustomInput = styled.input`
  border: 1px solid ${props => props.theme.colors.borderColor};
  padding: 0.375rem .75rem;
  border-radius: .25rem;
  display: inline-block;
  width: 100%;
  height: 40px;
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
  width: 30%;
  border-radius: .25rem;
  background-color: ${props => props.theme.colors.cardbg};
  border: 1px solid ${props => props.theme.colors.borderColor};
`;

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  justify-content: center;
  align-items: center;
`;