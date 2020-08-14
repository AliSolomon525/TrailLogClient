import React from "react";
import Container from "@material-ui/core/Container";
import Signup from "../components/Signup";
import Login from "../components/Login";

const Auth = (props) => {
  return (
    <Container>
      <Signup updateToken={props.updateToken} />
      <Login updateToken={props.updateToken} />
    </Container>
  );
};

export default Auth;
