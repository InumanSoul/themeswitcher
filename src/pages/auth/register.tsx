import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
// Themes
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
// GlobalStyle and header
import GlobablStyle, { Button, FormGroup, Input, Label } from "../../styles/global";
import Header from "../../components/Header";
import { Container, LoginCard } from "./styles";

const Register = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  // Theme toggler
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsBbuttonDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (username.trim() && email.trim() && password.trim()){
      setIsBbuttonDisabled(false);
    } else{
      setIsBbuttonDisabled(true);
    }
  }, [username, email, password]);

  const handleLogin = () => {
    const formData = new FormData();
    formData.append('name', username);
    formData.append('email', email);
    formData.append('password', password);
    
    if (username !== null && email !== null && password !== null) {
      axios
        .post("http://127.0.0.1:8000/api/register", formData)
        .then((res) => {
          history.push("/login");
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });

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
          <div className="mb4">
            <h3>Crea tu cuenta</h3>
            <p>Registrate gratis con tu correo</p>
          </div>
          <form className="mb4">
            <FormGroup>
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                type="name"
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
            </FormGroup>
            <Button onClick={e => {e.preventDefault(); handleLogin()}} disabled={isButtonDisabled} className="btn-block">
              Crear cuenta
            </Button>
          </form>
          <div className="mv4">
            ¿Tenés cuenta? <Link to="/login">Inicia sesión</Link>
          </div>
          <div>
            <small className="text-muted">Al hacer click en Crear cuenta, aceptas los Términos y condiciones y la Política de Printit.</small>
          </div>
        </LoginCard>
      </Container>
    </ThemeProvider>
  );
}

export default Register;