import {
  ILoadedTransactions,
  IStartLoadingTransactions,
  IStopLoadingTransactions
} from "./load";

export { startLoadingTransactions, stopLoadingTransactions } from "./load";

export type ITransactionAction =
  | IStartLoadingTransactions
  | ILoadedTransactions
  | IStopLoadingTransactions;
