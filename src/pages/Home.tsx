import React from "react";
import Dashboard from "../components/layout/Dashboard";
import Content from "../components/home/Content";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import NoticeList from "../components/sidebar/notice/NoticeList";

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
