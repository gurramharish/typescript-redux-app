import { IAction, IReducer, IReducers } from "../../types";
import { IThemeState } from "../states";

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
