import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Statistic from "../../components/Statistic";

export interface IBlocksStyles {
  root: React.CSSProperties;
  heading: React.CSSProperties;
  secondaryHeading: React.CSSProperties;
  statistics: React.CSSProperties;
}

export interface IBlocksStyleProps extends WithStyles<keyof IBlocksStyles> {}

export interface IBlocksProps {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IBlocksStates {
  expanded: string;
}

export class Blocks extends Component<
  IBlocksProps & IBlocksStyleProps,
  IBlocksStates
> {
  constructor(props: IBlocksProps & IBlocksStyleProps, context: {}) {
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
            <Typography variant="display3">Blocks</Typography>
          </Grid>
          <Grid item={true} sm={12}>
            <Card className={classes.statistics} square={true}>
              <Statistic count={4} label="BLOCKS" />
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles<keyof IBlocksStyles>(theme => ({
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
}))(Blocks);
