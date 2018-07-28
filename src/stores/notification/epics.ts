import { interval, Observable } from "rxjs";
import { mapTo, mergeMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { addNotificationsAction, clearNotificationsAction } from "./actions";
import { INotificationAction, IStartAddNotificationsAction } from "./actions";
import { START_ADD_NOTIFICATIONS, STOP_ADD_NOTIFICATIONS } from "./types";
import { START_RESET_NOTIFICATIONS, STOP_RESET_NOTIFICATIONS } from "./types";

export const startStopAddNotificationsEpic = (
  action$: Observable<INotificationAction>
): Observable<INotificationAction> =>
  action$.pipe(
    ofType(START_ADD_NOTIFICATIONS),
    mergeMap((action: IStartAddNotificationsAction) =>
      interval(5000).pipe(
        mapTo(addNotificationsAction(action.count)),
        takeUntil(action$.pipe(ofType(STOP_ADD_NOTIFICATIONS)))
      )
    )
  );

  export const startStopResetNotificationsEpic = (
    action$: Observable<INotificationAction>
  ): Observable<INotificationAction> =>
    action$.pipe(
      ofType(START_RESET_NOTIFICATIONS),
      mergeMap(() =>
        interval(6 * 5000).pipe(
          mapTo(clearNotificationsAction()),
          takeUntil(action$.pipe(ofType(STOP_RESET_NOTIFICATIONS)))
        )
      )
    );