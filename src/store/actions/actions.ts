import { Action } from "redux";
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
