import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Content from "../Content";
import Header from "../Header";

export interface IAppStyles {
  root: React.CSSProperties;
  content: React.CSSProperties;
}

export interface IAppStyleProps extends WithStyles<keyof IAppStyles> {}

export interface IAppProps {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IAppStates {}

export class App extends Component<IAppProps & IAppStyleProps, IAppStates> {
  constructor(props: IAppProps & IAppStyleProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { className, classes, style } = this.props;
    const root: string = classNames(classes!.root, className);
    return (
      <div className={root} style={{ ...style }}>
        <Header />
        <Content className={classes.content} />
      </div>
    );
  }
}

export default withStyles<keyof IAppStyles>({
  content: {
    alignSets: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    paddingLeft: 5,
    paddingRight: 5
  },
  root: {
    display: "flex",
    flex: "1 1",
    flexDirection: "column",
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0
  }
})(App);
