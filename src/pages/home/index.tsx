import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";

import light from "../../styles/themes/light";

import GlobalStyle from "../../styles/global";
import Header from "../../components/Header/public";
import Landing from "./landing";

function Home() {
  const [theme] = usePersistedState<DefaultTheme>("theme", light);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Landing />
    </ThemeProvider>
  );
}

export default Home;
