import styled from "styled-components";

export const Container = styled.div`
  width: 990px;
  padding: 40px 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.button`
  padding: 0.375rem 0.75rem;
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
