import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import {
  Grid,
  Paper,
  ListSubheader,
  Button,
  ListItemText,
  Link
} from "@material-ui/core";
import NoticeRow from "./NoticeRow";
import oc from "open-color";

const posts = [
  "연세대 고등교육혁신원에서 알려드립니다.",
  "연세대 고등교육혁신원에서 알려드립니다.",
  "연세대 고등교육혁신원에서 알려드립니다.",
  "연세대 고등교육혁신원에서 알려드립니다.",
  "연세대 고등교육혁신원에서 알려드립니다.",
  "연세대 고등교육혁신원에서 알려드립니다.",
  "연세대 고등교육혁신원에서 알려드립니다.",
  "연세대 고등교육혁신원에서 알려드립니다.",
  "연세대 고등교육혁신원에서 알려드립니다.",
  "연세대 고등교육혁신원에서 알려드립니다."
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      alignItems: "center",
      justifyContent: "center",
      width: "88%",
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

export default function SimpleList() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <List component="nav" className={classes.list}>
        <ListSubheader className={classes.noticeheader}>
          <Grid container>
            <Grid item xs={10} className={classes.textcolor}>
              공지사항
            </Grid>
            <Grid item xs={2}>
              <Link className={classes.linktextcolor} href={`/home/notice`}>
                더보기>
              </Link>
            </Grid>
          </Grid>
        </ListSubheader>
        <Divider></Divider>
        <ListItem className={classes.titleListItem}>
          <Grid container className={classes.grid}>
            <Grid item xs={2}>
              <div className={classes.titleFont}>#</div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.titleFont}>제목</div>
            </Grid>
          </Grid>
        </ListItem>
        {posts.map((post, index) => (
          <div>
            <Divider></Divider>
            <NoticeRow primary={post} index={index}></NoticeRow>
          </div>
        ))}
      </List>
    </Paper>
  );
}
