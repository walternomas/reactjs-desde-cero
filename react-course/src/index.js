import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";

const root = ReactDOM.createRoot(document.getElementById("root"));

function handleChange(event) {
  console.log(event.target.value)
}

root.render(
  <>
    <TaskCard ready={true} />
    <Saludar />
    <Button />
    <input id="hola" onChange={handleChange} />
  </>
);
