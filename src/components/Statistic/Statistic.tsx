import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import CloudIcon from "@material-ui/icons/Cloud";

export interface IStatisticStyles {
  avatar: React.CSSProperties;
  count: React.CSSProperties;
  root: React.CSSProperties;
}

export interface IStatisticStyleProps
  extends WithStyles<keyof IStatisticStyles> {}

export interface IStatisticProps {
  style?: React.CSSProperties;
  className?: string;
  count: number;
  label: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IStatisticStates {}

export class Statistic extends Component<
  IStatisticProps & IStatisticStyleProps,
  IStatisticStates
> {
  constructor(props: IStatisticProps & IStatisticStyleProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { className, classes, style } = this.props;
    const { count, label } = this.props;
    const root: string = classNames(classes!.root, className);
    return (
      <div className={root} style={{ ...style }}>
        <Grid container={true}>
          <Grid item={true} sm={6}>
            <Avatar className={classes.avatar}>
              <CloudIcon />
            </Avatar>
          </Grid>
          <Grid item={true} sm={6}>
            <Typography
              className={classes.count}
              variant="display3"
              noWrap={true}
            >
              {count}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="display1" noWrap={true}>
          {label}
        </Typography>
      </div>
    );
  }
}

export default withStyles<keyof IStatisticStyles>(theme => ({
  avatar: {
    justifyContent: "center",
    marginLeft: "50%",
    marginTop: "35%"
  },
  count: {
    marginTop: "30%"
  },
  root: {
    "&::after": {
      borderRight: "2px #DFF1FE solid",
      bottom: "55%",
      content: '" "',
      display: "block",
      height: "45%",
      position: "relative"
    },
    color: "#000000",
    display: "block",
    float: "left",
    fontSize: "18pt",
    height: "100%",
    textAlign: "center",
    width: "25%"
  }
}))(Statistic);
