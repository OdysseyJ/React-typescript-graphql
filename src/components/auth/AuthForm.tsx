import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import oc from "open-color";
import CustomLink from "../common/CustomLink";

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

type AuthFormProps = {
  handleLoginClick: any;
  state: any;
  handleChange: any;
};

const AuthForm = ({ handleLoginClick, state, handleChange }: AuthFormProps) => {
  const classes = useStyles();

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
          onClick={handleLoginClick}
        >
          로그인
        </Button>
        <div className={classes.joinWrapper}>
          <CustomLink path="auth/find">
            <div style={{ color: "blue" }}>로그인 정보를 잊으셨나요?</div>
          </CustomLink>
          <CustomLink path="auth/join">
            <div style={{ color: "blue" }}>회원가입</div>
          </CustomLink>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
