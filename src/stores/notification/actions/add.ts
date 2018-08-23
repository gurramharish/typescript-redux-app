import { IAction } from "../../common/types";

import { namespace } from "../namespace";

export const ADD_NOTIFICATIONS = `${namespace}/add`;

export type AddNotifications = typeof ADD_NOTIFICATIONS;

export interface IAddNotifications extends IAction {
  type: AddNotifications;
  notifications: number;
}

export function addNotifications(notifications: number): IAddNotifications {
  return {
    notifications,
    type: ADD_NOTIFICATIONS
  };
}
