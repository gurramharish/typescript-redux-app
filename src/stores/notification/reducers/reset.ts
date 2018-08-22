import { IReducer, IReducers } from "../../entity/types";
import { INotificationState } from "../states";

import {
  IResetNotifications,
  IStartResetNotifications,
  IStopResetNotifications
} from "../actions/reset";

import {
  START_RESET_NOTIFICATIONS,
  STOP_RESET_NOTIFICATIONS
} from "../actions/reset";

const startResetReducer: IReducer<
  INotificationState,
  IStartResetNotifications
> = (
  state: INotificationState,
  action: IStartResetNotifications
): INotificationState => {
  return {
    ...state,
    reseting: true
  };
};

const stopResetReducer: IReducer<
  INotificationState,
  IStopResetNotifications
> = (
  state: INotificationState,
  action: IStopResetNotifications
): INotificationState => {
  return {
    ...state,
    reseting: false
  };
};

export const resetReducers: IReducers<
  INotificationState,
  IResetNotifications
> = {
  [START_RESET_NOTIFICATIONS]: startResetReducer,
  [STOP_RESET_NOTIFICATIONS]: stopResetReducer
};
