import React, { useEffect } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../../utils/usePersistedState';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import GlobablStyle from "../../styles/global";
import Header from "../../components/Header/public";

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
	
	useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem('theme') || "{}");
    if(localTheme.title === 'light'){
			setTheme(light);
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(dark);
      } else {
        setTheme(light);
      }
    }
		// window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ? setTheme(dark) : localTheme ? setTheme(localTheme) : setTheme(dark);
	})

  return (
    <ThemeProvider theme={theme}>
      <GlobablStyle />
        <Header/>
        {children}
    </ThemeProvider>
  )
}

export default Layout;
