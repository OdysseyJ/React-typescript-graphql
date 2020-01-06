import React from "react";
import Footer from "../components/layout/Footer";
import Dashboard from "../components/layout/Dashboard";
import Header from "../components/auth/Header";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    }
  })
);

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  );
};

export default Home;
