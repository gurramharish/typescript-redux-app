import * as React from "react";
import { Component, ReactNode } from "react";

import classNames from "classnames";

import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import NotificationsIcon from "@material-ui/icons/Notifications";

import MoonIcon from "../../icons/Moon";
import SunIcon from "../../icons/Sun";

import MenuIcon from "@material-ui/icons/Menu";

export interface IHeaderData {
  mode: "dark" | "light";
  notifications: number;
}

export interface IHeaderActions {
  startAddNotifications(count?: number): void;
  stopAddNotifications(): void;
  startResetNotifications(): void;
  stopResetNotifications(): void;
  changeTheme(theme: "dark" | "light"): void;
  clearNotifications(): void;
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
            <Tooltip title="light mode" enterDelay={300}>
              <SunIcon />
            </Tooltip>
            <Tooltip title="Toggle light/dark theme" enterDelay={300}>
              <Switch
                color="default"
                onChange={this.toggleTheme}
                checked={mode === "dark"}
              />
            </Tooltip>
            <Tooltip title="dark mode" enterDelay={300}>
              <MoonIcon />
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

  public componentDidMount(): void {
    const { startAddNotifications, startResetNotifications } = this.props;
    startAddNotifications(2);
    startResetNotifications();
  }

  public componentWillUnmount(): void {
    const { stopAddNotifications, stopResetNotifications } = this.props;
    stopAddNotifications();
    stopResetNotifications();
  }

  private toggleTheme = () => {
    const { mode, changeTheme } = this.props;
    changeTheme(mode === "light" ? "dark" : "light");
  };
}

export default withStyles<keyof IHeaderStyles>({
  root: {},
  title: {
    flex: "0 1 auto",
    marginLeft: 24,
    marginRight: 30
  }
})(Header);
