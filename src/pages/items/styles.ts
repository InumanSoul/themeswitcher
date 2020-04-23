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

export const ProductPhoto = styled.div`
  height: 190px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .25rem .25rem 0 0;
  overflow: hidden;
  background: #C4C4C8;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  svg{
      opacity: .7;
  }
`;

export const ProductInfo = styled.div`
  padding: 1.2rem;
`