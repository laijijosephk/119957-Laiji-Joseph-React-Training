import React, { useState } from "react";

export default function UseStateasProps() {
  const [count, setCount] = useState(5);
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div>
      <h2>Parent Component</h2>
      <h3>Count:{count}</h3>
      <hr />
      <Custombtn1 count={count} callback={increment} />
      <hr />
      <Custombtn2 count={count} callback={decrement} />
    </div>
  );
}

function Custombtn1(props) {
  return (
    <>
      <h2>Custom Button Component-1</h2>
      <h3>Count:{props.count}</h3>
      <button className="btn btn-primary btn-sm" onClick={props.callback}>
        Increment
      </button>
    </>
  );
}

function Custombtn2(props) {
  return (
    <>
      <h2>Custom Button Component-2</h2>
      <h3>Count:{props.count}</h3>
      <button className="btn btn-success btn-sm" onClick={props.callback}>
        Decrement
      </button>
    </>
  );
}
