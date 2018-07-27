import { Observable } from "rxjs";
import { interval } from "rxjs";
import { mapTo, mergeMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";
import { addNotificationsAction, INotificationAction } from "./actions";
import { START_NOTIFICATIONS, STOP_NOTIFICATIONS } from "./types";

export const startNotificationsEpic = (
  action$: Observable<INotificationAction>
): Observable<INotificationAction> =>
  action$.pipe(
    ofType(START_NOTIFICATIONS),
    mergeMap(() =>
      interval(5000).pipe(
        mapTo(addNotificationsAction(1)),
        takeUntil(action$.pipe(ofType(STOP_NOTIFICATIONS)))
      )
    )
  );
