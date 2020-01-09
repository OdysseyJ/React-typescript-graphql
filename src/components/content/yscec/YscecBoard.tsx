import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Paper,
  withStyles,
  createStyles,
  List,
  Grid,
  Divider,
  ListItem,
  Button,
  Link
} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import oc from "open-color";
import DescriptionIcon from "@material-ui/icons/Description";
import { useRouteMatch } from "react-router-dom";
import YscecBoardRow, { YscecBoardRowProps } from "./YscecBoardRow";
import { ReviewBoardRowProps } from "./ReviewBoardRow";

import ReviewBoard from "./ReviewBoard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}
interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 120,
      width: "100%",
      backgroundColor: oc.blue[6]
    }
  }
})((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />
));

interface StyledTabProps {
  label: string;
}

const style = {
  minWidth: 120
};

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      color: "black",
      width: 50,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(12),
      "&:focus": {
        opacity: 1
      }
    }
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} style={style} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: 600,
    margin: theme.spacing(3)
  },
  padding: {
    padding: theme.spacing(3)
  },
  list: {
    padding: 0
  },
  demo1: {
    backgroundColor: theme.palette.background.paper
  },
  demo2: {
    backgroundColor: "#2e1534"
  },
  titleListItem: {
    height: 40
  },
  titleLeft: {
    color: "gray",
    fontSize: 12
  },
  titleRight: {
    color: "gray",
    fontSize: 12,
    textAlign: "center"
  },
  grid: {
    margin: "auto"
  },
  backButton: {
    color: "gray",
    fontSize: 12
  },
  titleGrid: {
    alignContent: "center",
    paddingTop: 10
  },
  titleIcon: {
    color: "gray",
    fontSize: 25
  },
  titleMainText: {
    paddingLeft: 5,
    fontSize: 18,
    fontWeight: 700
  },
  subTitleText: {
    fontSize: 12,
    color: "gray",
    paddingBottom: 10
  },
  "@media (max-width: 1100px)": {
    root: {
      width: 350,
      margin: theme.spacing(1)
    }
  }
}));

const yscecInfo: YscecBoardRowProps[] = [
  {
    title: "기말고사 일정",
    preview:
      "안녕하세요 대중 음악의 이해 조교 이혜원입니다. 기말고사 일정은 다음과 같습니다. 일시 12월 18일 (수) 3교시 (11:00~11:50) 장소 강의실 (교 101)",
    date: "12월 15일",
    file: true
  },
  {
    title: "기말고사 일정",
    preview:
      "안녕하세요 대중 음악의 이해 조교 이혜원입니다. 기말고사 일정은 다음과 같습니다. 일시 12월 18일 (수) 3교시 (11:00~11:50) 장소 강의실 (교 10150) 장소 강의실 (교 10150) 장소 강의실 (교 10150) 장소 강의실 (교 10150) 장소 강의실 (교 10150) 장소 강의실 (교 101)",
    date: "12월 15일",
    file: false
  },
  {
    title: "기말고사 일정",
    preview:
      "안녕하세요 대중 음악의 이해 조교 이혜원입니다. 기말고사 일정은 다음과 같습니다. 일시 12월 18일 (수) 3교시 (11:00~11:50) 장소 강의실 (교 101)",
    date: "12월 15일",
    file: false
  }
];

const reviewInfo: ReviewBoardRowProps[] = [
  {
    id: 11112,
    date: "2018-1 기말고사 후기",
    grade: "A",
    view: 147,
    preview:
      "기본적으로 빈칸 뚫린 피피티에 필기하는 방식으로 수업진행. 박애경 교수님 시간은 듣지 않아도 ppt에 다 나와 있지만 권현석 교수님 시간은 수업시간이 매우 중요하다. 양이 많지 않으니 개념 위주로 모두 외우면 되며 수업 중간 중간에 본인의 음악 장기를 보여준다면 가산점을 얻을 수 있다."
  },
  {
    id: 11112,
    date: "2018-1 기말고사 후기",
    grade: "A",
    view: 147,
    preview:
      "기본적으로 빈칸 뚫린 피피티에 필기하는 방식으로 수업진행. 박애경 교수님 시간은 듣지 않아도 ppt에 다 나와 있지만 권현석 교수님 시간은 수업시간이 매우 중요하다. 양이 많지 않으니 개념 위주로 모두 외우면 되며 수업 중간 중간에 본인의 음악 장기를 보여준다면 가산점을 얻을 수 있다."
  },
  {
    id: 11112,
    date: "2018-1 기말고사 후기",
    grade: "A",
    view: 147,
    preview:
      "기본적으로 빈칸 뚫린 피피티에 필기하는 방식으로 수업진행. 박애경 교수님 시간은 듣지 않아도 ppt에 다 나와 있지만 권현석 교수님 시간은 수업시간이 매우 중요하다. 양이 많지 않으니 개념 위주로 모두 외우면 되며 수업 중간 중간에 본인의 음악 장기를 보여준다면 가산점을 얻을 수 있다."
  },
  {
    id: 11112,
    date: "2018-1 기말고사 후기",
    grade: "A",
    view: 147,
    preview:
      "기본적으로 빈칸 뚫린 피피티에 필기하는 방식으로 수업진행. 박애경 교수님 시간은 듣지 않아도 ppt에 다 나와 있지만 권현석 교수님 시간은 수업시간이 매우 중요하다. 양이 많지 않으니 개념 위주로 모두 외우면 되며 수업 중간 중간에 본인의 음악 장기를 보여준다면 가산점을 얻을 수 있다."
  }
];

const subjectInfo = {
  subjectName: "대중음악의이해",
  professorName: "박애경,권현석",
  yscec: yscecInfo,
  review: reviewInfo
};

export default function YscecBoard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  let { url } = useRouteMatch();

  //todo id값으로 과목 YSCEC, 시험후기 정보 불러오기 (graphql)

  const pathname = url.split("/")[3];

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <Link href="/home" style={{ textDecoration: "none" }}>
        <Button className={classes.backButton}>{"< 홈으로"}</Button>
      </Link>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab label="YSCEC" />
        <StyledTab label="시험후기" />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <Divider></Divider>
        <Grid container className={classes.titleGrid}>
          <DescriptionIcon className={classes.titleIcon}></DescriptionIcon>
          <div className={classes.titleMainText}>
            {subjectInfo.subjectName} - YSCEC 공지사항
          </div>
        </Grid>
        <div className={classes.subTitleText}>
          YSCEC의 공지를 신속하고 일목요연하게 보세요.
        </div>
        <Divider></Divider>
        <List className={classes.list}>
          {subjectInfo.yscec.map((yscec: YscecBoardRowProps) => {
            return (
              <>
                <YscecBoardRow
                  title={yscec.title}
                  preview={yscec.preview}
                  date={yscec.date}
                  file={yscec.file}
                ></YscecBoardRow>
                <Divider></Divider>
              </>
            );
          })}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Divider></Divider>
        <Grid container className={classes.titleGrid}>
          <DescriptionIcon className={classes.titleIcon}></DescriptionIcon>
          <div className={classes.titleMainText}>
            {subjectInfo.subjectName} - 시험후기
          </div>
        </Grid>
        <div className={classes.subTitleText}>
          같은 교수님의 후기, 같은 과목명의 후기도 열람해보세요.
        </div>
        <Divider></Divider>
        <ReviewBoard
          subjectName={subjectInfo.subjectName}
          professorName={subjectInfo.professorName}
          reviewInfo={subjectInfo.review}
        ></ReviewBoard>
      </TabPanel>
    </Paper>
  );
}
