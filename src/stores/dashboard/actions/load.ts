import { interval, Observable, of } from "rxjs";
import {
  mapTo,
  merge,
  mergeMap,
  take,
  takeUntil,
  tap,
  // zip
} from "rxjs/operators";

import { ofType } from "redux-observable";

import { IAction, IReducer, IReducers } from "../../types";
import { IDashboardState } from "../states";

import { startLoadingChannels } from "../../channel/actions";
// import { LOADED_CHANNELS } from "../../channel/actions";

import { startLoadingBlocks } from "../../block/actions";
// import { LOADED_BLOCKS } from "../../block/actions";

import { namespace } from "../namespace";

const START_LOADING_DASHBOARD = `${namespace}/START_LOADING_DASHBOARD`;

const LOADED_DASHBOARD = `${namespace}/LOADED_DASHBOARD`;

const STOP_LOADING_DASHBOARD = `${namespace}/STOP_LOADING_DASHBOARD`;

export type StartLoadingDashboard = typeof START_LOADING_DASHBOARD;

export interface IStartLoadingDashboard extends IAction {
  type: StartLoadingDashboard;
}

export function startLoadingDashboard(): IStartLoadingDashboard {
  return {
    type: START_LOADING_DASHBOARD
  };
}

export type LoadedDashboard = typeof LOADED_DASHBOARD;

export interface ILoadedDashboard extends IAction {
  type: StartLoadingDashboard;
}

export function loadedDashboard(): ILoadedDashboard {
  return {
    type: LOADED_DASHBOARD
  };
}

export type StopLoadingDashboard = typeof STOP_LOADING_DASHBOARD;

export interface IStopLoadingDashboard extends IAction {
  type: StopLoadingDashboard;
}

export function stopLoadingDashboard(): IStopLoadingDashboard {
  return {
    type: STOP_LOADING_DASHBOARD
  };
}

const startLoadingReducer: IReducer<IDashboardState, IStartLoadingDashboard> = (
  state: IDashboardState,
  action: IStartLoadingDashboard
): IDashboardState => {
  return {
    ...state,
    loading: true
  };
};

const loadedReducer: IReducer<IDashboardState, ILoadedDashboard> = (
  state: IDashboardState,
  action: ILoadedDashboard
): IDashboardState => {
  return {
    ...state,
    loading: false
  };
};

const stopLoadingReducer: IReducer<IDashboardState, IStopLoadingDashboard> = (
  state: IDashboardState,
  action: IStopLoadingDashboard
): IDashboardState => {
  return {
    ...state,
    loading: false
  };
};

export const loadReducers: IReducers<
  IDashboardState,
  IStartLoadingDashboard
> = {
  [START_LOADING_DASHBOARD]: startLoadingReducer,
  [LOADED_DASHBOARD]: loadedReducer,
  [STOP_LOADING_DASHBOARD]: stopLoadingReducer
};

export const loadingEpic = (
  action$: Observable<IStartLoadingDashboard>
): Observable<ILoadedDashboard> =>
  action$.pipe(
    ofType(START_LOADING_DASHBOARD),
    mergeMap(() =>
      interval(10)
        .pipe(
          merge(
            of(startLoadingChannels()),
            of(startLoadingBlocks()),
            // zip(
            //   action$.pipe(
            //     ofType(LOADED_CHANNELS),
            //     take(1)
            //   ),
            //   action$.pipe(
            //     ofType(LOADED_BLOCKS),
            //     take(1)
            //   )
            // )
          ),
          take(1)
        )
        .pipe(
          // tslint:disable-next-line:no-console
          tap(x => console.log("x", x)),
          mapTo(loadedDashboard()),
          takeUntil(action$.pipe(ofType(STOP_LOADING_DASHBOARD)))
        )
    ),
    // tslint:disable-next-line:no-console
    tap(y => console.log("y", y)),
  );

export const loadEpics = [loadingEpic];
