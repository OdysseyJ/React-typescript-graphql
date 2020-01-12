import React from "react";
import { Grid, makeStyles, createStyles, Theme } from "@material-ui/core";
import TimeTable from "./timetable/TimeTable";
import Today from "./board/Today";
import Board from "./board/Board";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      // display: "flex",
    },
    grid: {
      display: "flex",
      justifyContent: "space-between"
    }
  })
);

const MainContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Today></Today>
      <TimeTable></TimeTable>
      <Grid container className={classes.grid}>
        <Board boardName="독수리익명게시판" path="noname">
          <InboxIcon></InboxIcon>
        </Board>
        <Board boardName="새내기게시판" path="freshman">
          <InboxIcon></InboxIcon>
        </Board>
      </Grid>
      <Grid container className={classes.grid}>
        <Board boardName="취업/진로게시판" path="job">
          <InboxIcon></InboxIcon>
        </Board>
        <Board boardName="유머/화제게시판" path="humor">
          <InboxIcon></InboxIcon>
        </Board>
      </Grid>
    </div>
  );
};

export default MainContent;
