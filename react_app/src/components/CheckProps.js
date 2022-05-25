import React from "react";
import PropTypes from "prop-types";

let data1 = 123;
let data2 = "abc";

export default function CheckProps() {
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent data1={data1} data2={data2} />
    </div>
  );
}

ChildComponent.propTypes = {
  data1: PropTypes.number,
  data2: PropTypes.string,
};

function ChildComponent(props) {
  console.log(props);
  function CheckProps() {
    if (typeof props.data1 != PropTypes.number) {
      alert("Props are not valid");
    } else {
      alert("Props are valid");
    }
  }
  return (
    <>
      {CheckProps()}
      <h2>{props.data1}</h2>
      <h2>{props.data2}</h2>
      
    </>
  );
}
