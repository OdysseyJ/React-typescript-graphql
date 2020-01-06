import React from "react";
import { Dashboard, Footer, Sidebar, Content } from "../components/layout";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootHome: {
      display: "flex"
    },
    sidebar: {
      width: 500,
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }
  })
);

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.rootHome}>
        <Dashboard></Dashboard>
        <Content></Content>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
