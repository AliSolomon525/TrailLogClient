import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputTextFields from "../inputs/InputTextFields";
import APIURL from "../helpers/environment";
import Button from "@material-ui/core/Button";

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
}));

function Update(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function showUpdate() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <TrailEdit trailData={props.trailData} />
    </div>
  );

  return (
    <div>
      <button className="classes.but" type="button" onClick={handleOpen}>
        Update
      </button>
      <Modal className={classes.root} open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}

export default Update;

const TrailEdit = (props) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [date, setDate] = useState(props.trailData.date);
  const [location, setLocation] = useState(props.trailData.location);
  const [trailName, setTrailName] = useState(props.trailData.trailName);
  const [totalTrailLength, setTotalTrailLength] = useState(
    props.trailData.totalTrailLength
  );
  const [totalMilesHiked, setTotalMilesHiked] = useState(
    props.trailData.totalMilesHiked
  );
  const [conditions, setConditions] = useState(props.trailData.conditions);
  const [foodConsumed, setFoodConsumed] = useState(
    props.trailData.foodConsumed
  );
  const [waterConsumed, setWaterConsumed] = useState(
    props.trailData.waterConsumed
  );
  const [description, setDescription] = useState(props.trailData.description);

  //   const trailUpdate = (event, trail) => {
  //     event.preventDefault();
  //     fetch(`${APIURL}/api/log/update/${props.trailToUpdate.id}`, {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         log: { description: editDesc },
  //       }),
  //       headers: new Headers({
  //         "Content-Type": "application/json",
  //         Authorization: props.token,
  //       }),
  //     }).then((res) => {
  //       props.fetchTrails();
  //       props.updateOff();
  //     });
  //   };

  return (
    <div>
      <h2>Make An Update:</h2>
      <br />
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                variant="outlined"
                label="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
            <InputTextFields
              name="Location"
              value={location}
              callback={setLocation}
              width="70ch"
            />
            <InputTextFields
              name="Trail Name"
              value={trailName}
              callback={setTrailName}
              width="70ch"
            />
          </Grid>
          <br />
          <Grid item xs={12} md={6}>
            <InputTextFields
              name="Total Trail Length (miles)"
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
        className={classes.but}
        type="submit"
        variant="contained"
        size="medium"
        textAlign="center"
        onClick={(e) => alert("Tada!")}
      >
        Submit
      </Button>
      <hr />
    </div>
  );
};
