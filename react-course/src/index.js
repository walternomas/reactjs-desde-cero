import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
// import { Greeting, UserCard } from "./Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Greeting title="Hola Mundo" name="Joe" />
    <Greeting title="Hola React" name="Ryan" />
    <Greeting title="Hola JSX" />
    <Greeting title="Hola JavaScript" />
    <Greeting title="Hola Walter" />
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert('Hello, React!');
      }}
    /> */}
    <Button text='Click me' />
    <Button text='Pay me' />
    <Button text='Go to' />
    <Button />
  </>
);
