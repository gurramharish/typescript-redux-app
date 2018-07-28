import { Action } from "redux";

import { ADD_NOTIFICATIONS, AddNotifications } from "./types";
import { CLEAR_NOTIFICATIONS, ClearNotifications } from "./types";
import { START_ADD_NOTIFICATIONS, StartAddNotifications } from "./types";
import { STOP_ADD_NOTIFICATIONS, StopAddNotifications } from "./types";
import { START_RESET_NOTIFICATIONS, StartResetNotifications } from "./types";
import { STOP_RESET_NOTIFICATIONS, StopResetNotifications } from "./types";

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

export interface IStartAddNotificationsAction extends Action {
  type: StartAddNotifications;
  count: number;
}

export function startAddNotificationsAction(
  count: number = 1
): IStartAddNotificationsAction {
  return {
    count,
    type: START_ADD_NOTIFICATIONS
  };
}

export interface IStopAddNotificationsAction extends Action {
  type: StopAddNotifications;
}

export function stopAddNotificationsAction(): IStopAddNotificationsAction {
  return {
    type: STOP_ADD_NOTIFICATIONS
  };
}

export interface IStartResetNotificationsAction extends Action {
  type: StartResetNotifications;
}

export function startResetNotificationsAction(
): IStartResetNotificationsAction {
  return {
    type: START_RESET_NOTIFICATIONS
  };
}

export interface IStopResetNotificationsAction extends Action {
  type: StopResetNotifications;
}

export function stopResetNotificationsAction(): IStopResetNotificationsAction {
  return {
    type: STOP_RESET_NOTIFICATIONS
  };
}

export type INotificationAction =
  | IAddNotificationsAction
  | IClearNotificationsAction
  | IStartAddNotificationsAction
  | IStopAddNotificationsAction
  | IStartResetNotificationsAction
  | IStopResetNotificationsAction;
