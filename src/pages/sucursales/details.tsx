import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
import Middleware from "../../components/Middleware/auth";

import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

import GlobablStyle from "../../styles/global";
import Header from "../../components/Header";
import { Container } from "./styles";

interface JsonObject {
  data: any;
}

function SucursalesDetail(props: any) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const sucId = props.match.params;
  const [apidata, setApidata] = useState<JsonObject>({ data: [] });
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

      const result = await axios.get("http://127.0.0.1:8000/api/sucursales/"+sucId.id, {
        headers: headers,
      });
      const formatResult = { data: result.data };
      setApidata(formatResult);
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
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="mt4">
              <h2>{apidata.data.nombre}</h2>
              <p>{apidata.data.direccion}</p>
            </div>
          )}
        </div>
      </Container>
    </ThemeProvider>
  );
}
export default SucursalesDetail;
