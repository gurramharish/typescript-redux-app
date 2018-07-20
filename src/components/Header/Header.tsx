import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import LightbulbFullIcon from "../../icons/LightbulbFull";
import LightbulbOutlineIcon from "../../icons/LightbulbOutline";

import MenuIcon from "@material-ui/icons/Menu";

import { changeThemeAction, IStoreAction, IStoreState } from "../../store";

export interface IHeaderData {
  theme: "dark" | "light";
}

export interface IHeaderActions {
  changeTheme(theme: "dark" | "light"): void;
}

export interface IHeaderStyles {
  root: React.CSSProperties;
  title: React.CSSProperties;
}

export interface IHeaderStyleProps extends WithStyles<keyof IHeaderStyles> {}

export interface IHeaderProps extends IHeaderData, IHeaderActions {
  style?: React.CSSProperties;
  className?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IHeaderStates {}

export class Header extends Component<
  IHeaderProps & IHeaderStyleProps,
  IHeaderStates
> {
  constructor(props: IHeaderProps & IHeaderStyleProps, context: {}) {
    super(props, context);
  }

  public render(): ReactNode {
    const { theme } = this.props;
    const { className, classes, style } = this.props;
    const root: string = classNames(classes!.root, className);
    return (
      <div className={root} style={{ ...style }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.title}
              variant="title"
              color="inherit"
              noWrap={true}
            >
              TypeScript Redux App
            </Typography>
            <Tooltip title="Toggle light/dark theme" enterDelay={300}>
              <IconButton
                color="inherit"
                onClick={this.toggleTheme}
                aria-label="Toggle light/dark theme"
              >
                {theme === "light" ? (
                  <LightbulbOutlineIcon />
                ) : (
                  <LightbulbFullIcon />
                )}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  private toggleTheme = () => {
    const { theme, changeTheme } = this.props;
    changeTheme(theme === "light" ? "dark" : "light");
  };
}

const stator = (state: IStoreState): IHeaderData => ({ theme: state.theme });

const actioner = (dispatch: Dispatch<IStoreAction>): IHeaderActions => ({
  changeTheme: theme => {
    dispatch(changeThemeAction(theme));
  }
});

export default connect(
  stator,
  actioner
)(
  withStyles<keyof IHeaderStyles>({
    root: {},
    title: {
      flex: "0 1 auto",
      marginLeft: 24
    }
  })(Header)
);
