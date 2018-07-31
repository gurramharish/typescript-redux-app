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

import MenuIcon from "@material-ui/icons/Menu";

import { NavLink } from "react-router-dom";

import MoonIcon from "../../icons/Moon";
import SunIcon from "../../icons/Sun";

export interface IHeaderData {
  mode: "dark" | "light";
  notifications: number;
  incrementing: boolean;
  reseting: boolean;
}

export interface IHeaderActions {
  changeTheme(theme: "dark" | "light"): void;
  startIncrementNotifications(increment?: number): void;
  stopIncrementNotifications(): void;
  toggleIncrementNotifications(): void;
  startResetNotifications(): void;
  stopResetNotifications(): void;
}

export interface IHeaderStyles {
  activeLink: React.CSSProperties;
  incrementing: React.CSSProperties;
  link: React.CSSProperties;
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
    const { mode, notifications, incrementing } = this.props;
    const { className, classes, style } = this.props;
    const root: string = classNames(classes!.root, className);
    const bubble: string = incrementing ? classes!.incrementing : "";
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
            <Typography
              className={classes.title}
              variant="title"
              color="inherit"
              noWrap={true}
            >
              <NavLink
                exact={true}
                strict={true}
                className={classes.link}
                activeClassName={classes.activeLink}
                to="/"
              >
                Home
              </NavLink>
            </Typography>
            <Typography
              className={classes.title}
              variant="title"
              color="inherit"
              noWrap={true}
            >
              <NavLink
                exact={true}
                strict={true}
                className={classes.link}
                activeClassName={classes.activeLink}
                to="blocks"
              >
                Blocks
              </NavLink>
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
              <IconButton
                className={bubble}
                aria-label={`${notifications} pending notifications`}
                onClick={this.toggleIncrement}
              >
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
    this.props.startIncrementNotifications(2);
    this.props.startResetNotifications();
  }

  public componentWillUnmount(): void {
    this.props.stopIncrementNotifications();
    this.props.stopResetNotifications();
  }

  private toggleTheme = () => {
    const { mode, changeTheme } = this.props;
    changeTheme(mode === "light" ? "dark" : "light");
  };

  private toggleIncrement = () => {
    this.props.toggleIncrementNotifications();
  };
}

export default withStyles<keyof IHeaderStyles>({
  activeLink: {
    color: "deepskyblue !important"
  },
  incrementing: {
    color: "green"
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  },
  root: {},
  title: {
    flex: "0 1 auto",
    marginLeft: 24,
    marginRight: 30
  }
})(Header);
