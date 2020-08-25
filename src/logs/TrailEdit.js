import React, { useState } from "react";
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
  },
  table: {
    minWidth: 650,
    marginLeft: theme.spacing(1),
  },
}));

const TrailEdit = (props) => {
  const [editDesc, setEditDesc] = useState(props.trailToUpdate.description);
  const classes = useStyles();

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

  return (
    //     <Form onSubmit={workoutUpdate}>
    //       <FormGroup>
    //         <Label htmlFor="result">Edit Result:</Label>
    //         <Input
    //           name="result"
    //           value={editRes}
    //           onChange={(e) => setEditRes(e.target.value)}
    //         />
    //       </FormGroup>
    //       <FormGroup>
    //         <Label htmlFor="description">Edit Description:</Label>
    //         <Input
    //           name="description"
    //           value={editDesc}
    //           onChange={(e) => setEditDesc(e.target.value)}
    //         />
    //       </FormGroup>
    //       <Button type="submit">Update the workout!</Button>
    //     </Form>
    //   </ModalBody>
    // </Modal>
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>{displayHeaders()}</TableRow>
          </TableHead>
          <TableBody>
            {props.trails ? (
              props.trails.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.location}</TableCell>
                  <TableCell align="center">{row.trailName}</TableCell>
                  <TableCell align="center">{row.totalTrailLength}</TableCell>
                  <TableCell align="center">{row.totalMilesHiked}</TableCell>
                  <TableCell align="center">{row.conditions}</TableCell>
                  <TableCell align="center">{row.foodConsumed}</TableCell>
                  <TableCell align="center">{row.waterConsumed}</TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell>
                    <div>
                      <Button onClick={trailUpdate}>Update</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <div></div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TrailEdit;
