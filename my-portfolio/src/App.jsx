import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDoApp from "./components/to-do/to-do";
// import MyFirstIncrement from "./components/forms/incremen/increment-3";
// import LightToggle from "./components/lights/firstLight";
// import FirstModal from "./components/modale/first-modal";
// import Counter from "./components/forms/incremen/increment";

function App() {
  return (
    <>
      {/* <Counter />) */}
      {/* <LightToggle /> */}
      {/* <MyFirstIncrement /> */}
      <ToDoApp />
    </>
  );
}

export default App;
