import { IAction } from "../../types";

import { namespace } from "../namespace";

export const CLEAR_NOTIFICATIONS = `${namespace}/CLEAR_NOTIFICATIONS`;

export type ClearNotifications = typeof CLEAR_NOTIFICATIONS;

export interface IClearNotifications extends IAction {
  type: ClearNotifications;
}

export function clearNotifications(): IClearNotifications {
  return {
    type: CLEAR_NOTIFICATIONS
  };
}
