import React, { useState, useEffect } from "react";
import Navbar from "../src/components/Navbar";
import Image from "../src/components/Image";
import Homepage from "./components/Homepage";
import TrailIndex from "./logs/TrailIndex";
import TrailCreate from "./logs/TrailCreate";
import Auth from "./auth/Auth";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import CssBaseline from "@material-ui/core/CssBaseline";
import Update from "./logs/Update";
import About from "./components/About";

import "./App.css";

function App() {
  const [sessionToken, setSessionToken] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);
  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return localStorage.getItem("token") === sessionToken ? (
      <TrailIndex token={sessionToken} />
    ) : (
      <div>
        <Homepage />
        <Auth updateToken={updateToken} />
      </div>
    );
  };

  return (
    <div className="App">
      {/* <CssBaseline /> */}
      {/* <Signup />
      <Login /> */}
      <Navbar
        clickLogout={clearToken}
        updateToken={updateToken}
        clickLogout={clearToken}
      />
      {protectedViews()}
      {/* <Image /> */}
      {/* {sessionToken ? <TrailCreate token={sessionToken} /> : <Homepage />} */}
      {/* <Auth updateToken={updateToken} /> */}
      {/* <Update /> */}
    </div>
  );
}

export default App;
