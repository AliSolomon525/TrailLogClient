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
  size: {
    "& > *": {
      margin: "auto",
      width: "100ch",
      // maxWidth: 500,
    },
  },
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: 200,
  },
}));

export default function InputTextFields(props) {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      style={{ width: props.width, maxHeight: props.maxHeight }}
    >
      <TextField
        label={props.name}
        variant="outlined"
        name={props.name}
        value={props.value}
        onChange={(e) => props.callback(e.target.value)}
      />
    </form>
  );
}
