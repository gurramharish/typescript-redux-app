import { IReducer, IReducers } from "../../types";
import { ITransactionState } from "../states";

import {
  IDoneLoadingTransactions,
  IErrorLoadingTransactions,
  IStartLoadingTransactions,
  IStopLoadingTransactions
} from "../actions/load";

import {
  DONE_LOADING_TRANSACTIONS,
  ERROR_LOADING_TRANSACTIONS,
  START_LOADING_TRANSACTIONS,
  STOP_LOADING_TRANSACTIONS
} from "../actions/load";

const startLoadingReducer: IReducer<
  ITransactionState,
  IStartLoadingTransactions
> = (
  state: ITransactionState,
  action: IStartLoadingTransactions
): ITransactionState => {
  return {
    ...state,
    error: null,
    loading: true
  };
};

const doneLoadingReducer: IReducer<
  ITransactionState,
  IDoneLoadingTransactions
> = (
  state: ITransactionState,
  action: IDoneLoadingTransactions
): ITransactionState => {
  return {
    ...state,
    loaded: true,
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

const errorLoadingReducer: IReducer<
  ITransactionState,
  IErrorLoadingTransactions
> = (
  state: ITransactionState,
  action: IErrorLoadingTransactions
): ITransactionState => {
  return {
    ...state,
    error: action.error,
    loading: false
  };
};

export const loadReducers: IReducers<
  ITransactionState,
  IStartLoadingTransactions
> = {
  [START_LOADING_TRANSACTIONS]: startLoadingReducer,
  [DONE_LOADING_TRANSACTIONS]: doneLoadingReducer,
  [STOP_LOADING_TRANSACTIONS]: stopLoadingReducer,
  [ERROR_LOADING_TRANSACTIONS]: errorLoadingReducer
};
