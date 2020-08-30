import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TrailCreate from "./TrailCreate";
import TrailIndex from "./TrailIndex";
import APIURL from "../helpers/environment";
import Button from "@material-ui/core/Button";
import Update from "./Update";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 650,
  },
}));

function TrailsTable(props) {
  const classes = useStyles();
  const [showEditModal, setShowEditModal] = useState(false);

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
    ];
    return headers.map((header) => <TableCell>{header}</TableCell>);
  }

  const deleteTrail = (id) => {
    fetch(`${APIURL}/api/log/delete/${id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchTrails());
  };

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>{displayHeaders()}</TableRow>
        </TableHead>
        <TableBody>
          {props.trails ? (
            props.trails.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.date.slice(0, 10)}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.trailName}</TableCell>
                <TableCell align="center">{row.totalTrailLength}</TableCell>
                <TableCell align="center">{row.totalMilesHiked}</TableCell>
                <TableCell align="center">{row.conditions}</TableCell>
                <TableCell align="center">{row.foodConsumed}</TableCell>
                <TableCell align="center">{row.waterConsumed}</TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">
                  <Button
                    className={classes.but}
                    variant="outlined"
                    onClick={() => {
                      setShowEditModal(true);
                    }}
                  >
                    Update
                  </Button>
                  {showEditModal ? (
                    <Update
                      className={classes.but}
                      trailData={row}
                      setShowEditModal={setShowEditModal}
                      fetchTrails={props.fetchTrails}
                      token={props.token}
                    />
                  ) : (
                    <div></div>
                  )}
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    className={classes.but}
                    onClick={() => deleteTrail(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <div></div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TrailsTable;
