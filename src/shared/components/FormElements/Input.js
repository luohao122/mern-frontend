import React, { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";
import classes from "./Input.module.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCHED":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHander = () => {
    dispatch({
      type: "TOUCHED",
    });
  };

  const renderElement = () => {
    let element = null;
    switch (props.element) {
      case "input":
        element = (
          <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onChange={changeHandler}
            value={inputState.value}
            onBlur={touchHander}
          />
        );
        break;
      case "textarea":
        element = (
          <textarea
            rows={props.rows || 3}
            id={props.id}
            onChange={changeHandler}
            value={inputState.value}
            onBlur={touchHander}
          />
        );
        break;
      default:
        element = (
          <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onChange={changeHandler}
            value={inputState.value}
            onBlur={touchHander}
          />
        );
    }
    return element;
  };

  return (
    <div
      className={`${classes.FormControl} ${
        !inputState.isValid &&
        inputState.isTouched &&
        classes.FormControlInvalid
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {renderElement()}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
