import { IReducers } from "../../entity/types";

import { INotificationAction } from "../actions";
import { INotificationState } from "../states";

import { addReducers } from "./add";
import { clearReducers } from "./clear";
import { incrementReducers } from "./increment";
import { resetReducers } from "./reset";

const reducers: IReducers<INotificationState, INotificationAction> = {
  ...addReducers,
  ...clearReducers,
  ...incrementReducers,
  ...resetReducers
};

export function notificationReducer(
  state: INotificationState = {
    count: 0,
    increment: 1,
    incrementing: false,
    reseting: false
  },
  action: INotificationAction
): INotificationState {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}
