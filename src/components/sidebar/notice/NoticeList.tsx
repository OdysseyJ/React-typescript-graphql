import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { Grid, Paper, ListSubheader } from "@material-ui/core";
import NoticeRow from "./NoticeRow";
import oc from "open-color";
import CustomLink from "../../common/CustomLink";

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
      width: 300,
      margin: theme.spacing(1)
    },
    noticeheader: {
      backgroundColor: oc.gray[1],
      display: "flex",
      alignItems: "center",
      height: 30
    },
    headerText: {
      color: "black",
      flex: 1
    },
    headerTextLink: {
      color: "gray",
      fontSize: 12
    },
    list: {
      padding: 0,
      width: "auto"
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
          <div className={classes.headerText}>공지사항</div>
          <CustomLink path={"home/notice"}>
            <div className={classes.headerTextLink}>더보기 ></div>
          </CustomLink>
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
