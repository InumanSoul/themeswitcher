import styled from 'styled-components';

export const LoginCard = styled.div`
  padding: 1.2rem;
  width: 95%;
  border-radius: .25rem;
  background-color: ${props => props.theme.colors.cardbg};
  border: 1px solid ${props => props.theme.colors.borderColor};

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  justify-content: center;
  align-items: center;
  background: url(${process.env.PUBLIC_URL + '/img/auth.jpg'});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;