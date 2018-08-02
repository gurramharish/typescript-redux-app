import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { IChannel } from "../../stores/channel";

export interface IChannelsStyles {
  root: React.CSSProperties;
}

export interface IChannelsStyleProps
  extends WithStyles<keyof IChannelsStyles> {}

export interface IChannelsData {
  channels: IChannel[];
  loading: boolean;
}

export interface IChannelsActions {
  startLoadingChannels(): void;
  stopLoadingChannels(): void;
}

export interface IChannelsProps extends IChannelsData, IChannelsActions {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IChannelsStates {}

export class Channels extends Component<
  IChannelsProps & IChannelsStyleProps,
  IChannelsStates
> {
  constructor(props: IChannelsProps & IChannelsStyleProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { className, classes, style } = this.props;
    const { channels, loading } = this.props;
    const root: string = classNames(classes!.root, className);
    return (
      <div className={root} style={{ ...style }}>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12}>
            <Typography variant="display3">{`Channels ${channels.length} ${loading}`}</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }

  public componentDidMount(): void {
    this.props.startLoadingChannels();
  }

  public componentWillUnmount(): void {
    this.props.stopLoadingChannels();
  }
}

export default withStyles<keyof IChannelsStyles>(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  }
}))(Channels);
