import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [counter, setcounter] = useState(0);
  const [name, setname] = useState("");

  useEffect(() => {
    document.title = `You Clicked ${counter}`;
    console.log("UseEffect is updating title");
  },[counter]);

  return (
    <div>
      <h1>UseEffect Demo</h1>
      <h2>Count: {counter}</h2>
      <button
        className="btn btn-info"
        onClick={() => setcounter((prevCount) => prevCount + 1)}
      >
        Update
      </button>
      <input type="text" onChange={(e) => setname(e.target.value)} />
    </div>
  );
}
