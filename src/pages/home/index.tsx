import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";

import light from "../../styles/themes/light";

import GlobablStyle from "../../styles/global";
import Header from "../../components/Header/public";
import { Container } from "./styles";

function Home() {
  const [theme] = usePersistedState<DefaultTheme>("theme", light);

  return (
    <ThemeProvider theme={theme}>
      <GlobablStyle />
      <Header />
      <Container>
        <h2>Home Page</h2>
        <p>Lorem ipsum dolor sit ammet consecteur</p>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
