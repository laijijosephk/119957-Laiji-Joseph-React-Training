import React from "react";
import SimpleButton from "./SimpleButton";

export default function CallbackButton(props) {
  // Sending Selective props
  let { theme, ...childProps } = props;
  return (
    <div>
      <SimpleButton
        {...childProps}
        className={`btn btn-${props.theme} btn-sm`}
      />
    </div>
  );
}

// Default Props
CallbackButton.defaultProps = {
  text: "Default Text",
  theme: "warning",
};


