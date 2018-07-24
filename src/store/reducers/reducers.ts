import { IStoreAction } from "../Action";
import { IStoreState } from "../State";

import { CHANGE_THEME } from "../actions";
import { ADD_NOTIFICATIONS } from "../actions";

export function reducer(state: IStoreState, action: IStoreAction): IStoreState {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme
      };
    case ADD_NOTIFICATIONS:
      return {
        ...state,
        notifications: state.notifications + action.notifications
      };
    default:
      return state;
  }
}
