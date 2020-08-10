import React from "react";
import Navbar from "../src/components/Navbar";
import Image from "../src/components/Image";
import Auth from "./auth/Auth";
import Signup from "./auth/Signup";
import Login from "./auth/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Image />
    </div>
  );
}

export default App;
