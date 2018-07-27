import { Action } from "redux";

import { ADD_NOTIFICATIONS, AddNotifications } from "./types";
import { CLEAR_NOTIFICATIONS, ClearNotifications } from "./types";
import { START_NOTIFICATIONS, StartNotifications } from "./types";
import { STOP_NOTIFICATIONS, StopNotifications } from "./types";

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

export interface IStartNotificationsAction extends Action {
  type: StartNotifications;
}

export function startNotificationsAction(): IStartNotificationsAction {
  return {
    type: START_NOTIFICATIONS
  };
}

export interface IStopNotificationsAction extends Action {
  type: StopNotifications;
}

export function stopNotificationsAction(): IStopNotificationsAction {
  return {
    type: STOP_NOTIFICATIONS
  };
}

export type INotificationAction =
  | IAddNotificationsAction
  | IClearNotificationsAction
  | IStartNotificationsAction
  | IStopNotificationsAction;
