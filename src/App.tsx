import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "./canvas/canvas";

function canvasHook(canvas: any) {
  // code goes here
}

function App() {
  return (
    <div className="App">
      <Canvas canvasHook={canvasHook} width={600} height={600}></Canvas>
    </div>
  );
}

export default App;
