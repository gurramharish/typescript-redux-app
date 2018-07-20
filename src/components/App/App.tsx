import * as React from "react";
import { Component, ReactNode } from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { changeThemeAction, IStoreAction, IStoreState } from "../../store";

export interface IAppData {
  theme: "dark" | "light";
}

export interface IAppActions {
  changeTheme(theme: "dark" | "light"): void;
}

// tslint:disable-next-line:no-empty-interface
export interface IAppProps extends IAppData, IAppActions {}

// tslint:disable-next-line:no-empty-interface
export interface IAppStates {}

export class App extends Component<IAppProps, IAppStates> {
  constructor(props: IAppProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { theme } = this.props;
    return (
      <div>
        <header>
          <Typography variant="display4" color="primary">
            Welcome to TypeScript React App
          </Typography>
        </header>
        <Typography variant="display2" color="secondary">
          Current Theme is : {theme}
        </Typography>
        <TextField label="Name" margin="normal" fullWidth={true} />
        <Button variant="raised" color="primary" onClick={this.toggleTheme}>
          Change Theme
        </Button>
      </div>
    );
  }

  private toggleTheme = () => {
    const { theme, changeTheme } = this.props;
    changeTheme(theme === "light" ? "dark" : "light");
  };
}

const stator = (state: IStoreState): IAppData => ({ theme: state.theme });

const actioner = (dispatch: Dispatch<IStoreAction>): IAppActions => ({
  changeTheme: theme => {
    dispatch(changeThemeAction(theme));
  }
});

export default connect(
  stator,
  actioner
)(App);
