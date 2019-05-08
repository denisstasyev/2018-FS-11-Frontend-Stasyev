import React from "react";
import classes from "./Input.css";

const input = props => {
  let inputElement;
  let inputElementClasses = [classes.InputElement];

  if (props.invalid && props.touched) {
    inputElementClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputElementClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
          {...props.elementConfig}
        />
      );
      break;
    case "textarea":
      inputElement = <textarea placeholder={props.placeholder} />;
      break;
    default:
      inputElement = (
        <input
          className={inputElementClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
          {...props.elementConfig}
        />
      );
      break;
  }
  return (
    <div className={classes.Input}>
      <div className={classes.Label}> {props.label} </div>
      {inputElement}
    </div>
  );
};

export default input;
