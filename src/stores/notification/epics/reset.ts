import { interval, Observable } from "rxjs";
import { mapTo, mergeMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { clearNotifications, IClearNotifications } from "../actions/clear";

import {
  IStartResetNotifications,
  IStopResetNotifications
} from "../actions/reset";

import {
  START_RESET_NOTIFICATIONS,
  STOP_RESET_NOTIFICATIONS
} from "../actions/reset";

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
