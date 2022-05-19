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
        <CallbackButton
          theme="primary"
          text="Reverse"
          callback={props.reverseCallback}
        />
      </td>
      <td>
        <CallbackButton
          theme="info"
          text="Promote"
          callback={() => props.promoteCallback(name)}
        />
      </td>
    </>
  );
}
