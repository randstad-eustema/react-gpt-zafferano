import { useState } from "react";
export default function AppCounter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{counter}</h1>
      <button className="btn btn__primary" onClick={increment}>
        Incrementa
      </button>
    </div>
  );
}
