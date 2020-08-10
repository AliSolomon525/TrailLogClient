import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showUserError, setshowUserError] = useState(false);
  const [showPasswordError, setshowPasswordError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.length === 0) {
      return setshowUserError(true);
    } else {
      setshowUserError(false);
    }
    if (password.length === 0) {
      return setshowPasswordError(true);
    }

    fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: JSON.stringify({
        user: { username: username, passwordhash: password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };

  return (
    <div>
      <h1>Signup</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            value={username}
          />
          <br />
          {showUserError === true ? <p>Username cannot be blank</p> : null}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
          />
          <br />
          {showPasswordError === true ? <p>Password cannot be blank</p> : null}
        </FormGroup>
        <Button type="submit">Signup</Button>
      </Form>
    </div>
  );
};

export default Signup;
