import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard ready={true} />
    <Saludar />
    <Button />
    <form onSubmit={(e)=> {
      e.preventDefault();
      alert('enviado');
    }}>
      <h1>Registro de Usuarios</h1>
      <button>Send</button>
    </form>
  </>
);
