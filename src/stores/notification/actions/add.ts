import { IAction, IReducer, IReducers } from "../../types";
import { INotificationState } from "../states";

import { namespace } from "../namespace";

const ADD_NOTIFICATIONS = `${namespace}/ADD_NOTIFICATIONS`;

export type AddNotifications = typeof ADD_NOTIFICATIONS;

export interface IAddNotifications extends IAction {
  type: AddNotifications;
  notifications: number;
}

export function addNotifications(
  notifications: number
): IAddNotifications {
  return {
    notifications,
    type: ADD_NOTIFICATIONS
  };
}

const reducer: IReducer<INotificationState, IAddNotifications> = (
  state: INotificationState,
  action: IAddNotifications
): INotificationState => {
  return {
    ...state,
    count: state.count + action.notifications
  };
};

export const addReducers: IReducers<
  INotificationState,
  IAddNotifications
> = {
  [ADD_NOTIFICATIONS]: reducer
};
