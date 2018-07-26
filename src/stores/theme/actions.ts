import { Action } from "redux";
import { CHANGE_THEME, ChangeTheme } from "./types";

export interface IChangeThemeAction extends Action {
  type: ChangeTheme;
  mode: "light" | "dark";
}

export function changeThemeAction(mode: "light" | "dark"): IChangeThemeAction {
  return {
    mode,
    type: CHANGE_THEME
  };
}

export type IThemeAction = IChangeThemeAction;
