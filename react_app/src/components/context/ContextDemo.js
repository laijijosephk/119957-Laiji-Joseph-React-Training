import React, { createContext, useContext, useState } from "react";

const globalData = createContext(null);

export default function ContextDemo() {
  const [theme, settheme] = useState("blue");
  const [userData, setuserData] = useState({
    name: "John",
    age: 30,
  });

  function changeTheme(color) {
    settheme(color);
  }

  console.log("Parennt Color: ", theme);
  return (
    <globalData.Provider
      value={{ Data: userData, Theme: theme, ChangeTheme: changeTheme }}
    >
      <div>
        <h2 className="text-danger">This is Parent</h2>
        <hr />
        <ChildComponent />
      </div>
    </globalData.Provider>
  );
}

function ChildComponent() {
  return (
    <>
      <h2 className="text-primary">This is Child Component</h2>
      <hr />
      <SuperChild />
    </>
  );
}

function SuperChild() {
  const { Data, Theme, ChangeTheme } = useContext(globalData);
  console.log("Color in Childer: ", Theme);
  return (
    <>
      <h2 className="text-success">This is Super Child Component</h2>
      <h4 style={{ color: Theme }}>User Name: {Data.name}</h4>
      <h4>User Age: {Data.age}</h4>
      <button
        className="btn btn-sm btn-info"
        onClick={() => ChangeTheme("green")}
      >
        Change Color
      </button>
    </>
  );
}
