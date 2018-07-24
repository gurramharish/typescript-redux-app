import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import Typography from "@material-ui/core/Typography";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

export interface IFooterStyles {
  root: React.CSSProperties;
}

export interface IFooterStyleProps extends WithStyles<keyof IFooterStyles> {}

export interface IFooterProps {
  style?: React.CSSProperties;
  className?: string;
  text: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IFooterStates {}

export class Footer extends Component<
  IFooterProps & IFooterStyleProps,
  IFooterStates
> {
  constructor(props: IFooterProps & IFooterStyleProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { className, classes, style, text } = this.props;
    const root: string = classNames(classes!.root, className);
    return (
      <footer className={root} style={{ ...style }}>
        <Typography gutterBottom={false} noWrap={true}>
          {text}
        </Typography>
      </footer>
    );
  }
}

export default withStyles<keyof IFooterStyles>(theme => ({
  root: {
    backgroundColor: theme.palette.type === "light" ? "#e8e8e8" : "#3f51b5",
    bottom: 0,
    left: 0,
    position: "fixed",
    right: 0,
    textAlign: "center"
  }
}))(Footer);
