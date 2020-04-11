import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
// Themes
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
// GlobalStyle and header
import GlobablStyle from "../../styles/global";
import Header from "../../components/Header";
import { Container, InputLabel, CustomInput, Button, LoginCard, FormGroup } from "./styles";

const Login = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  // Theme toggler
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsBbuttonDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (username.trim() && password.trim()){
      setIsBbuttonDisabled(false);
    } else{
      setIsBbuttonDisabled(true);
    }
  }, [username, password]);

  const handleLogin = () => {
    const formData = new FormData();
    formData.append('email', username);
    formData.append('password', password);
    
    if (username !== null && password !== null) {
      axios
        .post("http://127.0.0.1:8000/api/login", formData)
        .then((res) => {
          // console.log(res.data);
          localStorage.setItem("app_token", res.data.success.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));

          history.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });

      // console.log('Login successfully');

    } else {

      console.log("Fill the fucking credentials");
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.keyCode === 13 || e.which === 13) {
      isButtonDisabled || handleLogin();
    }
  };
  
  return (
    <ThemeProvider theme={theme}>
      <GlobablStyle />
      <Header toggleTheme={toggleTheme} />
      <Container>
        <LoginCard>
          <h3>Login</h3>
          <form>
            <FormGroup>
              <InputLabel htmlFor="email">Email</InputLabel>
              <CustomInput
                id="email"
                type="email"
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor="password">Contraseña</InputLabel>
              <CustomInput
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
            </FormGroup>
            <Button onClick={e => {e.preventDefault(); handleLogin()}} disabled={isButtonDisabled}>
              Iniciar sesión
            </Button>
          </form>
        </LoginCard>
      </Container>
    </ThemeProvider>
  );
}

export default Login;