import React, { useEffect, useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef();
  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  });
  return (
    <div>
      <h2>UseRef Demo</h2>
      <input type="text" placeholder="Type Something" ref={inputRef} />
    </div>
  );
}
