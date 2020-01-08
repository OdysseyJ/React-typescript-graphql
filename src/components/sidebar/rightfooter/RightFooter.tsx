import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Paper, List, Divider, Grid, Link, Button } from "@material-ui/core";
import oc from "open-color";
import { Route } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      alignItems: "center",
      justifyContent: "center",
      width: "88%",
      margin: theme.spacing(2),
      marginLeft: theme.spacing(0)
    },
    content: {
      margin: theme.spacing(1)
    },
    grid: {
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    },
    button: {
      fontSize: 11,
      color: "gray"
    },
    copyrightdiv: {
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      marginBottom: theme.spacing(1),
      fontSize: 15
    },
    div: {
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      marginBottom: theme.spacing(1),
      fontSize: 10,
      color: "gray"
    }
  })
);

export default function RightFooter() {
  const classes = useStyles();
  const number = 3355;

  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.content}>
        <Grid container>
          <Grid item xs={6} className={classes.grid}>
            <Link>
              <Button className={classes.button}>연플소개</Button>
            </Link>
          </Grid>
          <Grid item xs={6} className={classes.grid}>
            <Link>
              <Button className={classes.button}>Facebook</Button>
            </Link>
          </Grid>
          <Grid item xs={6} className={classes.grid}>
            <Link>
              <Button className={classes.button}>문의하기</Button>
            </Link>
          </Grid>
          <Grid item xs={6} className={classes.grid}>
            <Link>
              <Button className={classes.button}>Contact Us</Button>
            </Link>
          </Grid>
        </Grid>
        <Divider></Divider>
        <Grid container>
          <Grid item xs={8}>
            <Link>
              <Button className={classes.button}>
                이용약관 및 후기이용규칙
              </Button>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link>
              <Button className={classes.button}>개인정보처리방침</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.copyrightdiv}>Copyright © YONPLE 2019</div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.div}>
              Icons made by Vectors Market from www.flaticon.com is licensed by
              CC 3.0 BY
            </div>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
