import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import TrailCreate from "./TrailCreate";
import TrailsTable from "./TrailsTable";
import TrailEdit from "./TrailEdit";
import APIURL from "../helpers/environment";

const TrailIndex = (props) => {
  const [trails, setTrails] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [trailToUpdate, setTrailToUpdate] = useState({});

  const fetchTrails = () => {
    fetch(`${APIURL}/api/log`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setTrails(logData);
      });
  };

  useEffect(() => {
    fetchTrails();
  }, []);

  const editUpdateTrail = (trail) => {
    setTrailToUpdate(trail);
    console.log(trail);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  return (
    <Container>
      <TrailCreate fetchTrails={fetchTrails} token={props.token} />
      <TrailsTable
        trails={trails}
        editUpdateTrail={editUpdateTrail}
        updateOn={updateOn}
        fetchTrails={fetchTrails}
        token={props.token}
      />
      {/* {updateActive ? (
        <TrailEdit
          trailToUpdate={trailToUpdate}
          updateOff={updateOff}
          token={props.token}
          fetchTrails={fetchTrails}
        />
      ) : (
        <div></div>
      )} */}
    </Container>
  );
};

export default TrailIndex;
