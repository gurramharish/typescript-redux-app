import { IAction } from "../../types";
import { ITransaction } from "../states";

import { namespace } from "../namespace";

export const START_LOADING_TRANSACTIONS = `${namespace}/START_LOADING_TRANSACTIONS`;

export const DONE_LOADING_TRANSACTIONS = `${namespace}/DONE_LOADING_TRANSACTIONS`;

export const STOP_LOADING_TRANSACTIONS = `${namespace}/STOP_LOADING_TRANSACTIONS`;

export const ERROR_LOADING_TRANSACTIONS = `${namespace}/ERROR_LOADING_TRANSACTIONS`;

export type StartLoadingTransactions = typeof START_LOADING_TRANSACTIONS;

export interface IStartLoadingTransactions extends IAction {
  type: StartLoadingTransactions;
}

export function startLoadingTransactions(): IStartLoadingTransactions {
  return {
    type: START_LOADING_TRANSACTIONS
  };
}

export type DoneLoadingTransactions = typeof DONE_LOADING_TRANSACTIONS;

export interface IDoneLoadingTransactions extends IAction {
  type: DoneLoadingTransactions;
  transactions: ITransaction[];
}

export function doneLoadingTransactions(
  transactions: ITransaction[]
): IDoneLoadingTransactions {
  return {
    transactions,
    type: DONE_LOADING_TRANSACTIONS
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

export type ErrorLoadingTransactions = typeof ERROR_LOADING_TRANSACTIONS;

export interface IErrorLoadingTransactions extends IAction {
  error: string;
  type: ErrorLoadingTransactions;
}

export function errorLoadingTransactions(
  error: string
): IErrorLoadingTransactions {
  return {
    error,
    type: ERROR_LOADING_TRANSACTIONS
  };
}
