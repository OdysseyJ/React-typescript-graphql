import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  container: { textAlign: "center", margin: 20 },
  title: {
    fontSize: 18,
    fontWeight: 700
  },
  subtitle: {
    fontSize: 12,
    color: "gray"
  },
  "@media (max-width: 1100px)": {
    root: {
      width: 350,
      margin: theme.spacing(1)
    }
  }
}));

export interface NoticeBoardDetailTitleProps {
  title: string;
  date: string;
  view: number;
}

export default function NoticeBoardDetailTitle({
  title,
  date,
  view
}: NoticeBoardDetailTitleProps) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div className={classes.subtitle}>{date}</div>
      <div className={classes.subtitle}>{view} Views</div>
    </div>
  );
}
