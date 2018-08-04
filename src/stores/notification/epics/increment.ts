import { interval, Observable } from "rxjs";
import {
  filter,
  map,
  mapTo,
  mergeMap,
  scan,
  takeUntil,
  withLatestFrom
} from "rxjs/operators";

import { ofType, StateObservable } from "redux-observable";

import { INotificationState } from "../states";

import { addNotifications, IAddNotifications } from "../actions/add";

import {
  IStartIncrementNotifications,
  IStopIncrementNotifications,
  IToggleIncrementNotifications
} from "../actions/increment";

import {
  START_INCREMENT_NOTIFICATIONS,
  STOP_INCREMENT_NOTIFICATIONS,
  TOGGLE_INCREMENT_NOTIFICATIONS
} from "../actions/increment";

import {
  startIncrementNotifications,
  stopIncrementNotifications
} from "../actions/increment";

export const startStopIncrementEpic = (
  action$: Observable<
    IStartIncrementNotifications | IStopIncrementNotifications
  >
): Observable<IAddNotifications> =>
  action$.pipe(
    ofType(START_INCREMENT_NOTIFICATIONS),
    mergeMap((action: IStartIncrementNotifications) =>
      interval(5000).pipe(
        mapTo(addNotifications(action.increment)),
        takeUntil(action$.pipe(ofType(STOP_INCREMENT_NOTIFICATIONS)))
      )
    )
  );

export const toggleStartIncrementEpic = (
  action$: Observable<IToggleIncrementNotifications>,
  state$: StateObservable<{ notification: INotificationState }>
): Observable<IStartIncrementNotifications | IStopIncrementNotifications> =>
  action$.pipe(
    ofType(TOGGLE_INCREMENT_NOTIFICATIONS),
    mapTo(1),
    scan((acc, value) => acc + value),
    filter(value => value % 2 === 0),
    withLatestFrom(state$),
    map(([_, state]) =>
      startIncrementNotifications(state.notification.increment)
    )
  );

export const toggleStopIncrementEpic = (
  action$: Observable<IToggleIncrementNotifications>
): Observable<IStartIncrementNotifications | IStopIncrementNotifications> =>
  action$.pipe(
    ofType(TOGGLE_INCREMENT_NOTIFICATIONS),
    mapTo(1),
    scan((acc, value) => acc + value),
    filter(value => value % 2 !== 0),
    mapTo(stopIncrementNotifications())
  );

export const incrementEpics = [
  startStopIncrementEpic,
  toggleStartIncrementEpic,
  toggleStopIncrementEpic
];
