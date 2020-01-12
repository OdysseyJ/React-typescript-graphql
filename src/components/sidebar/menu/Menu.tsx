import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from "@material-ui/core";
import MenuItemTitle from "./MenuItemTitle";
import MenuItemRow from "./MenuItemRow";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ForumIcon from "@material-ui/icons/Forum";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 300,
      margin: theme.spacing(1)
    },
    div: {
      fontSize: 13
    },
    icon: {
      color: "gray",
      width: 30
    }
  })
);

const Menu = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <List>
        <MenuItemTitle title={`YSCEC & 시험후기`}>
          <AssignmentIcon className={classes.icon}></AssignmentIcon>
        </MenuItemTitle>
        <MenuItemRow title={`콘텐츠라이팅`}></MenuItemRow>
        <MenuItemRow title={`대중음악의이해`}></MenuItemRow>
        <MenuItemRow title={`체력육성`}></MenuItemRow>
        <MenuItemRow title={`알고리즘분석`}></MenuItemRow>
        <MenuItemRow title={`선형대수와그응용`}></MenuItemRow>
        <MenuItemRow title={`공학회계`}></MenuItemRow>
        <Divider></Divider>
        <MenuItemTitle title={`게시판`}>
          <ForumIcon className={classes.icon}></ForumIcon>
        </MenuItemTitle>
        <MenuItemRow title={`독수리익명게시판`}></MenuItemRow>
        <MenuItemRow title={`새내기게시판`}></MenuItemRow>
        <MenuItemRow title={`유머/화제게시판`}></MenuItemRow>
        <MenuItemRow title={`취업/진로 지식IN`}></MenuItemRow>
        <Divider></Divider>
        <MenuItemTitle title={`문의/신고하기`} isButton={true}>
          <HelpOutlineIcon className={classes.icon}></HelpOutlineIcon>
        </MenuItemTitle>
        <MenuItemTitle title={`로그아웃`} isButton={true}>
          <ExitToAppIcon className={classes.icon}></ExitToAppIcon>
        </MenuItemTitle>
      </List>
    </Paper>
  );
};

export default Menu;
