import { Observable, timer } from "rxjs";
import { mapTo, switchMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import {
  ILoadedTransactions,
  IStartLoadingTransactions,
  IStopLoadingTransactions
} from "../actions/load";

import {
  loadedTransactions,
  START_LOADING_TRANSACTIONS,
  STOP_LOADING_TRANSACTIONS
} from "../actions/load";

import { transactions as data } from "../data";

export const loadingEpic = (
  action$: Observable<IStartLoadingTransactions | IStopLoadingTransactions>
): Observable<ILoadedTransactions> =>
  action$.pipe(
    ofType(START_LOADING_TRANSACTIONS),
    switchMap(action =>
      timer(1000).pipe(
        mapTo(loadedTransactions(data)),
        takeUntil(action$.pipe(ofType(STOP_LOADING_TRANSACTIONS)))
      )
    )
  );

export const loadEpics = [loadingEpic];
