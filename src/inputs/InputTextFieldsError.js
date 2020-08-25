import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: 200,
  },
}));

export default function ValidationTextFields(props) {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      style={{ width: props.width, maxHeight: props.maxHeight }}
    >
      <TextField
        error
        id="outlined-error-helper-text"
        helperText="Incorrect entry"
        variant="outlined"
        label={props.name}
        name={props.name}
        value={props.value}
        onChange={(e) => props.callback(e.target.value)}
      />
    </form>
  );
}
