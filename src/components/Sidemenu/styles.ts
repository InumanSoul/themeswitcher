import styled from "styled-components";

export const Container = styled.div`
  width: 210px;
  height: 100vh;
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.sidemenu};
  display: flex;
  flex-direction: column;
  padding: 20px;
`;