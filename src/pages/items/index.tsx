import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Badge } from "../../styles/global";
import Layout from "../../components/Layout";
import NumberFormat from 'react-number-format'
import { ProductPhoto, ProductInfo } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImagePolaroid } from '@fortawesome/pro-regular-svg-icons';

interface JsonObject {
  data: Array<any>;
}

function Items() {
  const [apidata, setApidata] = useState<JsonObject>({ data: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //Get token from local and configure headers
    const token = localStorage.getItem("app_token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
      "Empresa": user.empresa_id,
    };

    const fetchData = async () => {
        setIsLoading(true);

        const result = await axios
        .get(
            "http://localhost:8000/api/items", {
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
        <div className="row">
          <div className="col-md-6">
            <h2>Productos</h2>
          </div>
          <div className="col-md-6">
            <Link to="/items" className="link-button--primary">Nuevo producto</Link>
          </div>
        </div>

        <div className="row">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {apidata.data.map((item) => {
                return (
                  <Link
                    to={`/items/${item.id}/show`}
                    key={item.id}
                    className="col-xs-6 col-md-4 mt4 text-decoration-none text-reset"
                  >
                    <div className="box bg-light bordered rounded">
                      <ProductPhoto>
                        <FontAwesomeIcon icon={faImagePolaroid} size={'2x'}/>
                      </ProductPhoto>
                      <ProductInfo>
                        <div>
                          <b>{item.nombre}</b>
                        </div>
                        <NumberFormat
                          value={item.precio}
                          displayType={'text'}
                          thousandSeparator={true}
                          suffix={' G$'}
                        />
                        <div>
                          <p>En stock: 86</p>
                        </div>
                        <div>
                          <Badge>
                            {item.categoria ? item.categoria : 'Sin categoria'}
                          </Badge>
                        </div>
                      </ProductInfo>
                    </div>
                  </Link>
                )
              })}
            </>
          )}
        </div>
      </Container>
    </Layout>
  );
}
export default Items;