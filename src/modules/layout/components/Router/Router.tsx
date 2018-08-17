import * as React from "react";
import { Component, ReactNode } from "react";
import { Route } from "react-router";

import classNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Switch from "../../../common/containers/Switch";

import Block from "../../../block";
import Channel from "../../../channel";
import Dashboard from "../../../dashboard";
import Transaction from "../../../transaction";

export interface IRouterStyles {
  root: React.CSSProperties;
}

export interface IRouterStyleProps extends WithStyles<keyof IRouterStyles> {}

export interface IRouterProps {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IRouterStates {}

export class Router extends Component<
  IRouterProps & IRouterStyleProps,
  IRouterStates
> {
  constructor(props: IRouterProps & IRouterStyleProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { className, classes, style } = this.props;
    const root: string = classNames(classes!.root, className);
    return (
      <div className={root} style={{ ...style }}>
        <Switch>
          <Route exact={true} path="/" component={Dashboard} />
          <Route path="/block" component={Block} />
          <Route path="/channel" component={Channel} />
          <Route path="/transaction" component={Transaction} />
        </Switch>
      </div>
    );
  }
}

export default withStyles<keyof IRouterStyles>(theme => ({
  root: {}
}))(Router);
