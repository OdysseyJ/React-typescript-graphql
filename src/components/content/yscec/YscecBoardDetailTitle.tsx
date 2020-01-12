import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5
  },
  helper: {
    fontSize: 10
  },
  date: {
    fontSize: 10,
    color: "gray"
  },
  title: {
    fontWeight: 700,
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  }
}));

type YscecBoardDetailTitleProps = {
  date: string;
  title: string;
};

const YscecBoardDetailTitle = ({ date, title }: YscecBoardDetailTitleProps) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <EmailIcon className={classes.icon}></EmailIcon>
        <div>
          <div className={classes.helper}>YSCEC 도우미</div>
          <div className={classes.date}>{date}</div>
        </div>
      </div>
      <div className={classes.title}>{title}</div>
    </>
  );
};

export default YscecBoardDetailTitle;
