import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ButtonBase } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import oc from "open-color";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: 10,
    display: "flex",
    alignItems: "center"
  },
  border: {
    width: 60,
    height: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #D3D3D3"
  },
  icon: {
    width: 20,
    height: 20,
    color: "gray"
  },
  image: {
    marginLeft: 10
  },
  button: {},
  text: { width: "100%", fontSize: 10, color: "gray", textAlign: "center" }
}));

const SimpleDiv = () => {
  const classes = useStyles();
  const [files, setFiles] = useState<string[]>([]);

  const handleChange = (event: any) => {
    let temp: string[] = [];
    if (event.target.files.length !== 0) {
      for (var i = 0; i < event.target.files.length; i++) {
        console.log("test");
        temp.push(URL.createObjectURL(event.target.files[i]));
      }
      setFiles(temp);
    }
  };

  return (
    <div className={classes.container}>
      <ButtonBase className={classes.button} component="label">
        <div className={classes.border}>
          <CameraAltIcon className={classes.icon}></CameraAltIcon>
          <div className={classes.text}>이미지</div>
          <div className={classes.text}>(선택)</div>
          <input
            id={"file-input"}
            style={{ display: "none" }}
            type="file"
            name="imageFile"
            onChange={handleChange}
            multiple
          />
        </div>
      </ButtonBase>
      {files.map(p => {
        return (
          <img
            className={classes.image}
            id="thumbnail"
            src={p}
            width={60}
            height={60}
          ></img>
        );
      })}
    </div>
  );
};

export default React.memo(SimpleDiv);
