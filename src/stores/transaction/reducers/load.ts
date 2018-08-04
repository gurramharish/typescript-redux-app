import { IReducer, IReducers } from "../../types";
import { ITransactionState } from "../states";

import {
  ILoadedTransactions,
  IStartLoadingTransactions,
  IStopLoadingTransactions
} from "../actions/load";

import {
  LOADED_TRANSACTIONS,
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
