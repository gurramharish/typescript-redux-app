import { IStoreAction } from "../Action";
import { CHANGE_THEME } from "../actions";
import { IStoreState } from "../State";

export function reducer(
  state: IStoreState,
  action: IStoreAction
): IStoreState {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: action.theme };
    default:
      return state;
  }
}
