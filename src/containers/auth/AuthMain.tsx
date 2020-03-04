import React from "react";
import AuthForm from "../../components/auth/AuthForm";
// import { useMutation } from "@apollo/react-hooks";
// import { LOGIN } from "../queries/AuthQueries";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import AuthImage from "../../components/auth/AuthImage";

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

  let history = useHistory();
  //   const [login] = useMutation(LOGIN, {
  //     onCompleted({ login }) {
  //       localStorage.setItem("token", login.token as string);
  //       history.push("/");
  //     }
  //   });
  return (
    <div className={classes.root}>
      <AuthImage></AuthImage>
      <AuthForm></AuthForm>
      {/* <AuthForm login={login}></AuthForm> */}
    </div>
  );
};

export default AuthMain;
