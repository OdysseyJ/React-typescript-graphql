import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { Grid } from "@material-ui/core";

function Copyright() {
  return (
    <div>
      <Typography variant="body2" color="textSecondary">
        {"Copyright © "}
        <Link color="inherit" href="https://www.yonple.com/">
          Yonple
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </div>
  );
}

function DesignedBy() {
  return (
    <div>
      <Typography variant="body2" color="textSecondary">
        {"/ Designed by Yonple"}
      </Typography>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Grid container justify="center">
          <Copyright />
          <DesignedBy></DesignedBy>
        </Grid>
      </Container>
    </footer>
  );
}
