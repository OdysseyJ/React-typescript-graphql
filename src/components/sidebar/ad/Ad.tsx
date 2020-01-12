import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Paper, List, ListItem, ListItemAvatar } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    div: {
      verticalAlign: "center",
      alignContent: "center",
      width: "100%",
      backgroundImage: "/images/ads/den/img_1.jpg",
      backgroundRepeat: "no-repeat",
      backgroundColor: "white",
      backgroundPosition: "center"
    },
    image: {
      width: "auto"
    }
  })
);

const Ad = () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      {/* <img src={"/images/ads/den/img_1.jpg"} className={classes.image}></img> */}
    </div>
  );
};

export default Ad;
