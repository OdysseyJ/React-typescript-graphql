import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Divider,
  Grid,
  List,
  ListItemText,
  ListItem
} from "@material-ui/core";
import oc from "open-color";
import ClassRow from "./ClassRow";
import YscecRow, { YscecRowProps } from "./YscecRow";
import { classInfo, YscecInfo } from "../../../common/DataCenter";
import ContentPaper from "../../../common/ContentPaper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    list: {
      padding: 0
    },
    classes: {
      width: 400,
      padding: 10
    },
    classesTitle: {
      fontSize: 18,
      fontWeight: 500
    },
    classesSubtitleFont: {
      fontSize: 12,
      color: oc.blue[6]
    },
    classDetail: {
      width: 400,
      padding: 10
    },
    classEndtext: {
      fontSize: 12,
      color: "gray"
    },
    guideMessage: {
      fontSize: 9,
      fontWeight: 500,
      color: "gray"
    },
    guideMessageRed: {
      fontSize: 9,
      fontWeight: 500,
      color: oc.red[6],
      paddingTop: 10
    }
  })
);

export default function TimeTable() {
  const classes = useStyles();

  return (
    <ContentPaper>
      <Grid container className={classes.grid}>
        <div className={classes.classes}>
          <List className={classes.list}>
            <ListItem>
              <ListItemText>
                <div className={classes.classesTitle}>2019학년도 2학기</div>
              </ListItemText>
            </ListItem>
            <Divider></Divider>
            <Divider></Divider>
            <ListItem>
              <ListItemText>
                <Grid container>
                  <Grid xs={4} className={classes.classesSubtitleFont} item>
                    과목명
                  </Grid>
                  <Grid xs={2} className={classes.classesSubtitleFont} item>
                    교수명
                  </Grid>
                  <Grid xs={2} className={classes.classesSubtitleFont} item>
                    후기열람
                  </Grid>
                  <Grid xs={2} className={classes.classesSubtitleFont} item>
                    후기작성
                  </Grid>
                  <Grid xs={2} className={classes.classesSubtitleFont} item>
                    강의알림
                  </Grid>
                </Grid>
              </ListItemText>
            </ListItem>
            <Divider></Divider>
            {classInfo.map((classInfo: any) => {
              return (
                <div>
                  <ClassRow
                    className={classInfo.className}
                    professorName={classInfo.professorName}
                  ></ClassRow>
                  <Divider></Divider>
                </div>
              );
            })}
            <Divider></Divider>
            <div className={classes.guideMessageRed}>
              * 모바일 버전에서는 시험후기 작성이 불가합니다. PC버전에서
              작성해주세요.
            </div>
            <div className={classes.guideMessage}>
              * 시간표에 이상이 있는 경우 카카오 플러스 친구 Yonple로
              문의해주세요!
            </div>
            <div className={classes.guideMessage}>
              * 작성할 수 있는 후기가 하나도 없는 경우는 카카오 플러스 친구
              Yonple로 문의해주세요!
            </div>
          </List>
        </div>

        <div className={classes.classDetail}>
          <List className={classes.list}>
            <ListItem button>
              <>
                <ListItemText>
                  <div className={classes.classesTitle}>내 YSCEC</div>
                </ListItemText>
                <div className={classes.classEndtext}>더보기 ></div>
              </>
            </ListItem>
            <Divider></Divider>
            <Divider></Divider>
            {YscecInfo.map((info: YscecRowProps) => {
              return (
                <div>
                  <YscecRow
                    id={info.id}
                    className={info.className}
                    details={info.details}
                  ></YscecRow>
                </div>
              );
            })}
          </List>
        </div>
      </Grid>
    </ContentPaper>
  );
}
