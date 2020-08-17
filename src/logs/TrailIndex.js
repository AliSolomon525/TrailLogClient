import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import WorkoutCreate from "./TrailCreate";
import TrailsTable from "./TrailsTable";
import WorkoutEdit from "./WorkoutEdit";

const TrailIndex = (props) => {
  const [trails, setTrails] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [trailToUpdate, setTrailToUpdate] = useState({});

  const fetchTrails = () => {
    fetch("http://localhost:3000/api/log", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        setTrails(logData);
      });
  };

  useEffect(() => {
    fetchTrails();
  }, []);

  const editUpdateTrail = (workout) => {
    setTrailToUpdate(workout);
    console.log(workout);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  return (
    <Container>
      {/* <WorkoutCreate fetchWorkouts={fetchWorkouts} token={props.token} /> */}
      <TrailsTable
        trails={trails}
        editUpdateTrail={editUpdateTrail}
        updateOn={updateOn}
        fetchTrails={fetchTrails}
        token={props.token}
      />
      {updateActive ? (
        <WorkoutEdit
          trailToUpdate={trailToUpdate}
          updateOff={updateOff}
          token={props.token}
          fetchTrails={fetchTrails}
        />
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default TrailIndex;
