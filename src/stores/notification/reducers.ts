import { INotificationAction } from "./actions";
import { INotificationState } from "./states";

import { ADD_NOTIFICATIONS, CLEAR_NOTIFICATIONS } from "./types";

export function reducer(
  state: INotificationState = { count: 0 },
  action: INotificationAction
): INotificationState {
  switch (action.type) {
    case ADD_NOTIFICATIONS:
      return {
        ...state,
        count: state.count + action.notifications
      };
    case CLEAR_NOTIFICATIONS:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
}
