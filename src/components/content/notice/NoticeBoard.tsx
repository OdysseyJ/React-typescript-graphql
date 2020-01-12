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
import NoticeBoardRow, { NoticeBoardRowProps } from "./NoticeBoardRow";
import { NoticeBoardInfo, DeveloperBoardInfo } from "../../common/DataCenter";
import ContentPaper from "../../common/ContentPaper";

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
  padding: {
    padding: theme.spacing(3)
  },
  demo1: {
    backgroundColor: theme.palette.background.paper
  },
  demo2: {
    backgroundColor: "#2e1534"
  },
  list: {
    padding: 0
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
  "@media (max-width: 1100px)": {
    root: {
      width: 350,
      margin: theme.spacing(1)
    }
  }
}));

export default function NoticeBoard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ContentPaper>
      <Link href="/home" style={{ textDecoration: "none" }}>
        <Button className={classes.backButton}>{"< 홈으로"}</Button>
      </Link>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab label="공지사항" />
        <StyledTab label="개발자노트" />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <Divider></Divider>
        <List component="nav" className={classes.list}>
          <ListItem className={classes.titleListItem}>
            <Grid container className={classes.grid}>
              <Grid item xs={1}>
                <div className={classes.titleLeft}>#</div>
              </Grid>
              <Grid item xs={7}>
                <div className={classes.titleLeft}>제목</div>
              </Grid>
              <Grid item xs={2}>
                <div className={classes.titleRight}>작성일</div>
              </Grid>
              <Grid item xs={2}>
                <div className={classes.titleRight}>조회수</div>
              </Grid>
            </Grid>
          </ListItem>
          <Divider></Divider>
          {NoticeBoardInfo.map((info: NoticeBoardRowProps) => {
            return (
              <div>
                <NoticeBoardRow
                  index={info.index}
                  title={info.title}
                  date={info.date}
                  time={info.time}
                ></NoticeBoardRow>
                <Divider></Divider>
              </div>
            );
          })}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Divider></Divider>
        <List component="nav" className={classes.list}>
          <ListItem className={classes.titleListItem}>
            <Grid container className={classes.grid}>
              <Grid item xs={1}>
                <div className={classes.titleLeft}>#</div>
              </Grid>
              <Grid item xs={7}>
                <div className={classes.titleLeft}>제목</div>
              </Grid>
              <Grid item xs={2}>
                <div className={classes.titleRight}>작성일</div>
              </Grid>
              <Grid item xs={2}>
                <div className={classes.titleRight}>조회수</div>
              </Grid>
            </Grid>
          </ListItem>
          <Divider></Divider>
          {DeveloperBoardInfo.map((info: NoticeBoardRowProps) => {
            return (
              <div>
                <NoticeBoardRow
                  index={info.index}
                  title={info.title}
                  date={info.date}
                  time={info.time}
                ></NoticeBoardRow>
                <Divider></Divider>
              </div>
            );
          })}
        </List>
      </TabPanel>
    </ContentPaper>
  );
}
