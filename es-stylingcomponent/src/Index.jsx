import React from "react";
import Welcome from "./Welcome";
import "./index.css";
import Counter from "./Counter.jsx";
import Login from "./Login.jsx";
const Index = () => {
  return (
    <>
      <Welcome name="Arturo" className="welcome" />
      <Counter start={10} increment={1} />
      <Login />
    </>
  );
};

export default Index;
