import * as React from "react";
import { ReactNode } from "react";

import classNames from "classnames";

import { IBlock, IBlockOptions } from "../../../../stores/block";

import { ILoaderActions, ILoaderData } from "../../../entity/components/Loader";
import { ILoaderProps, ILoaderStates } from "../../../entity/components/Loader";
import Loader from "../../../entity/components/Loader";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export interface IBlockStyles {
  body: React.CSSProperties;
  head: React.CSSProperties;
  paper: React.CSSProperties;
  root: React.CSSProperties;
  row: React.CSSProperties;
  table: React.CSSProperties;
  title: React.CSSProperties;
}

export interface IBlockStyleProps extends WithStyles<keyof IBlockStyles> {}

export interface IBlockData extends ILoaderData {
  block?: IBlock;
}

// tslint:disable-next-line:no-empty-interface
export interface IBlockActions extends ILoaderActions<IBlockOptions> {}

export interface IBlockProps
  extends IBlockData,
    IBlockActions,
    ILoaderProps<IBlockOptions> {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IBlockStates extends ILoaderStates {}

export class Block extends Loader<
  IBlockProps & IBlockStyleProps,
  IBlockStates
> {
  constructor(props: IBlockProps & IBlockStyleProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { className, classes, style } = this.props;
    const { block, loaded } = this.props;
    const root: string = classNames(classes!.root, className);
    const { body, head } = classes;

    if (!loaded || !block) {
      return null;
    }

    return (
      <div className={root} style={{ ...style }}>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12}>
            <Typography variant="headline" className={classes.title}>
              Block Details
            </Typography>
          </Grid>
          <Grid item={true} xs={12}>
            <Paper className={classes.paper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell classes={{ head }} component="th" scope="row">
                      {`Property`}
                    </TableCell>
                    <TableCell classes={{ head }}>{`Value`}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={classes.row}>
                    <TableCell classes={{ body }} component="th" scope="row">
                      {`Channel Name`}
                    </TableCell>
                    <TableCell classes={{ body }}>{block.channel}</TableCell>
                  </TableRow>
                  <TableRow className={classes.row}>
                    <TableCell classes={{ body }} component="th" scope="row">
                      {`Block Number`}
                    </TableCell>
                    <TableCell classes={{ body }}>{block.id}</TableCell>
                  </TableRow>
                  <TableRow className={classes.row}>
                    <TableCell classes={{ body }} component="th" scope="row">
                      {`Created at`}
                    </TableCell>
                    <TableCell classes={{ body }}>{block.created}</TableCell>
                  </TableRow>
                  <TableRow className={classes.row}>
                    <TableCell classes={{ body }} component="th" scope="row">
                      {`Number of Transactions`}
                    </TableCell>
                    <TableCell classes={{ body }}>
                      {block.transactions.length}
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.row}>
                    <TableCell classes={{ body }} component="th" scope="row">
                      {`Block Hash`}
                    </TableCell>
                    <TableCell classes={{ body }}>{block.hash}</TableCell>
                  </TableRow>
                  <TableRow className={classes.row}>
                    <TableCell classes={{ body }} component="th" scope="row">
                      {`Data Hash`}
                    </TableCell>
                    <TableCell classes={{ body }}>{block.dataHash}</TableCell>
                  </TableRow>
                  <TableRow className={classes.row}>
                    <TableCell classes={{ body }} component="th" scope="row">
                      {`Previous Hash`}
                    </TableCell>
                    <TableCell classes={{ body }}>
                      {block.previousHash}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles<keyof IBlockStyles>(theme => ({
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
}))(Block);
