import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/pro-regular-svg-icons";

import { Container } from "../../styles/global";
import Layout from "../../components/Layout";

interface JsonObject {
  data: any;
}

function OfficeDetail(props: any) {
  const [apidata, setApidata] = useState<JsonObject>({ data: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const sucId = props.match.params
    //Get token from local and configure headers
    const token = localStorage.getItem("app_token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios.get("http://192.168.0.4:8000/api/sucursales/"+sucId.id, {
        headers: headers,
      });
      const formatResult = { data: result.data };
      setApidata(formatResult);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Container>
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="mt4">
              <Link to="/offices" className="text-decoration-none">
                <FontAwesomeIcon icon={faChevronLeft} /> Volver
              </Link>
              <h2>{apidata.data.nombre}</h2>
              <p>{apidata.data.direccion}</p>
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
}

export default OfficeDetail;
