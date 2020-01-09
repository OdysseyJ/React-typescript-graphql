import React from "react";
import { ListItem, Button, makeStyles, Theme } from "@material-ui/core";
import { AccountCircle, Apple } from "@material-ui/icons";
import oc from "open-color";

const useStyles = makeStyles((theme: Theme) => ({
  accountIcon: {
    padding: 0,
    margin: "auto",
    width: 50,
    height: 50,
    color: "gray"
  },
  titleItemText: {
    margin: "auto",
    color: "gray",
    fontSize: 20,
    fontWeight: 700
  },
  listItemText: {
    margin: "auto",
    color: "gray",
    fontSize: 12
  },
  listItem: { padding: 0, justifyContent: "center" },
  writeButtonList: { display: "flex", justifyContent: "flex-end" },
  writeButton: {
    alignItems: "right",
    backgroundColor: oc.blue[4],
    color: "white"
  },
  "@media (max-width: 1100px)": {}
}));

type ScrollBoardTitleProps = {
  path: string;
  currentRandomNickname: string;
};

const ScrollBoardTitle = ({
  path,
  currentRandomNickname
}: ScrollBoardTitleProps) => {
  const classes = useStyles();
  let title = "";
  switch (path) {
    case "freshman": {
      title = "새내기게시판";
      break;
    }
    case "noname": {
      title = "독수리익명게시판";
      break;
    }
    case "job": {
      title = "취업/진로게시판";
      break;
    }
    case "humor": {
      title = "유머/화제게시판";
      break;
    }
  }
  return (
    <>
      <ListItem>
        <div className={classes.titleItemText}>
          <Apple></Apple>
          {"  "}
          {title}
        </div>
      </ListItem>
      <ListItem>
        <AccountCircle className={classes.accountIcon}></AccountCircle>
      </ListItem>
      <ListItem>
        <div className={classes.listItemText}>
          현재 랜덤 닉네임 : {currentRandomNickname}
        </div>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button>닉네임 새로고침</Button>
      </ListItem>
      <ListItem className={classes.writeButtonList}>
        <Button className={classes.writeButton}>글쓰기</Button>
      </ListItem>
    </>
  );
};

export default ScrollBoardTitle;
