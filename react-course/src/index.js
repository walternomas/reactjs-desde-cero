import React from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";
import { TaskCard } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Posts />
    <TaskCard />
  </>
);
