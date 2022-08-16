import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Message() {
  const [message, setMessage] = useState("");

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
    </div>
  );
}

root.render(<Message />);
