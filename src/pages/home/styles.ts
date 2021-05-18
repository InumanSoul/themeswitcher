import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 40px 15px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 992px) {
    width: 990px;
  }

  @media (min-width: 1200px) {
    width: 1000px;
  }
`;

export const DisplayText = styled.h1`
  font-size: 3rem;
`;

export const HeroSection = styled.div`
  padding: 130px 0;
  text-align: center;
`;

export const UnderControlSect = styled.div`
  padding: 130px 0;
`;

export const EasierSect = styled.div`
  padding: 130px 0;
`;

export const PlansSect = styled.div`
  padding: 130px 0;
`;

export const Footer = styled.footer`
  padding: 50px 0 30px;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  background: ${props => props.theme.colors.darkBackground};
`;