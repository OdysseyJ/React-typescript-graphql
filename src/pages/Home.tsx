import React from "react";
import {
  Header,
  Footer,
  LeftSideBar,
  RightSideBar,
  Content
} from "../components/layout";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootHome: {
      display: "flex",
      paddingTop: 10,
      justifyContent: "center"
    }
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Header></Header>
      <div className={classes.rootHome}>
        <LeftSideBar></LeftSideBar>
        <Content></Content>
        <RightSideBar></RightSideBar>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
