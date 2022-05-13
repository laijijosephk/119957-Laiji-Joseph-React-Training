import React from "react";
import CallbackButton from "./CallbackButton";

export default function Summary(props) {
  let { name, index } = props;

  return (
    <>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{name.length}</td>
      <td>
        <CallbackButton callback={props.reverseCallback} />
      </td>
      <td>
        <CallbackButton
          theme={345}
          text={123}
          callback={() => props.promoteCallback(name)}
        />
      </td>
    </>
  );
}
