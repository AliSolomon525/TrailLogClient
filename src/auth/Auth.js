import React from "react";
import Container from "@material-ui/core/Container";
import Signup from "./Signup";
import Login from "./Login";

const Auth = (props) => {
  return (
    <Container>
      <Signup updateToken={props.updateToken} />
      <Login updateToken={props.updateToken} />
    </Container>
  );
};

export default Auth;
