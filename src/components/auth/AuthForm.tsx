import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import oc from "open-color";
import Copyright from "../common/Copyright";
// import { LoginInput } from "../../queries/AuthQueries";
import { ApolloError } from "apollo-client";
// import { apolloErrorMessageParser } from "../../apollo/apolloErrorMessageParser";
import { useApolloClient } from "@apollo/react-hooks";
// import { setAlert } from "../common/setAlert";

const useStyles = makeStyles((theme?: any) => ({
  paper: {
    display: "flex",
    width: 300,
    height: 500,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      width: "auto"
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: oc.blue[6]
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  joinWrapper: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default function AuthForm(props: any) {
  const classes = useStyles();
  const client = useApolloClient();
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

  //for Graphql
  // const loginData: LoginInput = {
  //   email: state.email,
  //   password: state.password
  // };

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        테스트용 로그인페이지
      </Typography>
      <Typography component="h1" variant="h5">
        로그인 테스트
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="이메일"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          value={state.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={(e: any) => {
            e.preventDefault();
            // props
            //   .login({
            //     variables: { data: loginData }
            //   })
            //   .catch((err: ApolloError) => {
            //     // const message = apolloErrorMessageParser(err);
            //     // setAlert(client, message);
            //   });
          }}
        >
          로그인
        </Button>
        <div className={classes.joinWrapper}>
          <Link href="auth/find" variant="body2">
            로그인 정보를 잊으셨나요?
          </Link>
          <Link href="auth/join" variant="body2">
            {"회원가입"}
          </Link>
        </div>
      </form>
    </div>
  );
}
