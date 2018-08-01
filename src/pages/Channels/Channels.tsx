import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

export interface IChannelsStyles {
  root: React.CSSProperties;
  heading: React.CSSProperties;
  secondaryHeading: React.CSSProperties;
  statistics: React.CSSProperties;
}

export interface IChannelsStyleProps
  extends WithStyles<keyof IChannelsStyles> {}

export interface IChannelsProps {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IChannelsStates {
  expanded: string;
}

export class Channels extends Component<
  IChannelsProps & IChannelsStyleProps,
  IChannelsStates
> {
  constructor(props: IChannelsProps & IChannelsStyleProps, context: {}) {
    super(props, context);
    this.state = { expanded: "" };
  }

  public render(): ReactNode {
    const { className, classes, style } = this.props;
    const root: string = classNames(classes!.root, className);
    return (
      <div className={root} style={{ ...style }}>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12}>
            <Typography variant="display3">Channels</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles<keyof IChannelsStyles>(theme => ({
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
}))(Channels);
