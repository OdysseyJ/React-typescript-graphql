import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import NoticeList from "../sidebar/notice/NoticeList";
import RightFooter from "../sidebar/rightfooter/RightFooter";
import User from "../sidebar/user/User";
import Menu from "../sidebar/menu/Menu";
import Ad from "../sidebar/ad/Ad";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    leftsidebar: {
      width: 340,
      padding: 5,
      marginLeft: theme.spacing(26),
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }
  })
);

const RightSideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.leftsidebar}>
      <User username={"블루블루블루스"} feather={45}></User>
      <Menu></Menu>
      {/* <Ad></Ad> */}
    </div>
  );
};

export default RightSideBar;
