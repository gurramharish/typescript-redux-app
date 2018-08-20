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

import { IBlock } from "../../../../stores/block";

import { ILoaderActions, ILoaderData } from "../../../entity/components/Loader";
import { ILoaderProps, ILoaderStates } from "../../../entity/components/Loader";
import Loader from "../../../entity/components/Loader";

import Link from "../../../common/containers/Link";

export interface IBlocksStyles {
  body: React.CSSProperties;
  head: React.CSSProperties;
  paper: React.CSSProperties;
  root: React.CSSProperties;
  row: React.CSSProperties;
  table: React.CSSProperties;
  title: React.CSSProperties;
}

export interface IBlocksStyleProps extends WithStyles<keyof IBlocksStyles> {}

export interface IBlocksData extends ILoaderData {
  entities: IBlock[];
  loading: boolean;
}

// tslint:disable-next-line:no-empty-interface
export interface IBlocksActions extends ILoaderActions {
  fancy(): void;
}

export interface IBlocksProps
  extends ILoaderProps,
    IBlocksData,
    IBlocksActions {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IBlocksStates extends ILoaderStates {}

export class Blocks extends Loader<
  IBlocksProps & IBlocksStyleProps,
  IBlocksStates
> {
  constructor(props: IBlocksProps & IBlocksStyleProps, context: {}) {
    super(props, context);
  }

  public componentDidMount(): void {
    super.componentDidMount();
    setInterval(() => this.props.fancy(), 2000);
  }

  public render(): ReactNode {
    const { className, classes, style } = this.props;
    const { entities } = this.props;
    const root: string = classNames(classes!.root, className);
    const { body, head } = classes;
    return (
      <div className={root} style={{ ...style }}>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12}>
            <Typography variant="headline" className={classes.title}>
              Blocks
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
                    <TableCell classes={{ head }}>Channel</TableCell>
                    <TableCell classes={{ head }} numeric={true}>
                      Tx Count
                    </TableCell>
                    <TableCell classes={{ head }}>Data Hash</TableCell>
                    <TableCell classes={{ head }}>Block Hash</TableCell>
                    <TableCell classes={{ head }}>Previous Hash</TableCell>
                    <TableCell classes={{ head }}>Transactions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {entities.map(entity => (
                    <TableRow className={classes.row} key={entity.id}>
                      <TableCell classes={{ body }} component="th" scope="row">
                        {entity.id}
                      </TableCell>
                      <TableCell classes={{ body }}>{entity.channel}</TableCell>
                      <TableCell classes={{ body }} numeric={true}>
                        {entity.transactions.length}
                      </TableCell>
                      <TableCell classes={{ body }}>
                        {entity.dataHash}
                      </TableCell>
                      <TableCell classes={{ body }}>
                        <Link
                          exact={true}
                          strict={true}
                          to={`/block/${entity.hash}`}
                        >
                          {entity.hash}
                        </Link>
                      </TableCell>
                      <TableCell classes={{ body }}>
                        {entity.previousHash}
                      </TableCell>
                      <TableCell classes={{ body }}>
                        {entity.transactions}
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

export default withStyles<keyof IBlocksStyles>(theme => ({
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
}))(Blocks);
