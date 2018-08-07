import * as React from "react";
import { Component, ReactNode } from "react";

import Main from "../Main";

import createTheme from "@material-ui/core/styles/createMuiTheme";

import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import { Theme } from "@material-ui/core/styles";

// import indigo from "@material-ui/core/colors/indigo";
// import lightBlue from "@material-ui/core/colors/lightBlue";
import red from "@material-ui/core/colors/red";

export interface IFrameProps {
  theme: "dark" | "light";
}

// tslint:disable-next-line:no-empty-interface
export interface IFrameStates {}

export default class Frame extends Component<IFrameProps, IFrameStates> {
  constructor(props: IFrameProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { theme } = this.props;
    return (
      <ThemeProvider theme={this.getTheme(theme)}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    );
  }

  private getTheme(theme: "dark" | "light"): Theme {
    return createTheme({
      palette: {
        contrastThreshold: 3,
        error: {
          main: red[500]
        },
        // primary: indigo,
        // secondary: lightBlue,
        tonalOffset: 0.2,
        type: theme
      }
    });
  }
}
