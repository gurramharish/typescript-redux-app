import * as React from "react";
import { Component, ReactNode } from "react";
import { Route, RouteComponentProps } from "react-router";

import classNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Switch from "../../../common/containers/Switch";

import Block from "../../containers/Block";
import Blocks from "../../containers/Blocks";

export interface IRouterStyles {
  root: React.CSSProperties;
}

export interface IRouterStyleProps extends WithStyles<keyof IRouterStyles> {}

// tslint:disable-next-line:no-empty-interface
export interface IRouteParams {}

export interface IRouterProps extends RouteComponentProps<IRouteParams> {
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
    const { className, classes, match, style } = this.props;
    const root: string = classNames(classes!.root, className);
    return (
      <div className={root} style={{ ...style }}>
        <Switch>
          <Route exact={true} path={match.url} component={Blocks} />
          <Route path={`${match.url}/:hash`} component={Block} />
        </Switch>
      </div>
    );
  }
}

export default withStyles<keyof IRouterStyles>(theme => ({
  root: {}
}))(Router);
