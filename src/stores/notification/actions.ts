import { Action } from "redux";
import { ADD_NOTIFICATIONS, AddNotifications } from "./types";
import { CLEAR_NOTIFICATIONS, ClearNotifications } from "./types";

export interface IAddNotificationsAction extends Action {
  type: AddNotifications;
  notifications: number;
}

export function addNotificationsAction(
  notifications: number
): IAddNotificationsAction {
  return {
    notifications,
    type: ADD_NOTIFICATIONS
  };
}

export interface IClearNotificationsAction extends Action {
  type: ClearNotifications;
}

export function clearNotificationsAction(): IClearNotificationsAction {
  return {
    type: CLEAR_NOTIFICATIONS
  };
}

export type INotificationAction =
  | IAddNotificationsAction
  | IClearNotificationsAction;
