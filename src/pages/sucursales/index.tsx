import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
import Middleware from "../../components/Middleware/auth";

import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

import GlobablStyle from "../../styles/global";
import Header from "../../components/Header";
import { Container } from "./styles";

interface JsonObject {
  data: Array<any>;
}


function Sucursales() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  const [apidata, setApidata] = useState<JsonObject>({ data: []});
  const [isLoading, setIsLoading] = useState(false);

    //Get token from local and configure headers
  const token = localStorage.getItem("app_token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);

        const result = await axios
        .get(
            "http://127.0.0.1:8000/api/sucursales", {
                headers: headers,
            });

            setApidata(result.data);
            setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobablStyle />
      <Middleware />
      <Header toggleTheme={toggleTheme} />
      <Container>
        <h2>Sucursales</h2>
        <p>Estas son tus sucursales</p>

        <div>
          {isLoading ? (
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
          )}
        </div>
      </Container>
    </ThemeProvider>
  );
}
export default Sucursales;