import React, { useEffect, useRef, useState } from "react";

export default function UseRefDemo2() {
  const [timer, settimer] = useState(0);
  let interval = useRef()
  useEffect(() => {
    interval.current = setInterval(() => {
      settimer((prevCount) => prevCount + 1);
    }, 1000);
  }, []);
  return (
    <div>
      <h2>UseRefDemo2</h2>
      Hook Timer: {timer}
      <button onClick={() => clearInterval(interval.current)}>
        Stop Timer
      </button>
    </div>
  );
}
