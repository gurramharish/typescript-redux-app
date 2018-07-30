import { IAction, IReducer, IReducers } from "../../types";
import { INotificationState } from "../states";

import { interval, Observable } from "rxjs";
import { filter, map, mapTo, mergeMap, scan, takeUntil } from "rxjs/operators";

import { ofType, StateObservable } from "redux-observable";

import { addNotifications, IAddNotifications } from "./add";

const START_INCREMENT_NOTIFICATIONS = "START_INCREMENT_NOTIFICATIONS";

const STOP_INCREMENT_NOTIFICATIONS = "STOP_INCREMENT_NOTIFICATIONS";

const TOGGLE_INCREMENT_NOTIFICATIONS = "TOGGLE_INCREMENT_NOTIFICATIONS";

export type StartIncrementNotifications = typeof START_INCREMENT_NOTIFICATIONS;

export type StopIncrementNotifications = typeof STOP_INCREMENT_NOTIFICATIONS;

export type ToggleIncrementNotifications = typeof TOGGLE_INCREMENT_NOTIFICATIONS;

export interface IStartIncrementNotifications extends IAction {
  type: StartIncrementNotifications;
  increment: number;
}

export function startIncrementNotifications(
  increment: number = 1
): IStartIncrementNotifications {
  return {
    increment,
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

export interface IToggleIncrementNotifications extends IAction {
  type: ToggleIncrementNotifications;
}

export function toggleIncrementNotifications(): IToggleIncrementNotifications {
  return {
    type: TOGGLE_INCREMENT_NOTIFICATIONS
  };
}

export type IIncrementNotifications =
  | IStartIncrementNotifications
  | IStopIncrementNotifications
  | IToggleIncrementNotifications;

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
  state$: StateObservable<INotificationState>
): Observable<IStartIncrementNotifications | IStopIncrementNotifications> =>
  action$.pipe(
    ofType(TOGGLE_INCREMENT_NOTIFICATIONS),
    mapTo(1),
    scan((acc, value) => acc + value),
    filter(value => value % 2 === 0),
    map(() => startIncrementNotifications(state$.value.increment))
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
