import React from "react";
import {
  makeStyles,
  Theme,
  ButtonBase,
  InputBase,
  Grid
} from "@material-ui/core";
import oc from "open-color";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: 10,
    width: "100%",
    display: "flex"
  },
  input: {
    flex: 1,
    border: "1px solid	#D3D3D3",
    height: 37,
    paddingLeft: 10,
    fontSize: 13,
    color: oc.gray[6]
  },
  buttonBase: {
    backgroundColor: oc.blue[2],
    height: 37,
    width: 37
  },
  "@media (max-width: 1100px)": {
    input: {
      width: 270
    }
  }
}));

const ReplyBoardWriteButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <InputBase
        className={classes.input}
        placeholder={"댓글을 입력하세요"}
      ></InputBase>
      <ButtonBase className={classes.buttonBase}>
        <CreateIcon></CreateIcon>
      </ButtonBase>
    </div>
  );
};

export default ReplyBoardWriteButton;
