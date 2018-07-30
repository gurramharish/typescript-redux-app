import { IAction } from "../../types";

import { interval, Observable } from "rxjs";
import { mapTo, mergeMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { clearNotifications, IClearNotifications } from "./clear";

const START_RESET_NOTIFICATIONS = "START_RESET_NOTIFICATIONS";

const STOP_RESET_NOTIFICATIONS = "STOP_RESET_NOTIFICATIONS";

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
