import { IAction } from "../../common/types";

import { namespace } from "../namespace";

export const CLEAR_NOTIFICATIONS = `${namespace}/clear`;

export type ClearNotifications = typeof CLEAR_NOTIFICATIONS;

export interface IClearNotifications extends IAction {
  type: ClearNotifications;
}

export function clearNotifications(): IClearNotifications {
  return {
    type: CLEAR_NOTIFICATIONS
  };
}
