import React, { useState } from "react";

export default function WithoutContextDemo() {
  const [userData, setuserData] = useState({
    name: "John",
    age: 30,
  });
  return (
    <div>
      <h2 className="text-danger">This is Parent</h2>
      <hr />
      <ChildComponent userData={userData} />
    </div>
  );
}

function ChildComponent(props) {
  return (
    <>
      <h2 className="text-primary">This is Child Component</h2>
      <hr />
      <SuperChild userData={props.userData} />
    </>
  );
}

function SuperChild(props) {
  return (
    <>
      <h2 className="text-success">This is Super Child Component</h2>
      <h4>User Name: {props.userData.name}</h4>
      <h4>User Age: {props.userData.age}</h4>
    </>
  );
}
