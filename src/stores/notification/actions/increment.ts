import { IAction } from "../../entity/types";

import { namespace } from "../namespace";

export const START_INCREMENT_NOTIFICATIONS = `${namespace}/START_INCREMENT_NOTIFICATIONS`;

export const STOP_INCREMENT_NOTIFICATIONS = `${namespace}/STOP_INCREMENT_NOTIFICATIONS`;

export const TOGGLE_INCREMENT_NOTIFICATIONS = `${namespace}/TOGGLE_INCREMENT_NOTIFICATIONS`;

export type StartIncrementNotifications = typeof START_INCREMENT_NOTIFICATIONS;

export type StopIncrementNotifications = typeof STOP_INCREMENT_NOTIFICATIONS;

export type ToggleIncrementNotifications = typeof TOGGLE_INCREMENT_NOTIFICATIONS;

export interface IStartIncrementNotifications extends IAction {
  type: StartIncrementNotifications;
  increment: number;
}

export function startIncrementNotifications(
  increment: number = 1
): IStartIncrementNotifications {
  return {
    increment,
    type: START_INCREMENT_NOTIFICATIONS
  };
}

export interface IStopIncrementNotifications extends IAction {
  type: StopIncrementNotifications;
}

export function stopIncrementNotifications(): IStopIncrementNotifications {
  return {
    type: STOP_INCREMENT_NOTIFICATIONS
  };
}

export interface IToggleIncrementNotifications extends IAction {
  type: ToggleIncrementNotifications;
}

export function toggleIncrementNotifications(): IToggleIncrementNotifications {
  return {
    type: TOGGLE_INCREMENT_NOTIFICATIONS
  };
}

export type IIncrementNotifications =
  | IStartIncrementNotifications
  | IStopIncrementNotifications
  | IToggleIncrementNotifications;
