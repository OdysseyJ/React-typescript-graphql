import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
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
      flexGrow: 1,
      marginTop: theme.spacing(10)
    },
    paper: {
      alignItems: "center",
      justifyContent: "center"
    },
    paperForm: {
      width: 350,
      height: 400,
      margin: theme.spacing(5),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
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
      paperForm: {
        width: "auto"
      }
    }
  })
);

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid
      container
      component="main"
      alignContent="center"
      justify="center"
      className={classes.root}
    >
      <CssBaseline />
      <Paper>
        <div className={classes.paperForm}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            이메일
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="회원가입시 사용한 이메일을 입력해주세요"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              이메일 전송
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/auth" variant="body2">
                  {"로그인하기"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Paper>
    </Grid>
  );
}
