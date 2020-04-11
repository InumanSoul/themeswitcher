import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";

import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

import GlobablStyle from "../../styles/global";
import Header from "../../components/Header";
import { Container } from "./styles";

function Home() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobablStyle />
      <Header toggleTheme={toggleTheme} />
      <Container>
        <h2>Home Page</h2>
        <p>Lorem ipsum dolor sit ammet consecteur</p>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
