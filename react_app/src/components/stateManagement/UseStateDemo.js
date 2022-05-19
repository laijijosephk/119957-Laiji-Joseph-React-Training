import React, { useState } from "react";

export default function UseStateDemo() {
  // state variable
  const [count, setCount] = useState(0);

  const [name, setname] = useState("pankaj");

  //   function increment() {
  //     setCount((prevCount) => prevCount + 1);
  //   }
  //   let decrement = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };

  let increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((t) => t + 1);
    }

    setname("Laiji");
  };

  return (
    <div>
      <h2>UseState Demo</h2>
      <h3>{name}</h3>
      <p>{count}</p>
      <button
        className="btn btn-primary"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
      <button
        className="btn btn-danger mx-2"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        Decrement
      </button>
      <button className="btn btn-success mx-2" onClick={increment5}>
        Increment by 5
      </button>
    </div>
  );
}
