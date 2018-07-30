import { IAction } from "../../types";

import { interval, Observable } from "rxjs";
import { mapTo, mergeMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { addNotifications, IAddNotifications } from "./add";

const START_INCREMENT_NOTIFICATIONS = "START_INCREMENT_NOTIFICATIONS";

const STOP_INCREMENT_NOTIFICATIONS = "STOP_INCREMENT_NOTIFICATIONS";

export type StartIncrementNotifications = typeof START_INCREMENT_NOTIFICATIONS;

export type StopIncrementNotifications = typeof STOP_INCREMENT_NOTIFICATIONS;

export interface IStartIncrementNotifications extends IAction {
  type: StartIncrementNotifications;
  count: number;
}

export function startIncrementNotifications(
  count: number = 1
): IStartIncrementNotifications {
  return {
    count,
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

export const startStopIncrementEpic = (
  action$: Observable<
    IStartIncrementNotifications | IStopIncrementNotifications
  >
): Observable<IAddNotifications> =>
  action$.pipe(
    ofType(START_INCREMENT_NOTIFICATIONS),
    mergeMap((action: IStartIncrementNotifications) =>
      interval(5000).pipe(
        mapTo(addNotifications(action.count)),
        takeUntil(action$.pipe(ofType(STOP_INCREMENT_NOTIFICATIONS)))
      )
    )
  );
