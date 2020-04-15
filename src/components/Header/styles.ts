import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0 3px 10px ${props => props.theme.colors.shadows};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Brand = styled.div`
  display: flex;
  width: 80px;
`;