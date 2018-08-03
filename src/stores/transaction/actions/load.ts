import { Observable, timer } from "rxjs";
import { mapTo, switchMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { IAction, IReducer, IReducers } from "../../types";
import { ITransaction, ITransactionState } from "../states";

import { namespace } from "../namespace";

import { transactions as data } from "../data";

export const START_LOADING_TRANSACTIONS = `${namespace}/START_LOADING_TRANSACTIONS`;

export const LOADED_TRANSACTIONS = `${namespace}/LOADED_TRANSACTIONS`;

export const STOP_LOADING_TRANSACTIONS = `${namespace}/STOP_LOADING_TRANSACTIONS`;

export type StartLoadingTransactions = typeof START_LOADING_TRANSACTIONS;

export interface IStartLoadingTransactions extends IAction {
  type: StartLoadingTransactions;
}

export function startLoadingTransactions(): IStartLoadingTransactions {
  return {
    type: START_LOADING_TRANSACTIONS
  };
}

export type LoadedTransactions = typeof LOADED_TRANSACTIONS;

export interface ILoadedTransactions extends IAction {
  type: StartLoadingTransactions;
  transactions: ITransaction[];
}

export function loadedTransactions(
  transactions: ITransaction[]
): ILoadedTransactions {
  return {
    transactions,
    type: LOADED_TRANSACTIONS
  };
}

export type StopLoadingTransactions = typeof STOP_LOADING_TRANSACTIONS;

export interface IStopLoadingTransactions extends IAction {
  type: StopLoadingTransactions;
}

export function stopLoadingTransactions(): IStopLoadingTransactions {
  return {
    type: STOP_LOADING_TRANSACTIONS
  };
}

const startLoadingReducer: IReducer<
  ITransactionState,
  IStartLoadingTransactions
> = (
  state: ITransactionState,
  action: IStartLoadingTransactions
): ITransactionState => {
  return {
    ...state,
    loading: true
  };
};

const loadedReducer: IReducer<ITransactionState, ILoadedTransactions> = (
  state: ITransactionState,
  action: ILoadedTransactions
): ITransactionState => {
  return {
    ...state,
    loading: false,
    transactions: action.transactions
  };
};

const stopLoadingReducer: IReducer<
  ITransactionState,
  IStopLoadingTransactions
> = (
  state: ITransactionState,
  action: IStopLoadingTransactions
): ITransactionState => {
  return {
    ...state,
    loading: false
  };
};

export const loadReducers: IReducers<
  ITransactionState,
  IStartLoadingTransactions
> = {
  [START_LOADING_TRANSACTIONS]: startLoadingReducer,
  [LOADED_TRANSACTIONS]: loadedReducer,
  [STOP_LOADING_TRANSACTIONS]: stopLoadingReducer
};

export const loadingEpic = (
  action$: Observable<IStartLoadingTransactions | IStopLoadingTransactions>
): Observable<ILoadedTransactions> =>
  action$.pipe(
    ofType(START_LOADING_TRANSACTIONS),
    switchMap(action =>
      timer(2000).pipe(
        mapTo(loadedTransactions(data)),
        takeUntil(action$.pipe(ofType(STOP_LOADING_TRANSACTIONS)))
      )
    )
  );

export const loadEpics = [loadingEpic];
