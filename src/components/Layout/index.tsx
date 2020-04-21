import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
import Middleware from '../../components/Middleware/auth';

import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

import GlobablStyle, { Wrapper, Content } from "../../styles/global";
import Sidemenu from "../../components/Sidemenu";
import Header from "../../components/Header/app"

type Props = {
  /** standard children prop: accepts any valid React Node */
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobablStyle />
      <Middleware />
      <Wrapper>
        <Sidemenu/>
        <Content>
          <Header toggleTheme={toggleTheme} />
          {children}
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Layout;
