import * as React from "react";
import { Component, ReactNode } from "react";
import { Route } from "react-router";

import classNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Switch from "../../containers/Switch";

import Block from "../../../block";
import Channel from "../../../channel";
import Dashboard from "../../../dashboard";
import Transaction from "../../../transaction";

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
          <Route path="/block">
            <Block />
          </Route>
          <Route path="/channel">
            <Channel />
          </Route>
          <Route path="/transaction">
            <Transaction />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withStyles<keyof IContentStyles>(theme => ({
  root: {}
}))(Content);
