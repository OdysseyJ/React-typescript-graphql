import React, { useState } from "react";
import AuthForm from "../../components/auth/AuthForm";
import { LOGIN_USER } from "../../queries/AuthQueries";
import { makeStyles } from "@material-ui/styles";
import AuthImage from "../../components/auth/AuthImage";
import { useLazyQuery } from "@apollo/react-hooks";
import useAlert from "../../hooks/useAlert";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme?: any) => ({
  root: {
    display: "flex",
    marginTop: 50,
    height: 700,
    alignItems: "center",
    justifyContent: "center"
  }
}));

const AuthMain = () => {
  const classes = useStyles();

  const history = useHistory();
  const showAlert = useAlert("로그인 정보가 올바르지 않습니다.");

  const [loginUser] = useLazyQuery(LOGIN_USER, {
    onCompleted: (data: any) => {
      console.log(data);
      history.push("/");
    },
    onError: (error: any) => {
      showAlert();
    }
  });

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleLoginClick = (e: any) => {
    e.preventDefault();
    loginUser({
      variables: { email: state.email, password: state.password }
    });
  };

  return (
    <div className={classes.root}>
      <AuthImage></AuthImage>
      <AuthForm
        state={state}
        handleChange={handleChange}
        handleLoginClick={handleLoginClick}
      ></AuthForm>
    </div>
  );
};

export default AuthMain;
