import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import APIURL from "../helpers/environment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    minWidth: 650,
    marginLeft: theme.spacing(1),
  },
}));

const TrailEdit = (props) => {
  const classes = useStyles();
  const [editDesc, setEditDesc] = useState(props.trailToUpdate.description);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [trailName, setTrailName] = useState("");
  const [totalTrailLength, setTotalTrailLength] = useState("");
  const [totalMilesHiked, setTotalMilesHiked] = useState("");
  const [conditions, setConditions] = useState("");
  const [foodConsumed, setFoodConsumed] = useState("");
  const [waterConsumed, setWaterConsumed] = useState("");
  const [description, setDescription] = useState("");

  const trailUpdate = (event, trail) => {
    event.preventDefault();
    fetch(`${APIURL}/api/log/update/${props.trailToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        log: { description: editDesc },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchTrails();
      props.updateOff();
    });
  };

  function displayHeaders() {
    const headers = [
      "Date",
      "Location",
      "Trail Name",
      "Total Trail Length",
      "Total Miles Hiked",
      "Conditions",
      "Food Consumed",
      "Water Consumed",
      "Description",
      "Update",
      "Delete",
    ];
    return headers.map((header) => <TableCell>{header}</TableCell>);
  }
};

export default TrailEdit;
