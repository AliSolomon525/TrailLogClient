import React, { useState, useEffect } from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";
import InputTextFields from "../inputs/InputTextFields";
import { sizing } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },

  body: {
    background: "blue",
  },
}));

const TrailCreate = (props) => {
  const classes = useStyles();
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [trailName, setTrailName] = useState("");
  const [totalTrailLength, setTotalTrailLength] = useState("");
  const [totalMilesHiked, setTotalMilesHiked] = useState("");
  const [conditions, setConditions] = useState("");
  const [foodConsumed, setFoodConsumed] = useState("");
  const [waterConsumed, setWaterConsumed] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/log", {
      method: "POST",
      body: JSON.stringify({
        log: {
          date: date,
          location: location,
          trailName: trailName,
          totalTrailLength: totalTrailLength,
          totalMilesHiked: totalMilesHiked,
          conditions: conditions,
          foodConsumed: foodConsumed,
          waterConsumed: waterConsumed,
          description: description,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setDate("");
        setLocation("");
        setTrailName("");
        setTotalTrailLength("");
        setTotalMilesHiked("");
        setConditions("");
        setFoodConsumed("");
        setWaterConsumed("");
        setDescription("");
        props.fetchTrails();
      });
  };

  return (
    <div className="body">
      <h2 className="title">Start Tracking!</h2>
      <br />
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <InputTextFields
              name="Date"
              value={date}
              callback={setDate}
              width="75ch"
            />
            <InputTextFields
              name="Location"
              value={location}
              callback={setLocation}
              width="75ch"
            />
            <InputTextFields
              name="Trail Name"
              value={trailName}
              callback={setTrailName}
              width="75ch"
            />
          </Grid>
          <br />
          <Grid item xs={12} md={6}>
            <InputTextFields
              name="Total Trail Length"
              value={totalTrailLength}
              callback={setTotalTrailLength}
              width="75ch"
            />
            <InputTextFields
              name="Total Miles Hiked"
              value={totalMilesHiked}
              callback={setTotalMilesHiked}
              width="75ch"
            />
            <InputTextFields
              name="Conditions"
              value={conditions}
              callback={setConditions}
              width="75ch"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <InputTextFields
              name="Food Consumed"
              value={foodConsumed}
              callback={setFoodConsumed}
              width="100%"
            />
            <InputTextFields
              name="Water Consumed"
              value={waterConsumed}
              callback={setWaterConsumed}
              width="100%"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <InputTextFields
              name="Description"
              value={description}
              callback={setDescription}
              width="100%"
              maxHeight="25ch"
            />
          </Grid>
          <br />
        </Grid>
      </div>
      <br />
      <Button
        type="submit"
        id="outlined-basic"
        justify="center"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default TrailCreate;
