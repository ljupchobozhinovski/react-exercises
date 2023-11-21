import React, { useState, useRef, useEffect } from "react";
import Title from "../Components/Title";
import FormGroup from "../Components/FormGroup";
import { Wrapper } from "./authComponents/Wrapper.style";
import Auth from "./authComponents/Auth";
import { AuthContext } from "./context/AuthContext";
export default function AuthApp() {
  const inputName = useRef(null);

  useEffect(() => {
    inputName.current.focus();
  }, [inputName]);

  const [ui, setUi] = useState({
    wrapper: true,
    title: "Authenticate"
  });

  const [animateDenied, setAnimateDenied] = useState(false);

  const [userAuth, setUserAuth] = useState({
    name: "",
    password: ""
  });

  const handleChangeName = (e) => {
    setUserAuth({ ...userAuth, name: e.target.value });
  };

  const handlePasswordName = (e) => {
    setUserAuth({ ...userAuth, password: e.target.value });
  };

  const [authStatus, setAuthStatus] = useState(null);

  const login = () => {
    if (userAuth.name === "Bube" && userAuth.password === "1234") {
      setAuthStatus(true);
      clearInputs();
      authenticate();
    } else {
      setAuthStatus(false);
      setAnimateDenied(true);
      setTimeout(() => {
        setAnimateDenied(false);
      }, 1000);
    }
  };

  function clearInputs() {
    setUserAuth({
      name: "",
      password: ""
    });
  }

  function authenticate() {
    setUi({ wrapper: false, title: `Welcome ${userAuth.name}` });
  }

  const logout = () => {
    window.location.reload(true);
  };

  return (
    <div className="container mt-4" style={{ width: "50%" }}>
      <Title classes={"mb-5"} text={ui.title} />
      <AuthContext.Provider
        value={{ status: authStatus, login: login, logout: logout }}
      >
        {ui.wrapper && (
          <Wrapper className={animateDenied && "active"}>
            <FormGroup
              labelText={"Username"}
              inputType={"text"}
              placeholder={"Enter your username"}
              values={userAuth.name}
              reference={inputName}
              onChange={handleChangeName}
            />
            <FormGroup
              labelText={"Password"}
              inputType={"password"}
              placeholder={"Enter your password"}
              values={userAuth.password}
              onChange={handlePasswordName}
            />
          </Wrapper>
        )}
        <Auth />
      </AuthContext.Provider>
    </div>
  );
}
