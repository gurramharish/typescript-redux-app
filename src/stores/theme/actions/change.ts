import { IAction } from "../../types";

import { namespace } from "../namespace";

export const CHANGE_THEME = `${namespace}/CHANGE_THEME`;

export type ChangeTheme = typeof CHANGE_THEME;

export interface IChangeTheme extends IAction {
  type: ChangeTheme;
  mode: "light" | "dark";
}

export function changeTheme(mode: "light" | "dark"): IChangeTheme {
  return {
    mode,
    type: CHANGE_THEME
  };
}
