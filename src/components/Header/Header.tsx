import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import NotificationsIcon from "@material-ui/icons/Notifications";

import LightbulbFullIcon from "../../icons/LightbulbFull";
import LightbulbOutlineIcon from "../../icons/LightbulbOutline";

import MenuIcon from "@material-ui/icons/Menu";

import { IStoreAction, IStoreState } from "../../store";
import { addNotificationsAction, changeThemeAction } from "../../store";

export interface IHeaderData {
  mode: "dark" | "light";
  notifications: number;
}

export interface IHeaderActions {
  changeTheme(theme: "dark" | "light"): void;
  addNotifications(notifications: number): void;
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
    const { mode, notifications } = this.props;
    const { className, classes, style } = this.props;
    const root: string = classNames(classes!.root, className);
    return (
      <header className={root} style={{ ...style }}>
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
                {mode === "light" ? (
                  <LightbulbOutlineIcon />
                ) : (
                  <LightbulbFullIcon />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications" enterDelay={300}>
              <IconButton aria-label={`${notifications} pending notifications`}>
                <Badge badgeContent={notifications} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </header>
    );
  }

  private toggleTheme = () => {
    const { mode, changeTheme, addNotifications } = this.props;
    changeTheme(mode === "light" ? "dark" : "light");
    addNotifications(1);
  };
}

const stator = (state: IStoreState): IHeaderData => ({
  mode: state.theme,
  notifications: state.notifications
});

const actioner = (dispatch: Dispatch<IStoreAction>): IHeaderActions => ({
  addNotifications: notifications => {
    dispatch(addNotificationsAction(notifications));
  },

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
