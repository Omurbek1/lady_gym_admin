import React from "react";

import classes from "./Button.module.scss";

interface Props {
  type?: "button" | "submit";
  onClick?: any;
  outline?: boolean;
  disabled?: boolean;
}
const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={`${classes.btn} ${
        props.outline ? classes.outline : classes.button
      } `}
      disabled={props.disabled}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
