import { IReducers } from "../../types";

import { IThemeAction } from "../actions";
import { IThemeState } from "../states";

import { changeReducers } from "./change";

const reducers: IReducers<IThemeState, IThemeAction> = {
  ...changeReducers
};

export function themeReducer(
  state: IThemeState = { mode: "light" },
  action: IThemeAction
): IThemeState {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}
