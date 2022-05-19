import React from "react";

export default function Message(props) {
  console.log(props);

  // Destructuring Props
  // let { name, age, background } = props;

  // Props are Read Only, child can not update it.
  // props.name = "manish";
  return (
    <div>
      {/* <h1 className={`text-white bg-${background} text-center`}>
        Welcome {name} age: {age}
      </h1> */}

      <h1 className="text-white bg-primary text-center">
        Welcome {props.name}
      </h1>
    </div>
  );
}
