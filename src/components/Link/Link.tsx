import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import { NavLink, NavLinkProps } from "react-router-dom";

export interface ILinkStyles {
  root: React.CSSProperties;
}

export interface ILinkStyleProps extends WithStyles<keyof ILinkStyles> {}

// tslint:disable-next-line:no-empty-interface
export interface ILinkData {}

export interface ILinkActions {
  navigate(path: string): void;
}

export interface ILinkProps extends NavLinkProps, ILinkData, ILinkActions {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface ILinkStates {}

export class Link extends Component<ILinkProps & ILinkStyleProps, ILinkStates> {
  constructor(props: ILinkProps & ILinkStyleProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const {
      className,
      classes,
      style,
      navigate,
      children,
      ...props
    } = this.props;
    const root: string = classNames(classes!.root, className);
    return (
      <NavLink
        className={root}
        style={{ ...style }}
        {...props}
        onClick={this.onNavigate}
      >
        {children}
      </NavLink>
    );
  }

  private onNavigate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const { to, navigate } = this.props;
    navigate(to.toString());
  };
}

export default withStyles<keyof ILinkStyles>(theme => ({
  root: {}
}))(Link);
