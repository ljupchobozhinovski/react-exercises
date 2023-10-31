import React, { useRef, useEffect, useState } from "react";
import Title from "../Components/Title";
import Alert from "../Components/Alert";
import Button from "../Components/Button";
export default function RegistrationForm() {
  let inputName = useRef(null);
  let inputEmail = useRef(null);
  let inputPassword = useRef(null);

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const [values, setValues] = useState({
    user_name: "",
    email: "",
    password: ""
  });

  const [submit, setSubmit] = useState(false);

  const [valid, setValid] = useState(false);

  const handleNameChange = (e) => {
    setValues({ ...values, user_name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setValues({ ...values, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.user_name) {
      inputName.current.focus();
    } else if (!values.email) {
      inputEmail.current.focus();
    } else if (!values.password) {
      inputPassword.current.focus();
    }

    if (values.user_name && values.email && values.password) {
      setValid(true);
    }
    setSubmit(true);
  };

  return (
    <div className="mx-auto">
      <div className="container w-75 d-flex flex-column align-items-center">
        {submit && valid ? (
          <>
            <Alert
              type={"success"}
              message={"You have successfully registered to our page!"}
              delay={true}
              delayTime={2000}
            />
            <Title
              text={`Welcome ${values.user_name}. Your e-mail address ${values.email} has been added to the database.`}
            />
          </>
        ) : (
          <form className="w-50 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-3">
              <Title text="Registration" />
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                ref={inputName}
                value={values.user_name}
                onChange={handleNameChange}
              />
              {submit && !values.user_name ? (
                <label className="form-label text-danger fw-bolder">
                  Please enter your username
                </label>
              ) : null}
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                ref={inputEmail}
                value={values.email}
                onChange={handleEmailChange}
              />
              {submit && !values.email ? (
                <label className="form-label text-danger fw-bolder">
                  Please enter your email
                </label>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                ref={inputPassword}
                value={values.password}
                onChange={handlePasswordChange}
              />
              {submit && !values.password ? (
                <label className="form-label text-danger fw-bolder">
                  Please enter your password
                </label>
              ) : null}
            </div>
            <Button btnClass={"btn btn-primary w-100"} text={"Register"} />
          </form>
        )}
      </div>
    </div>
  );
}
