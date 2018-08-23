import { IReducer, IReducers } from "../../common/types";
import { IThemeState } from "../states";

import { IChangeTheme } from "../actions/change";

import { CHANGE_THEME } from "../actions/change";

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
