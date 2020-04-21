import React from "react";
import { Button,Container } from "../../styles/global";
import Layout from "../../components/Layout";

function Account() {
  const user = JSON.parse(localStorage.getItem('user') || "{}");

  return (
    <Layout>
      <Container>
        <h2>Hola {user.name}!</h2>
        <p>Lorem ipsum dolor sit ammet consecteur</p>
      </Container>
    </Layout>
  );
}

export default Account;
