import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
import Middleware from "../../components/Middleware/auth";

import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

import GlobablStyle, { Container } from "../../styles/global";
import Sidemenu from "../../components/Sidemenu";

interface JsonObject {
  data: Array<any>;
}

function Sucursales() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  const [apidata, setApidata] = useState<JsonObject>({ data: [] });
  const [isLoading, setIsLoading] = useState(false);

    //Get token from local and configure headers
  const token = localStorage.getItem("app_token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token,
    "Empresa": user.empresa_id,
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
      <div className="wrapper">
        <Sidemenu toggleTheme={toggleTheme} />
        <div className="content">
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
                      <Link to={`/sucursales/show/${item.id}`} key={item.id} className="d-block mt4 text-decoration-none text-reset bg-light shadow p4 rounded">
                        <h4>{item.nombre}</h4>
                        <p>{item.direccion}</p>
                      </Link>
                    );
                  })}
                </>
              )}
            </div>
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default Sucursales;