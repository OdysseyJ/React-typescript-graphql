import React from "react";
import {
  ListItem,
  ListItemText,
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Button,
  Link
} from "@material-ui/core";
import oc from "open-color";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      height: 70
    },
    grid: {
      margin: "auto"
    },
    classNameButton: {
      backgroundColor: oc.blue[1]
    },
    classNameButtonFont: {
      fontSize: 12,
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    titleFont: {
      fontSize: 12,
      width: 150,
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    timeFont: {
      fontSize: 12,
      width: 60,
      color: "gray",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    "@media (max-width: 700px)": {
      classNameButton: {
        width: 70
      },
      titleFont: {
        width: 130
      },
      timeFont: {
        width: 60
      }
    }
  })
);

export type YscecRowPropsDetail = {
  contentTitle: string;
  time: string;
};

export type YscecRowProps = {
  id: number;
  className: string;
  details: YscecRowPropsDetail[];
};

const YscecRow = ({ id, className, details }: YscecRowProps) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <ListItemText>
        <Grid container>
          <Grid xs={4} item className={classes.grid}>
            <Link
              href={`home/subject/${id}`}
              style={{ textDecoration: "none" }}
            >
              <Button className={classes.classNameButton}>
                <div className={classes.classNameButtonFont}>{className}</div>
              </Button>
            </Link>
          </Grid>
          <Grid xs={6} item className={classes.grid}>
            <div className={classes.titleFont}>{details[0].contentTitle}</div>
            <div className={classes.titleFont}>{details[1].contentTitle}</div>
          </Grid>
          <Grid xs={2} item className={classes.grid}>
            <div className={classes.timeFont}>{details[0].time}</div>
            <div className={classes.timeFont}>{details[1].time}</div>
          </Grid>
        </Grid>
      </ListItemText>
    </ListItem>
  );
};

export default YscecRow;
