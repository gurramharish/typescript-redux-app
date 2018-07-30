import { IAction, IReducer, IReducers } from "../../types";
import { INotificationState } from "../states";

const CLEAR_NOTIFICATIONS = "CLEAR_NOTIFICATIONS";

export type ClearNotifications = typeof CLEAR_NOTIFICATIONS;

export interface IClearNotifications extends IAction {
  type: ClearNotifications;
}

export function clearNotifications(): IClearNotifications {
  return {
    type: CLEAR_NOTIFICATIONS
  };
}

const reducer: IReducer<INotificationState, IClearNotifications> = (
  state: INotificationState,
  action: IClearNotifications
): INotificationState => {
  return {
    ...state,
    count: 0
  };
};

export const clearReducers: IReducers<
  INotificationState,
  IClearNotifications
> = {
  [CLEAR_NOTIFICATIONS]: reducer
};
