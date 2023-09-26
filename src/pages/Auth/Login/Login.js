import React, { useState } from "react";
import Button from "@mui/material/Button";
import classes from "./Login.module.scss";
import { CustomFormControl } from "../../../components/UI/CustomFormControl";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";

export const Login = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <form className="general-form" onSubmit={handleSubmit}>
      <CustomFormControl
        label="Username"
        required={true}
        onChange={(e) => setUsername(e.target.value)}
      />
      <CustomFormControl
        label="Address"
        required={true}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};
