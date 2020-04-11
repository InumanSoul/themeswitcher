import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
import Middleware from '../../components/Middleware/auth';

import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

import GlobablStyle from "../../styles/global";
import Header from "../../components/Header";
import { Container, Button } from "./styles";

function Dashboard() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const user = JSON.parse(localStorage.getItem('user') || "{}");

  return (
    <ThemeProvider theme={theme}>
      <GlobablStyle />
    <Middleware />
      <Header toggleTheme={toggleTheme} />
      <Container>
        <h2>Hola {user.name}!</h2>
        <p>Lorem ipsum dolor sit ammet consecteur</p>
        <Button>Loggout</Button>
      </Container>
    </ThemeProvider>
  );
}

export default Dashboard;
