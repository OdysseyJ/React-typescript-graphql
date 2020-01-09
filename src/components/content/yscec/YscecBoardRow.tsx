import React from "react";
import { ListItem, makeStyles, Theme, Grid } from "@material-ui/core";
import ClampLines from "react-clamp-lines";
import oc from "open-color";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    height: 80,
    padding: 0
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  file: {
    width: 10,
    height: 10
  },
  date: {
    color: oc.gray[5],
    fontSize: 11,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  preview: {
    fontSize: 12
  },
  "@media (max-width: 1100px)": {
    root: {
      width: 350,
      margin: theme.spacing(1)
    }
  }
}));

export type YscecBoardRowProps = {
  title: string;
  preview: string;
  date: string;
  file: boolean;
};

const YscecBoardRow = ({ title, preview, date, file }: YscecBoardRowProps) => {
  const classes = useStyles();
  return (
    <ListItem button className={classes.button}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.title}>{title}</div>
        </Grid>
        <Grid item xs={12}>
          <ClampLines
            text={preview}
            id={"yscecBoardRow"}
            lines={2}
            ellipsis="..."
            buttons={false}
            className={classes.preview}
          ></ClampLines>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.date}>{date} YSCEC 도우미</div>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default YscecBoardRow;
