import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Message() {
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => console.log('render'), [counter]);

  return (
    <div>
      <input onChange={(e) => setMessage(e.target.value)} />
      <button
        onClick={() => {
          alert("El mensaje es: " + message);
        }}
      >
        Save
      </button>
      <hr/>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter+1)} >
        Incrementar
      </button>
    </div>
  );
}

root.render(<Message />);
