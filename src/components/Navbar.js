import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import "./Navbar.css";
import Signup from "./Signup";
import Login from "./Login";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  color: {
    backgroundColor: "#FAF5FC",
  },
  // trailButton: {
  //   //class name
  //   //css here
  // },
});

const Navbar = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function showSignup() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  function showLogin() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  //use interpolation to step into your styling like classes.root

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.color}>
          <Typography variant="h6" className={classes.title}>
            Trail Tracker
          </Typography>
          <Button type="button" color="#654bae" onClick={showSignup}>
            Signup
          </Button>
          <Button type="button" color="#654bae" onClick={showLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {open ? (
        <Signup open={open} setOpen={setOpen} token={props.token} />
      ) : (
        <div></div>
      )}
      {open ? (
        <Login open={open} setOpen={setOpen} token={props.token} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Navbar;
