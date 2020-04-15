import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Muli', sans-serif;
    }

    body{
        background: ${(props) => props.theme.colors.background};
        font-size: 1rem;
        font-family: 'Muli', sans-serif;
        font-weight: 400;
        color: ${(props) => props.theme.colors.text};
        font-family: sans-serif;
    }

    h1{
        font-family: 'Muli', sans-serif;
        font-size: 2.2rem;
        font-weight: 800;
    }

    h2{
        font-family: 'Muli', sans-serif;
        font-size: 2rem;
        font-weight: 800;
    }

    h3{
        font-family: 'Muli', sans-serif;
        font-size: 1.75rem;
        font-weight: 800;
    }

    a{
        color: ${(props) => props.theme.colors.primary};
    }

    /* Body */
    .wrapper {
        position: relative;
        top: 0;
        height: 100vh;
        display: flex;
    }

    .content {
        width: 100%;
    }

    .link-menu {
        display: flex;
        flex-direction: column;
        color: ${(props) => props.theme.colors.text};

        a{
            text-decoration: none;
            color: ${(props) => props.theme.colors.text};
            padding: .7rem 0;
        }
    }

    .brand-mini {
        width: 28px;
        height: auto;
        margin-bottom: 20px;
    }

    .brand-md {
        width: auto;
        height: 35px;
    }

    .switch-empresa{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 210px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    /* Helpers */
    .bg-light {
        background: ${(props) => props.theme.colors.cardbg};
    }

    .bg-primary {
        background: ${(props) => props.theme.colors.primary};;
    }

    .d-block {
        display: block;
    }

    .p4{
        padding: 1.2rem;
    }

    .mt4{
        margin-top: 1.2rem;
    }

    .mb4{
        margin-bottom: 1.2rem;
    }

    .mv4{
        margin-top: 1.2rem;
        margin-bottom: 1.2rem;
    }

    .ml3{
        margin-left: 1rem;
    }

    .text-primary {
        color: ${(props) => props.theme.colors.primary};
    }

    .text-muted {
        color: ${(props) => props.theme.colors.text};
        opacity: 0.5;
    }

    .text-center {
        text-align: center;
    }
    
    .text-bold {
        font-weight: 600;
    }

    .text-reset{
        color: inherit!important;
    }

    .text-decoration-none {
        text-decoration: none !important;
    }

    .btn-block{
        width: 100%;
    }

    .shadow{
        box-shadow: 0 5px 10px ${(props) => props.theme.colors.shadows};
    }

    .rounded {
        border-radius: .45rem;
    }
`;

export const Button = styled.button`
  padding: 0.375rem 0.75rem;
  background: ${(props) => props.theme.colors.primary};
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

export const Container = styled.div`
  width: 990px;
  padding: 40px 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
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
`;

export const Label = styled.label`
  margin-bottom: .375rem;
  font-weight: 600;
  font-size: 14px;
  display: block;
`;