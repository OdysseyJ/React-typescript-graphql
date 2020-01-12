import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Paper, List, ListItem, ListItemAvatar } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    div: {
      display: "flex",
      justifyContent: "center",
      width: 300,
      height: 100,
      padding: 10
    },
    image: {
      width: "100%",
      height: 300
    }
  })
);

const Ad = () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <img src={"/images/ads/den/img_1.jpg"} className={classes.image}></img>
    </div>
  );
};

export default Ad;
