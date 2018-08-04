import { IReducer, IReducers } from "../../types";
import { INotificationState } from "../states";

import {
  IIncrementNotifications,
  IStartIncrementNotifications,
  IStopIncrementNotifications
} from "../actions/increment";

import {
  START_INCREMENT_NOTIFICATIONS,
  STOP_INCREMENT_NOTIFICATIONS
} from "../actions/increment";

const startIncrementReducer: IReducer<
  INotificationState,
  IStartIncrementNotifications
> = (
  state: INotificationState,
  action: IStartIncrementNotifications
): INotificationState => {
  return {
    ...state,
    increment: action.increment,
    incrementing: true
  };
};

const stopIncrementReducer: IReducer<
  INotificationState,
  IStopIncrementNotifications
> = (
  state: INotificationState,
  action: IStopIncrementNotifications
): INotificationState => {
  return {
    ...state,
    incrementing: false
  };
};

export const incrementReducers: IReducers<
  INotificationState,
  IIncrementNotifications
> = {
  [START_INCREMENT_NOTIFICATIONS]: startIncrementReducer,
  [STOP_INCREMENT_NOTIFICATIONS]: stopIncrementReducer
};
