import { IThemeAction } from "./actions";
import { IThemeState } from "./states";

import { CHANGE_THEME } from "./types";

export function reducer(
  state: IThemeState = { mode: "light" },
  action: IThemeAction
): IThemeState {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        mode: action.mode
      };
    default:
      return state;
  }
}
