import { Action } from "redux";
import { ADD_NOTIFICATIONS, AddNotifications } from "./types";
import { CHANGE_THEME, ChangeTheme } from "./types";

export interface IChangeThemeAction extends Action {
  type: ChangeTheme;
  theme: "light" | "dark";
}

export function changeThemeAction(theme: "light" | "dark"): IChangeThemeAction {
  return {
    theme,
    type: CHANGE_THEME
  };
}

export interface IAddNotificationsAction extends Action {
  type: AddNotifications;
  notifications: number;
}

export function addNotificationsAction(
  notifications: number
): IAddNotificationsAction {
  return {
    notifications,
    type: ADD_NOTIFICATIONS
  };
}
