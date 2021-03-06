import * as React from "react";
import { ReactNode } from "react";

import classNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { IChannel } from "../../../../stores/channel";

import { ILoaderActions, ILoaderData } from "../../../common/components/Loader";
import { ILoaderProps, ILoaderStates } from "../../../common/components/Loader";
import Loader from "../../../common/components/Loader";

export interface IChannelsStyles {
  body: React.CSSProperties;
  head: React.CSSProperties;
  paper: React.CSSProperties;
  root: React.CSSProperties;
  row: React.CSSProperties;
  table: React.CSSProperties;
  title: React.CSSProperties;
}

export interface IChannelsStyleProps
  extends WithStyles<keyof IChannelsStyles> {}

export interface IChannelsData extends ILoaderData {
  channels: IChannel[];
  loading: boolean;
}

// tslint:disable-next-line:no-empty-interface
export interface IChannelsActions extends ILoaderActions {}

export interface IChannelsProps
  extends ILoaderProps,
    IChannelsData,
    IChannelsActions {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IChannelsStates extends ILoaderStates {}

export class Channels extends Loader<
  IChannelsProps & IChannelsStyleProps,
  IChannelsStates
> {
  constructor(props: IChannelsProps & IChannelsStyleProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { className, classes, style } = this.props;
    const { channels } = this.props;
    const root: string = classNames(classes!.root, className);
    const { body, head } = classes;
    return (
      <div className={root} style={{ ...style }}>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12}>
            <Typography variant="headline" className={classes.title}>
              Channels
            </Typography>
          </Grid>
          <Grid item={true} xs={12}>
            <Paper className={classes.paper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell classes={{ head }} numeric={true}>
                      Id
                    </TableCell>
                    <TableCell classes={{ head }}>Name</TableCell>
                    <TableCell classes={{ head }}>Hash</TableCell>
                    <TableCell classes={{ head }} numeric={true}>
                      Blocks
                    </TableCell>
                    <TableCell classes={{ head }} numeric={true}>
                      Transactions
                    </TableCell>
                    <TableCell classes={{ head }}>Timestamp</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {channels.map(channel => (
                    <TableRow className={classes.row} key={channel.id}>
                      <TableCell classes={{ body }} component="th" scope="row">
                        {channel.id}
                      </TableCell>
                      <TableCell classes={{ body }}>{channel.name}</TableCell>
                      <TableCell classes={{ body }}>{channel.hash}</TableCell>
                      <TableCell classes={{ body }} numeric={true}>
                        {channel.blocks}
                      </TableCell>
                      <TableCell classes={{ body }} numeric={true}>
                        {channel.transactions}
                      </TableCell>
                      <TableCell classes={{ body }}>
                        {channel.created}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles<keyof IChannelsStyles>(theme => ({
  body: {
    fontSize: 15
  },
  head: {
    fontSize: 18,
    fontWeight: "bolder"
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white
  },
  paper: {
    marginTop: theme.spacing.unit * 1,
    overflowX: "auto",
    width: "100%"
  },
  root: {
    flexGrow: 1,
    width: "100%"
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  table: {
    minWidth: 700
  },
  title: {
    paddingTop: 15
  }
}))(Channels);
