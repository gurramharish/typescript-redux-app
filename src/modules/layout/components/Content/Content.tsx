import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Router from "../Router";

export interface IContentStyles {
  root: React.CSSProperties;
}

export interface IContentStyleProps extends WithStyles<keyof IContentStyles> {}

export interface IContentProps {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IContentStates {}

export class Content extends Component<
  IContentProps & IContentStyleProps,
  IContentStates
> {
  constructor(props: IContentProps & IContentStyleProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { className, classes, style } = this.props;
    const root: string = classNames(classes!.root, className);
    return <Router className={root} style={{ ...style }} />;
  }
}

export default withStyles<keyof IContentStyles>(theme => ({
  root: {}
}))(Content);
