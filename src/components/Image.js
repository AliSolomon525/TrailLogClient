import React from "react";
import styled from "styled-components";
import havasu from "../assets/Havasu-Falls.jpg";

//you have to creat variables then store the styling inside of that
//use backticks inside of components (like in the Resize)

const Resize = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const ViewOne = () => {
  return (
    <div>
      <Resize src={havasu} />
    </div>
  );
};

export default ViewOne;
