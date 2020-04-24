import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -3px 10px ${props => props.theme.colors.shadows};
  background: ${props => props.theme.colors.sidemenu};
  display: flex;
  flex-direction: row;
  padding: 10px;

  @media (min-width: 768px) {
    width: 210px;
    height: 100vh;
    position: fixed;
    top: 0;
    box-shadow: none;
    flex-direction: column;
    padding: 25px;
  }

  @media (min-width: 1200px) {
    width: 210px;
    height: 100vh;
    position: fixed;
    top: 0;
    flex-direction: column;
  }
`;

export const SwitchEmpresa = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 210px;
  padding: 20px 25px;
  display: none;
  flex-direction: column;
  cursor: pointer;
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MenuLink = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  align-items: center;
  justify-content: space-around;


  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    a{
      font-size: inherit !important;
      display: block !important;

      svg{
        display: none;
      }
    }

    a:nth-of-type(1n+6){
      display: block !important;
    }
  }

  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    padding: .7rem 0;
    font-size: small;
    display: flex;
    align-items: center;
    flex-direction: column;

    svg{
        font-size: large;
        margin-bottom: 0.275rem;
      }
  }

  a:nth-of-type(1n+6){
    display: none;
  }
`;