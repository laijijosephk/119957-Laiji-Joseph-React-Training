import React from "react";
import PropTypes from "prop-types";

export default function SimpleButton(props) {
  console.log(props);
  function checkProps(prop) {
    if (prop != PropTypes.string) {
      alert("Wrong Props type");
    }
  }
  return (
    <div>
      <button className={props.className} onClick={props.callback}>
        {props.text}
      </button>
      <button onClick={checkProps}>Validate Props</button>
    </div>
  );
}

// props Validation
SimpleButton.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  callback: PropTypes.func,
};
