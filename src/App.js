import React, { useState, useEffect } from "react";
import Navbar from "../src/components/Navbar";
import Image from "../src/components/Image";
import Homepage from "./components/Homepage";
import Trails from "./logs/Trails";
import Auth from "./auth/Auth";
import Signup from "./components/Signup";
// import Login from "./auth/Login";

import "./App.css";

function App() {
  // const [token, setToken] = useState("trail");
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
      <Homepage token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };
  return (
    <div className="App">
      <Navbar clickLogout={clearToken} />
      {protectedViews()}
      <Image />
      <Signup />
      {sessionToken ? <Trails /> : <Homepage />}
    </div>
  );
}

export default App;
