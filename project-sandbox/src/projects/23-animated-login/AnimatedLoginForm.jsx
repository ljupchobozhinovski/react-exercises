import React, { useEffect, useRef, useState } from "react";
import Button from "../Components/Button";
import FormGroup from "../Components/FormGroup";
import { LoginContainer, FormAnimation } from "./Form.Style";

export default function AnimatedLoginForm() {
  let email = useRef();
  let password = useRef();
  useEffect(() => {
    email.current.focus();
  });

  const [rotate, setRotate] = useState({
    animation: "",
    borderColor: "",
    background: ""
  });

  let formStyle = {
    width: 350,
    marginTop: "15vh"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.current.value !== "" && password.current.value !== "") {
      setRotate({
        animation: "animate",
        borderColor: "green",
        background: "green"
      });
    } else {
      setRotate({ animation: "", borderColor: "red" });
    }
  };

  return (
    <LoginContainer className={rotate.animation}>
      <FormAnimation
        background={rotate.background}
        borderColor={rotate.borderColor}
        className={rotate.animation}
      ></FormAnimation>
      <div className="container my-5"></div>
      <form
        onSubmit={handleSubmit}
        style={formStyle}
        className="card m-1 m-auto"
      >
        <h2 className="my-2 mx-auto">Login</h2>

        <FormGroup
          labelText={"Email"}
          inputType={"email"}
          reference={email}
          className={"form-control mb-3"}
        />
        <FormGroup
          labelText={"Password"}
          inputType={"password"}
          reference={password}
          className={"form-control mb-3"}
        />
        <div className="d-flex flex-column">
          <Button btnClass={"btn-dark w-50 mx-auto mb-3"} text={"Submit"} />
          <small className="text-info">Don't have an account?</small>
          <label
            className="mt-1 fw-200 text-end text-dark"
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Register
          </label>
        </div>
      </form>
    </LoginContainer>
  );
}
