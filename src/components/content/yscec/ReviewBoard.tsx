import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { Grid, Paper, ListSubheader, Link } from "@material-ui/core";
import ReviewBoardRow, { ReviewBoardRowProps } from "./ReviewBoardRow";
import oc from "open-color";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      margin: theme.spacing(2),
      marginBottom: theme.spacing(0),
      marginLeft: theme.spacing(0)
    },
    noticeheader: {
      backgroundColor: oc.gray[2]
    },
    textcolor: {
      color: "black"
    },
    linktextcolor: {
      color: "gray"
    },
    list: {
      padding: 0
    },
    listfont: {
      fontSize: 8
    },
    titleListItem: {
      height: 40
    },
    titleFont: {
      color: "gray",
      fontSize: 12
    },
    grid: {
      margin: "auto"
    }
  })
);

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

type ReviewBoardProps = {
  subjectName: string;
  professorName: string;
  reviewInfo: ReviewBoardRowProps[];
};

export default function ReviewBoard({
  subjectName,
  professorName,
  reviewInfo
}: ReviewBoardProps) {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <List component="nav" className={classes.list}>
        <ListSubheader className={classes.noticeheader}>
          <Grid container>
            <Grid item xs={10} className={classes.textcolor}>
              {subjectName} - {professorName}교수님
            </Grid>
          </Grid>
        </ListSubheader>
        {reviewInfo.map((info: any) => {
          return (
            <>
              <ReviewBoardRow
                id={info.id}
                date={info.date}
                grade={info.grade}
                view={info.view}
                preview={info.preview}
              ></ReviewBoardRow>
              <Divider></Divider>
            </>
          );
        })}
      </List>
    </Paper>
  );
}
