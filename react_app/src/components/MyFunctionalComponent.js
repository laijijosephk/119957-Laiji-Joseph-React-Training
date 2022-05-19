import React from "react";

const myElement = (
  // React Fragment remove extra DOM Elements
  <>
    <h1>This is Heading</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, nihil!
    </p>
  </>
);
function MyFunctionalComponent() {
  return (
    <div className="container border border-danger mt-4">
      <h1>This is Functional Component</h1>
      {myElement}
    </div>
  );
}

export default MyFunctionalComponent;
