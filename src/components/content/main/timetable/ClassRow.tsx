import React from "react";
import {
  ListItem,
  ListItemText,
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Button,
  IconButton,
  Divider
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      height: 50
    },
    grid: {
      margin: "auto"
    },
    nameFont: {
      fontSize: 12,
      width: 100,
      color: "gray",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    professorFont: {
      fontSize: 12,
      width: 70,
      color: "gray",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    "@media (max-width: 700px)": {
      nameFont: {
        width: 70
      },
      professorFont: {
        width: 50
      }
    }
  })
);

export type ClassRowProps = {
  className: string;
  professorName: string;
};

const ClassRow = ({ className, professorName }: ClassRowProps) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <ListItemText>
        <Grid container>
          <Grid xs={4} item className={classes.grid}>
            <div className={classes.nameFont}>{className}</div>
          </Grid>
          <Grid xs={2} item className={classes.grid}>
            <div className={classes.professorFont}>{professorName}</div>
          </Grid>
          <Grid xs={2} item className={classes.grid}>
            <IconButton>
              <PhotoCamera></PhotoCamera>
            </IconButton>
          </Grid>
          <Grid xs={2} item className={classes.grid}>
            <IconButton>
              <PhotoCamera></PhotoCamera>
            </IconButton>
          </Grid>
          <Grid xs={2} item className={classes.grid}>
            <IconButton>
              <PhotoCamera></PhotoCamera>
            </IconButton>
          </Grid>
        </Grid>
      </ListItemText>
    </ListItem>
  );
};

export default ClassRow;
