import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/pro-regular-svg-icons";
// Themes
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
// GlobalStyle and header
import GlobablStyle, { Button, FormGroup, Label, Input } from "../../styles/global";
import Header from "../../components/Header";
import { Container, LoginCard } from "./styles";

const Login = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  // Theme toggler
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsBbuttonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    formData.append('email', username);
    formData.append('password', password);
    
    
    if (username !== null && password !== null) {
      axios
        .post("http://127.0.0.1:8000/api/login", formData)
        .then((res) => {
          localStorage.setItem("app_token", res.data.success.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          history.push("/sucursales");
        })
        .catch((error) => {
          console.log(error);
          window.alert('Usuario y/o contraseña no valido');
          setIsLoading(false);
        });
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
          <div className="mb4">
            <h3>Inicia sesión</h3>
            <p>Ingresá tus datos para iniciar sesión</p>
          </div>
          <form className="mb4">
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Ingrese su email"
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Ingrese su contraseña"
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
            </FormGroup>
            <Button
              onClick={(e) => {e.preventDefault(); handleLogin();}}
              disabled={isButtonDisabled}
              className="btn-block"
            >
              {isLoading ? (<FontAwesomeIcon icon={faCircleNotch} spin={true}/>) : "Iniciar sesión"}
            </Button>
          </form>
          <div className="mv4">
            ¿No tenés cuenta? <Link to="/register">Registrate</Link>
          </div>
          <small className="text-muted">
            Al hacer click en Iniciar Sesión, aceptas los Términos y condiciones
            y la Política de Printit.
          </small>
        </LoginCard>
      </Container>
    </ThemeProvider>
  );
}

export default Login;