import React from "react";
import { Button,Container } from "../../styles/global";
import Layout from "../../components/Layout";
import Avatar from 'react-avatar'

function Account() {
  const user = JSON.parse(localStorage.getItem('user') || "{}");

  return (
    <Layout>
      <Container>
        <Avatar name={user.name} size="120" round={true} textSizeRatio={2} className="mb4"/>
        <h2>Hola {user.name}!</h2>
        <p>Nombre Empresa</p>
        <p>Lorem ipsum dolor sit ammet consecteur</p>
        <Button>Editar</Button>
      </Container>
    </Layout>
  )
}

export default Account;
