import { IAction } from "../../types";
import { ITransaction } from "../states";

import { namespace } from "../namespace";

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
