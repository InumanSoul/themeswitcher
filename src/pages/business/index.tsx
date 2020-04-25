import React from "react";
import { Link } from 'react-router-dom';
import { Container } from "../../styles/global";
import Layout from "../../components/Layout";

function Business() {
    const user = JSON.parse(localStorage.getItem('user') || '{}')

    return (
      <Layout>
        <Container>
          <h2>{user.empresa.nombre}</h2>
          <p>Lorem ipsum dolor sit ammet consecteur</p>
          <Link to="/offices" className="btn btn-primary">Sucursales</Link>
          <Link to="/offices" className="btn btn-primary">Depositos</Link>
        </Container>
      </Layout>
    );
}

export default Business;