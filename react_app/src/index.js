import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const myElement = React.createElement("h1", null, "Welcome to React");

// JSX
// const myElement = <h1>Welcome to React Training by Koenig</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
