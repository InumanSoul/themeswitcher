import React from "react";
import { Container } from "../../styles/global";
import Layout from "../../components/Layout";
import {Link} from "react-router-dom";

function Outbuilding() {
    return (
      <Layout>
        <Container>
          <h2>Dependencias</h2>
          <Link to="/offices">Sucursales</Link>
          <Link to="/offices">Depósitos</Link>
        </Container>
      </Layout>
    );
}

export default Outbuilding;