import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import "./Navbar.css";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
// import Auth from "../auth/Auth";
// import Image from "./Image";

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
  const [openLogin, setOpenLogin] = useState(false);

  function showSignup() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  function showLogin() {
    if (openLogin) {
      setOpenLogin(false);
    } else {
      setOpenLogin(true);
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
        <Signup open={open} setOpen={setOpen} updateToken={props.updateToken} />
      ) : (
        <div></div>
      )}
      {openLogin ? (
        <Login
          open={openLogin}
          setOpen={setOpenLogin}
          updateToken={props.updateToken}
        />
      ) : (
        <div></div>
      )}
      {/* <Image /> */}
    </div>
  );
};

export default Navbar;
