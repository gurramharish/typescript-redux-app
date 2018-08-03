import { concat, Observable, of, zip } from "rxjs";
import { mapTo, switchMap, take, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { IAction, IReducer, IReducers } from "../../types";
import { IDashboardState } from "../states";

import { IBlockAction } from "../../block/actions";
import { startLoadingBlocks, stopLoadingBlocks } from "../../block/actions";
import { LOADED_BLOCKS } from "../../block/actions";

import { IChannelAction } from "../../channel/actions";
import {
  startLoadingChannels,
  stopLoadingChannels
} from "../../channel/actions";
import { LOADED_CHANNELS } from "../../channel/actions";

import { ITransactionAction } from "../../transaction/actions";
import {
  startLoadingTransactions,
  stopLoadingTransactions
} from "../../transaction/actions";
import { LOADED_TRANSACTIONS } from "../../transaction/actions";

import { namespace } from "../namespace";

export const START_LOADING_DASHBOARD = `${namespace}/START_LOADING_DASHBOARD`;

export const LOADED_DASHBOARD = `${namespace}/LOADED_DASHBOARD`;

export const STOP_LOADING_DASHBOARD = `${namespace}/STOP_LOADING_DASHBOARD`;

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

export const startLoadingEpic = (
  action$: Observable<IStartLoadingDashboard | IStopLoadingDashboard>
): Observable<
  IBlockAction | IChannelAction | ITransactionAction | ILoadedDashboard
> =>
  action$.pipe(
    ofType(START_LOADING_DASHBOARD),
    switchMap(() =>
      concat(
        of(
          startLoadingChannels(),
          startLoadingBlocks(),
          startLoadingTransactions()
        ),
        zip(
          action$.pipe(
            ofType(LOADED_CHANNELS),
            take(1)
          ),
          action$.pipe(
            ofType(LOADED_BLOCKS),
            take(1)
          ),
          action$.pipe(
            ofType(LOADED_TRANSACTIONS),
            take(1)
          )
        ).pipe(mapTo(loadedDashboard()))
      ).pipe(takeUntil(action$.pipe(ofType(STOP_LOADING_DASHBOARD))))
    )
  );

export const stopLoadingEpic = (
  action$: Observable<IStopLoadingDashboard>
): Observable<IBlockAction | IChannelAction> =>
  action$.pipe(
    ofType(STOP_LOADING_DASHBOARD),
    switchMap(() =>
      of(stopLoadingChannels(), stopLoadingBlocks(), stopLoadingTransactions())
    )
  );

export const loadEpics = [startLoadingEpic, stopLoadingEpic];
