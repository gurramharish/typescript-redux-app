import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { ITransaction } from "../../stores/transaction";

export interface ITransactionsStyles {
  root: React.CSSProperties;
}

export interface ITransactionsStyleProps
  extends WithStyles<keyof ITransactionsStyles> {}

export interface ITransactionsData {
  transactions: ITransaction[];
  loading: boolean;
}

export interface ITransactionsActions {
  startLoadingTransactions(): void;
  stopLoadingTransactions(): void;
}

export interface ITransactionsProps extends ITransactionsData, ITransactionsActions {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface ITransactionsStates {}

export class Transactions extends Component<
  ITransactionsProps & ITransactionsStyleProps,
  ITransactionsStates
> {
  constructor(props: ITransactionsProps & ITransactionsStyleProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { className, classes, style } = this.props;
    const { transactions, loading } = this.props;
    const root: string = classNames(classes!.root, className);
    return (
      <div className={root} style={{ ...style }}>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12}>
            <Typography variant="display3">{`Transactions ${transactions.length} ${loading}`}</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }

  public componentDidMount(): void {
    this.props.startLoadingTransactions();
  }

  public componentWillUnmount(): void {
    this.props.stopLoadingTransactions();
  }
}

export default withStyles<keyof ITransactionsStyles>(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  }
}))(Transactions);
