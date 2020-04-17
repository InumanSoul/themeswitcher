import React from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Button, Container } from "../../styles/global";
import Layout from "../../components/Layout";

function Account() {
  const history = useHistory();
  const token = localStorage.getItem('app_token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token,
  }
  const handleLoggout = () => {
    axios
      .post("http://127.0.0.1:8000/api/logout", token,{
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("app_token");
        localStorage.removeItem("user");

        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const user = JSON.parse(localStorage.getItem('user') || "{}");

  return (
    <Layout>
      <Container>
        <h2>Hola {user.name}!</h2>
        <p>Lorem ipsum dolor sit ammet consecteur</p>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleLoggout();
          }}
          className="mt4"
        >
          Loggout
        </Button>
      </Container>
    </Layout>
  );
}

export default Account;
