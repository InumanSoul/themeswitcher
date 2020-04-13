import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
import Middleware from "../../components/Middleware/auth";

import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

import GlobablStyle from "../../styles/global";
import Header from "../../components/Header";
import { Container } from "./styles";

function SucursalesDetail() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
//   const sucursalData = this.props;

  return (
    <ThemeProvider theme={theme}>
      <GlobablStyle />
      <Middleware />
      <Header toggleTheme={toggleTheme} />
      <Container>
        <h2>Sucursal detalle</h2>
        <p>Estas son tus sucursales</p>

        <div>
          {/* {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {apidata.data.map((item) => {
                return (
                  <div key={item.id} className="mt4">
                    <h4>{item.nombre}</h4>
                    <p>{item.direccion}</p>
                  </div>
                );
              })}
            </>
          )} */}
        </div>
      </Container>
    </ThemeProvider>
  );
}
export default SucursalesDetail;
