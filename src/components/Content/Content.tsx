import * as React from "react";
import { Component, ReactNode } from "react";
import { Route } from "react-router";

import classNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Switch from "../../containers/Switch";

import Blocks from "../../pages/Blocks";
import Dashboard from "../../pages/Dashboard";

import Channels from "../../containers/Channels";
import Transactions from "../../containers/Transactions";

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
    return (
      <div className={root} style={{ ...style }}>
        <Switch>
          <Route exact={true} path="/">
            <Dashboard />
          </Route>
          <Route path="/blocks">
            <Blocks />
          </Route>
          <Route path="/channels">
            <Channels />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withStyles<keyof IContentStyles>(theme => ({
  root: {}
}))(Content);
