import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Input } from "@material-ui/core";
import InputTextFieldsError from "../inputs/InputTextFieldsError";
import InputTextFields from "../inputs/InputTextFields";
import APIURL from "../helpers/environment";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
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
  but: {
    marginRight: theme.spacing(1),
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  // const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showUserError, setshowUserError] = useState(false);
  const [showPasswordError, setshowPasswordError] = useState(false);

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidEmail = username.includes("@");

    if (!isValidEmail) {
      setshowUserError(true);
      return;
    } else {
      setshowUserError(false);
    }
    if (password.length <= 5) {
      return setshowPasswordError(true);
    }

    fetch(`${APIURL}/api/user`, {
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

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>Signup</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <InputTextFields
          name="Username"
          value={username}
          callback={setUsername}
          // required={true}
        />
        {showUserError === true ? <p>Invalid Email</p> : null}
        <InputTextFields
          name="Password"
          value={password}
          callback={setPassword}
          // required={true}
          // errorText={["password must be 5 or more characters"]}
          // inputProps={{ minLength: 5 }}
        />
        {showPasswordError === true ? (
          <p>Password must contain at least 5 characters</p>
        ) : null}
      </form>
      <br />
      <Button
        className={classes.but}
        onClick={handleSubmit}
        variant="contained"
        type="submit"
        spacing={0}
      >
        Submit
      </Button>
      <Button onClick={handleClose} variant="contained" className={classes.but}>
        Close
      </Button>
    </div>
  );
  //add form code inside the body div & import from Matieral UI (look at documentation)

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default Signup;
