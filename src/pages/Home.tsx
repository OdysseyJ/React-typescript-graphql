import React from "react";
import { Dashboard, Footer, Sidebar, Content } from "../components/layout";
import { Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootHome: {
      display: "flex"
    },
    grids: {
      justifyContent: "center"
    },
    "@media (max-width: 700px)": {
      grids: {
        justifyContent: "left"
      }
    }
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.rootHome}>
        <Dashboard></Dashboard>
        <Grid container className={classes.grids}>
          <Content></Content>
          <Sidebar></Sidebar>
        </Grid>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
