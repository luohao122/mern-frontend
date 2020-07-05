import React, { useState, useContext } from "react";
import axios from "axios";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import classes from "./AuthForm.module.css";

const Auth = (props) => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    if (isLoginMode) {
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/signup",
          {
            name: formState.inputs.name,
            email: formState.inputs.email,
            password: formState.inputs.password,
          }
        );
        // const response = await fetch("http://localhost:5000/api/users/signup", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     name: formState.inputs.name,
        //     email: formState.inputs.email,
        //     password: formState.inputs.password,
        //   }),
        // });
        // const responseData = await response.json();
        // console.log(responseData);
      } catch (err) {
        console.log(err);
      }
    }

    auth.login();
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <Card className={classes.AuthContainer}>
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            id="name"
            type="text"
            label="Name"
            element="input"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          type="email"
          label="Email"
          element="input"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email."
          onInput={inputHandler}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          element="input"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "Login" : "SignUp"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        Switch to {isLoginMode ? "SignUp" : "Login"}
      </Button>
    </Card>
  );
};

export default Auth;
