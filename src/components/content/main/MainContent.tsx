import React from "react";
import { Grid, makeStyles, createStyles, Theme } from "@material-ui/core";
import NonameBoard from "./board/NonameBoard";
import FreshmanBoard from "./board/FreshmanBoard";
import JobBoard from "./board/JobBoard";
import HumorBoard from "./board/HumorBoard";
import TimeTable from "./timetable/TimeTable";
import Today from "./board/Today";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      width: "flex"
    }
  })
);

const MainContent = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.grid}>
        <Today></Today>
        <TimeTable></TimeTable>
        <NonameBoard></NonameBoard>
        <FreshmanBoard></FreshmanBoard>
        <JobBoard></JobBoard>
        <HumorBoard></HumorBoard>
      </Grid>
    </div>
  );
};

export default MainContent;
