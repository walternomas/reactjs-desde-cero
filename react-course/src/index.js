import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const name = "Walter";
  const married = true;
  const user = {
    firstName: "ryan",
    lastName: "ray",
  };
  function add(x, y) {
    return x + y;
  }
  return (
    <>
      <h1>
        👋🏼 Hello, {name}!
      </h1>
      <h2>Casado?: {married ? " ✅ " : " ❎ "}{married.toString()}</h2>
      <h3>La suma es {add(10, 30)}</h3>
      <hr/>
      <h1>{JSON.stringify(user)}</h1>
      <h2>{user.firstName}</h2>
      <h3>{user.lastName}</h3>
    </>
  );
}
root.render(
  <div>
    <Greeting />
  </div>
);
