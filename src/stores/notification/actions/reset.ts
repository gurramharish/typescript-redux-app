import { IAction, IReducer, IReducers } from "../../types";
import { INotificationState } from "../states";

import { interval, Observable } from "rxjs";
import { mapTo, mergeMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { namespace } from "../namespace";

import { clearNotifications, IClearNotifications } from "./clear";

const START_RESET_NOTIFICATIONS = `${namespace}/START_RESET_NOTIFICATIONS`;

const STOP_RESET_NOTIFICATIONS = `${namespace}/STOP_RESET_NOTIFICATIONS`;

export type StartResetNotifications = typeof START_RESET_NOTIFICATIONS;

export type StopResetNotifications = typeof STOP_RESET_NOTIFICATIONS;

export interface IStartResetNotifications extends IAction {
  type: StartResetNotifications;
}

export function startResetNotifications(): IStartResetNotifications {
  return {
    type: START_RESET_NOTIFICATIONS
  };
}

export interface IStopResetNotifications extends IAction {
  type: StopResetNotifications;
}

export function stopResetNotifications(): IStopResetNotifications {
  return {
    type: STOP_RESET_NOTIFICATIONS
  };
}

export type IResetNotifications =
  | IStartResetNotifications
  | IStopResetNotifications;

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

export const startStopResetEpic = (
  action$: Observable<IStartResetNotifications | IStopResetNotifications>
): Observable<IClearNotifications> =>
  action$.pipe(
    ofType(START_RESET_NOTIFICATIONS),
    mergeMap(() =>
      interval(6 * 5000).pipe(
        mapTo(clearNotifications()),
        takeUntil(action$.pipe(ofType(STOP_RESET_NOTIFICATIONS)))
      )
    )
  );

export const resetEpics = [startStopResetEpic];
