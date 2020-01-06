import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import oc from "open-color";
import Copyright from "../common/Copyright";

const useStyles = makeStyles((theme?: any) =>
  createStyles({
    root: {
      padding: 100,
      display: "table"
    },
    image: {
      display: "table-cell",
      verticalAlign: "center",
      alignContent: "center",
      width: "100%",
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundColor: "white",
      backgroundPosition: "center"
    },
    paper: {
      display: "flex",
      width: 300,
      height: 500,
      padding: theme.spacing(5),
      flexDirection: "column",
      alignItems: "center",
      verticalAlign: "center",
      textAlign: "center"
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
    "@media (max-width: 500px)": {
      root: {
        padding: 0
      },
      image: {
        display: "none"
      },
      paper: {
        width: "auto",
        padding: theme.spacing(10)
      }
    }
  })
);

export default function AuthForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.image}></div>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          연세인의 커뮤니티
        </Typography>
        <Typography component="h1" variant="h5">
          연플
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="auth/find" variant="body2">
                로그인 정보를 잊으셨나요?
              </Link>
            </Grid>
            <Grid item>
              <Link href="auth/join" variant="body2">
                {"회원가입"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      </div>
    </div>
  );
}
