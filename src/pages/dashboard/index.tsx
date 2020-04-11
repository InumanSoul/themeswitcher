import React from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
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

  const history = useHistory();
  const token = localStorage.getItem('app_token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token,
  }
  const handleLoggout = () => {
    axios
      .post("http://127.0.0.1:8000/api/logout", token,{
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("app_token");
        localStorage.removeItem("user");

        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
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
        <Button onClick={e => {e.preventDefault(); handleLoggout()}}>Loggout</Button>
      </Container>
    </ThemeProvider>
  );
}

export default Dashboard;
