import { Action } from "redux";

import { IReducer, IReducers } from "../../type";
import { IThemeState } from "../states";

const CHANGE_THEME = "CHANGE_THEME";

export type ChangeTheme = typeof CHANGE_THEME;

export interface IChangeTheme extends Action {
  type: ChangeTheme;
  mode: "light" | "dark";
}

export function changeTheme(mode: "light" | "dark"): IChangeTheme {
  return {
    mode,
    type: CHANGE_THEME
  };
}

const reducer: IReducer<IThemeState, IChangeTheme> = (
  state: IThemeState,
  action: IChangeTheme
): IThemeState => {
  return {
    ...state,
    mode: action.mode
  };
};

export const changeReducers: IReducers<IThemeState, IChangeTheme> = {
  [CHANGE_THEME]: reducer
};
