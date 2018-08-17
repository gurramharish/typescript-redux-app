import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Typography from "@material-ui/core/Typography";

export interface IBlockStyles {
  root: React.CSSProperties;
}

export interface IBlockStyleProps extends WithStyles<keyof IBlockStyles> {}

export interface IBlockProps {
  style?: React.CSSProperties;
  className?: string;
  id: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IBlockStates {}

export class Block extends Component<
  IBlockProps & IBlockStyleProps,
  IBlockStates
> {
  constructor(props: IBlockProps & IBlockStyleProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { className, classes, style } = this.props;
    const { id } = this.props;
    const root: string = classNames(classes!.root, className);
    return (
      <div className={root} style={{ ...style }}>
        <Typography variant="headline">{`Block Id: ${id}`}</Typography>
      </div>
    );
  }
}

export default withStyles<keyof IBlockStyles>(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  }
}))(Block);
