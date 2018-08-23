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

import { ITransaction } from "../../../../stores/transaction";

import { ILoaderActions, ILoaderData } from "../../../common/components/Loader";
import { ILoaderProps, ILoaderStates } from "../../../common/components/Loader";
import Loader from "../../../common/components/Loader";

export interface ITransactionsStyles {
  body: React.CSSProperties;
  head: React.CSSProperties;
  paper: React.CSSProperties;
  root: React.CSSProperties;
  row: React.CSSProperties;
  table: React.CSSProperties;
  title: React.CSSProperties;
}

export interface ITransactionsStyleProps
  extends WithStyles<keyof ITransactionsStyles> {}

export interface ITransactionsData extends ILoaderData {
  transactions: ITransaction[];
  loading: boolean;
}

// tslint:disable-next-line:no-empty-interface
export interface ITransactionsActions extends ILoaderActions {}

export interface ITransactionsProps
  extends ILoaderProps,
    ITransactionsData,
    ITransactionsActions {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface ITransactionsStates extends ILoaderStates {}

export class Transactions extends Loader<
  ITransactionsProps & ITransactionsStyleProps,
  ITransactionsStates
> {
  constructor(
    props: ITransactionsProps & ITransactionsStyleProps,
    context: {}
  ) {
    super(props, context);
  }

  public render(): ReactNode {
    const { className, classes, style } = this.props;
    const { transactions } = this.props;
    const root: string = classNames(classes!.root, className);
    const { body, head } = classes;
    return (
      <div className={root} style={{ ...style }}>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12}>
            <Typography variant="headline" className={classes.title}>
              Transactions
            </Typography>
          </Grid>
          <Grid item={true} xs={12}>
            <Paper className={classes.paper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell classes={{ head }}>Id</TableCell>
                    <TableCell classes={{ head }}>Creator</TableCell>
                    <TableCell classes={{ head }}>Channel</TableCell>
                    <TableCell classes={{ head }}>Type</TableCell>
                    <TableCell classes={{ head }}>Chaincode</TableCell>
                    <TableCell classes={{ head }}>Timestamp</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions.map(transaction => (
                    <TableRow className={classes.row} key={transaction.hash}>
                      <TableCell classes={{ body }} component="th" scope="row">
                        {transaction.hash}
                      </TableCell>
                      <TableCell classes={{ body }}>
                        {transaction.creator}
                      </TableCell>
                      <TableCell classes={{ body }}>
                        {transaction.channel}
                      </TableCell>
                      <TableCell classes={{ body }}>
                        {transaction.type}
                      </TableCell>
                      <TableCell classes={{ body }}>
                        {transaction.chaincode}
                      </TableCell>
                      <TableCell classes={{ body }}>
                        {transaction.created}
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

export default withStyles<keyof ITransactionsStyles>(theme => ({
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
}))(Transactions);
