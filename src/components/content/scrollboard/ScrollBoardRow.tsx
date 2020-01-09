import React from "react";
import { ListItem, makeStyles, Theme, Grid, Link } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import oc from "open-color";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    width: "100%"
  },
  subTitleLeft: {
    color: oc.gray[5],
    fontSize: 12,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  subTitleRight: {
    textAlign: "right"
  },
  fontBlue: {
    fontSize: 12,
    color: oc.blue[4],
    display: "inline-block",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  fontRed: {
    fontSize: 12,
    color: oc.red[4],
    display: "inline-block",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  grid: {
    margin: "auto"
  },
  icon: {
    height: 15
  },
  "@media (max-width: 1100px)": {
    root: {
      width: 350,
      margin: theme.spacing(1)
    }
  }
}));

export type ScrollBoardRowProps = {
  id: number;
  boardName: string;
  title: string;
  date: string;
  nickname: string;
  hasImage: boolean;
  like: number;
  unlike: number;
  comment: number;
};

const ScrollBoardRow = ({
  id,
  boardName,
  title,
  date,
  nickname,
  hasImage,
  like,
  unlike,
  comment
}: ScrollBoardRowProps) => {
  const classes = useStyles();
  return (
    <Link
      href={`/home/board/${boardName}/${id}`}
      style={{ textDecoration: "none" }}
      color="inherit"
    >
      <ListItem button>
        <Grid container className={classes.grid}>
          <Grid item xs={12}>
            <div className={classes.title}>{title}</div>
          </Grid>
          <Grid item xs={9} className={classes.grid}>
            <div className={classes.subTitleLeft}>
              {date} | {nickname}
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.subTitleRight}>
              <DeleteIcon className={classes.icon}></DeleteIcon>
              <div className={classes.fontBlue}>{like}</div>
              <DeleteIcon className={classes.icon}></DeleteIcon>
              <div className={classes.fontRed}>{unlike}</div>
              <DeleteIcon className={classes.icon}></DeleteIcon>
              <div className={classes.fontBlue}>{comment}</div>
            </div>
          </Grid>
        </Grid>
      </ListItem>
    </Link>
  );
};

export default ScrollBoardRow;
