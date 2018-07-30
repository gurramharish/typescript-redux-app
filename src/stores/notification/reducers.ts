import { IReducers } from "../type";

import { INotificationAction } from "./actions";
import { INotificationState } from "./states";

import { addReducers } from "./actions/add";
import { clearReducers } from "./actions/clear";

const reducers: IReducers<INotificationState, INotificationAction> = {
  ...addReducers,
  ...clearReducers
};

export function notificationReducer(
  state: INotificationState = { count: 0 },
  action: INotificationAction
): INotificationState {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}
