import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;

  @media (min-width: 768px){
    justify-content: space-between;
  }
`;

export const Brand = styled.div`
  display: flex;
  width: 80px;
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  border: 2px solid white;
  background: #ebebeb;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h4`
  font-size: 1.6rem;
  text-transform: capitalize;
  font-weight: 600;
`;

export const SearchBox = styled.div`
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 1.2rem;
  background: ${(props) => props.theme.colors.cardbg};
  padding-left: 0.75rem;
  display: none;
  align-items: center;
  
  @media (min-width: 768px){
    display: flex;
  }
`;

export const InputSearch = styled.input`
  border: none;
  border-radius: 0 1.2rem 1.2rem 0;
  padding: 0.375rem 0.75rem;
  display: inline-block;
  width: 250px;
  height: 35px;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.cardbg};
  font-size: 1rem;
  transition: width .3s ease-in-out;

  :active,
  :focus {
    width: 330px;
    outline: 0;
  }
`;