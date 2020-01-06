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
  ListItemText
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
      width: 300,
      margin: theme.spacing(3)
    },
    list: {
      padding: 0
    },
    noticeheader: {
      backgroundColor: oc.gray[2]
    },
    listfont: {
      fontSize: 8
    }
  })
);

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List component="nav" className={classes.list}>
        <ListSubheader className={classes.noticeheader}>
          <Grid container>
            <Grid item xs={10}>
              공지사항
            </Grid>
            <Grid item xs={2}>
              <Button>더보기</Button>
            </Grid>
          </Grid>
        </ListSubheader>
        <Divider></Divider>
        <ListItem>
          <Grid container>
            <Grid item xs={2}>
              <ListItemText>#</ListItemText>
            </Grid>
            <Grid item xs={3}>
              <ListItemText>제목</ListItemText>
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
