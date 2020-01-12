import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import oc from "open-color";
import CustomLink from "../common/CustomLink";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: "white",
      display: "flex",
      justify: "center",
      height: 80
    },
    toolBar: {
      height: 80,
      display: "flex"
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      display: "none",
      color: oc.blue[6],
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        display: "flex"
      }
    },
    title: {
      alignItems: "center",
      color: oc.blue[6],
      width: "100%",
      fontSize: 20,
      display: "block",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        width: 100
      }
    }
  })
);

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <CustomLink path="home">
              <Typography className={classes.title} variant="h6" noWrap>
                YONPLE
              </Typography>
            </CustomLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
