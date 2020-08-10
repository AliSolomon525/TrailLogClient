import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
});

const Navbar = () => {
  const classes = useStyles();

  //use interpolation to step into your styling like classes.root

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.color}>
          <Typography variant="h6" className={classes.title}>
            Trail Tracker
          </Typography>
          <Button type="button" color="#654bae">
            Signup
          </Button>
          <Button type="button" color="#654bae">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
