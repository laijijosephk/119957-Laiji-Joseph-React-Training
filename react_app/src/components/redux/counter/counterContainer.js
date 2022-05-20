import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc_Counter, dec_Counter } from "./counterActions";

export default function CounterContainer() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter :{counter} </h2>
      <hr />
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch(inc_Counter())}
      >
        +
      </button>
      <button
        className="btn btn-dark mx-2"
        onClick={() => dispatch(dec_Counter())}
      >
        -
      </button>
    </div>
  );
}
