import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function getModalStyle() {
  const top = 50;
  const left = 50;

  // return {
  //   top: `${top}%`,
  //   left: `${left}%`,
  //   transform: `translate(-${top}%, -${left}%)`,
  // };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showUserError, setshowUserError] = useState(false);
  const [showPasswordError, setshowPasswordError] = useState(false);

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.length === 0) {
      return setshowUserError(true);
    } else {
      setshowUserError(false);
    }
    if (password.length <= 5) {
      return setshowPasswordError(true);
    }
    //fetch function
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
        props.setOpen(false);
      });
  };

  const body = <div style={modalStyle} className={classes.paper}></div>;

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
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
            {showPasswordError === true ? (
              <p>Password cannot be blank</p>
            ) : null}
          </FormGroup>
          <Button type="submit">Signup</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Signup;
