import { interval, Observable } from "rxjs";
import { mapTo, mergeMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { IAction, IReducer, IReducers } from "../../types";
import { IDashboardState } from "../states";

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

const startLoadingReducer: IReducer<
  IDashboardState,
  IStartLoadingDashboard
> = (
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
  action$: Observable<IStartLoadingDashboard | IStopLoadingDashboard>
): Observable<ILoadedDashboard> =>
  action$.pipe(
    ofType(START_LOADING_DASHBOARD),
    mergeMap(action =>
      interval(1000).pipe(
        mapTo(loadedDashboard()),
        takeUntil(action$.pipe(ofType(STOP_LOADING_DASHBOARD)))
      )
    )
  );

export const loadEpics = [loadingEpic];
