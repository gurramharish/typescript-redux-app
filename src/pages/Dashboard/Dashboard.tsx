import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import CircularProgress from "@material-ui/core/CircularProgress";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Clock from "../../components/Clock";
import Statistic from "../../components/Statistic";

export interface IDashboardStyles {
  root: React.CSSProperties;
  heading: React.CSSProperties;
  secondaryHeading: React.CSSProperties;
  statistics: React.CSSProperties;
}

export interface IDashboardStyleProps
  extends WithStyles<keyof IDashboardStyles> {}

export interface IDashboardData {
  loading: boolean;
}

export interface IDashboardActions {
  startLoadingDashboard(): void;
  stopLoadingDashboard(): void;
}

export interface IDashboardProps extends IDashboardData, IDashboardActions {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IDashboardStates {
  expanded: string;
}

export class Dashboard extends Component<
  IDashboardProps & IDashboardStyleProps,
  IDashboardStates
> {
  constructor(props: IDashboardProps & IDashboardStyleProps, context: {}) {
    super(props, context);
    this.state = { expanded: "" };
  }

  public render(): ReactNode {
    const { expanded } = this.state;
    const { className, classes, style } = this.props;
    const root: string = classNames(classes!.root, className);
    const { loading } = this.props;
    return (
      <div className={root} style={{ ...style }}>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12}>
            <Clock />
            {loading && <CircularProgress size={50} thickness={5} />}
          </Grid>
          <Grid item={true} sm={12}>
            <Card className={classes.statistics} square={true}>
              <Statistic count={4} label="BLOCKS" />
              <Statistic count={5} label="TRANSACTIONS" />
              <Statistic count={0} label="NODES" />
              <Statistic count={1} label="CHAINCODES" />
            </Card>
          </Grid>
          <Grid item={true} xs={12}>
            <ExpansionPanel
              expanded={expanded === "fontawesome"}
              onChange={this.handleChange("fontawesome")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>FontAwesome</Typography>
                <Typography className={classes.secondaryHeading}>
                  I am an expansion panel
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="display1" noWrap={true}>
                  {expanded === "fontawesome" && "Font Awesome"}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>

          <Grid item={true} xs={12}>
            <ExpansionPanel
              expanded={expanded === "charts"}
              onChange={this.handleChange("charts")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Charts</Typography>
                <Typography className={classes.secondaryHeading}>
                  I am an expansion panel
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="display1" noWrap={true}>
                  {expanded === "charts" && "Charts"}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>

          <Grid item={true} xs={12}>
            <ExpansionPanel
              expanded={expanded === "datetime"}
              onChange={this.handleChange("datetime")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Date/Time</Typography>
                <Typography className={classes.secondaryHeading}>
                  I am an expansion panel
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="display1" noWrap={true}>
                  {expanded === "datetime" && "Datetime"}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
      </div>
    );
  }

  public componentDidMount(): void {
    this.props.startLoadingDashboard();
  }

  public componentWillUnmount(): void {
    this.props.stopLoadingDashboard();
  }

  private handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    expanded: boolean
  ) => {
    this.setState({
      expanded: expanded ? panel : ""
    });
  };
}

export default withStyles<keyof IDashboardStyles>(theme => ({
  heading: {
    flexBasis: "33.33%",
    flexShrink: 0,
    fontSize: theme.typography.pxToRem(18)
  },
  root: {
    flexGrow: 1,
    width: "100%"
  },
  secondaryHeading: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(15)
  },
  statistics: {
    height: 175,
    marginBottom: 20
  }
}))(Dashboard);
