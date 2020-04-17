import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "../../styles/global";
import Layout from "../../components/Layout";

interface JsonObject {
  data: Array<any>;
}

function Sucursales() {
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
    <Layout>
      <Container>
        <h2>Sucursales</h2>
        <p>Estas son tus sucursales</p>

        <Link to="/sucursales/create">Nueva sucursal</Link>

        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {apidata.data.map((item) => {
                return (
                  <Link
                    to={`/sucursales/show/${item.id}`}
                    key={item.id}
                    className="d-block mt4 text-decoration-none text-reset bg-light shadow p4 rounded"
                  >
                    <h4>{item.nombre}</h4>
                    <p>{item.direccion}</p>
                  </Link>
                );
              })}
            </>
          )}
        </div>
      </Container>
    </Layout>
  );
}
export default Sucursales;