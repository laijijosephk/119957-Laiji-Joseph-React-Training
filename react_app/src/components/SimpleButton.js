import React from "react";
import PropTypes from 'prop-types'

export default function SimpleButton(props) {
  console.log(props);
  return (
    <div>
      <button className={props.className} onClick={props.callback}>
        {props.text}
      </button>
    </div>
  );
}


// props Validation
SimpleButton.propTypes = {
    text:PropTypes.string,
    theme:PropTypes.string,
    callback:PropTypes.func
    
}