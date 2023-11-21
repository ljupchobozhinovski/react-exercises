import React, { useContext } from "react";
import Button from "../../Components/Button";
import Alert from "../../Components/Alert";
import { AuthContext } from "../context/AuthContext";
export default function Auth() {
  const auth = useContext(AuthContext);

  return (
    <div className="d-flex flex-column mx-auto w-50">
      {auth.status === null ? (
        ""
      ) : auth.status === true ? (
        <Alert type={"alert alert-success"} message={"Successful login"} />
      ) : null}
      {auth.status === null ? (
        <Button
          btnClass={"btn btn-success"}
          text={"Login"}
          onClick={auth.login}
        />
      ) : auth.status === true ? (
        <Button
          btnClass={"btn btn-danger"}
          text={"Logout"}
          onClick={auth.logout}
        />
      ) : (
        <Button
          btnClass={"btn btn-primary"}
          text={"Try Again"}
          onClick={auth.login}
        />
      )}
    </div>
  );
}
