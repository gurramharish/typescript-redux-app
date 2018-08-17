import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Content from "../Content";

import Header from "../../containers/Header";

import Footer from "../Footer";

export interface IMainStyles {
  root: React.CSSProperties;
  content: React.CSSProperties;
}

export interface IMainStyleProps extends WithStyles<keyof IMainStyles> {}

export interface IMainProps {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IMainStates {}

export class Main extends Component<IMainProps & IMainStyleProps, IMainStates> {
  constructor(props: IMainProps & IMainStyleProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { className, classes, style } = this.props;
    const root: string = classNames(classes!.root, className);
    return (
      <main className={root} style={{ ...style }}>
        <Header />
        <Content className={classes.content} />
        <Footer text="typescript redux client" />
      </main>
    );
  }
}

export default withStyles<keyof IMainStyles>({
  content: {
    // alignSelf: "center",
    // display: "flex",
    height: "100%",
    // justifyContent: "center",
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
})(Main);
