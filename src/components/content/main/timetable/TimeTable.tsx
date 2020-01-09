import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import oc from "open-color";
import ClassRow, { ClassRowProps } from "./ClassRow";
import YscecRow, { YscecRowProps, YscecRowPropsDetail } from "./YscecRow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      alignItems: "center",
      justifyContent: "center",
      width: 832,
      margin: theme.spacing(2),
      marginBottom: theme.spacing(0)
    },
    content: {
      margin: theme.spacing(2)
    },
    list: {
      padding: 0
    },
    classes: {
      width: 368,
      marginRight: 60
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
      width: 368
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
    },
    "@media (max-width: 1100px)": {
      paper: {
        width: 350
      },
      classes: {
        marginRight: 0
      },
      classDetail: {
        marginTop: 30
      }
    }
  })
);

const classInfo: ClassRowProps[] = [
  { className: "콘텐츠라이팅", professorName: "김형수" },
  { className: "대중음악의이해", professorName: "박애경,권형석" },
  { className: "알고리즘분석", professorName: "안형찬" },
  { className: "선형대수와그응용", professorName: "안수형" },
  { className: "공학화계", professorName: "윤나영" }
];

const YscecInfoDetail: YscecRowPropsDetail[][] = [
  [
    {
      contentTitle: "최종출결 및 ACA자격증 제안",
      time: "12월 11일"
    },
    {
      contentTitle: "제출 서류 관련 공지",
      time: "12월 07일"
    }
  ],
  [
    {
      contentTitle: "최종출결 및 ACA자격증 제안",
      time: "12월 11일"
    },
    {
      contentTitle: "제출 서류 관련 공지",
      time: "12월 07일"
    }
  ],
  [
    {
      contentTitle: "최종출결 및 ACA자격증 제안",
      time: "12월 11일"
    },
    {
      contentTitle: "제출 서류 관련 공지",
      time: "12월 07일"
    }
  ],
  [
    {
      contentTitle: "최종출결 및 ACA자격증 제안",
      time: "12월 11일"
    },
    {
      contentTitle: "제출 서류 관련 공지",
      time: "12월 07일"
    }
  ],
  [
    {
      contentTitle: "최종출결 및 ACA자격증 제안",
      time: "12월 11일"
    },
    {
      contentTitle: "제출 서류 관련 공지",
      time: "12월 07일"
    }
  ]
];

const YscecInfo: YscecRowProps[] = [
  {
    id: 11111,
    className: "콘텐츠라이팅",
    details: YscecInfoDetail[0]
  },
  {
    id: 11112,
    className: "대중음악의이해",
    details: YscecInfoDetail[1]
  },
  {
    id: 11113,
    className: "알고리즘분석",
    details: YscecInfoDetail[2]
  },
  {
    id: 11114,
    className: "선형대수와그응용",
    details: YscecInfoDetail[3]
  },
  {
    id: 11115,
    className: "공학회계",
    details: YscecInfoDetail[4]
  }
];

export default function TimeTable() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.content}>
        <Grid container>
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
                    <Divider></Divider>
                  </div>
                );
              })}
            </List>
            <Divider></Divider>
          </div>
        </Grid>
      </div>
    </Paper>
  );
}
