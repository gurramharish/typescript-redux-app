import { Observable, of, timer } from "rxjs";
import { catchError, mapTo, switchMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import {
  IDoneLoadingTransactions,
  IErrorLoadingTransactions,
  IStartLoadingTransactions,
  IStopLoadingTransactions
} from "../actions/load";

import {
  doneLoadingTransactions,
  errorLoadingTransactions,
  START_LOADING_TRANSACTIONS,
  STOP_LOADING_TRANSACTIONS
} from "../actions/load";

import { transactions as data } from "../data";

export const loadingEpic = (
  action$: Observable<IStartLoadingTransactions | IStopLoadingTransactions>
): Observable<IDoneLoadingTransactions | IErrorLoadingTransactions> =>
  action$.pipe(
    ofType(START_LOADING_TRANSACTIONS),
    switchMap(action =>
      timer(1000).pipe(
        mapTo(doneLoadingTransactions(data)),
        takeUntil(action$.pipe(ofType(STOP_LOADING_TRANSACTIONS))),
        catchError(error => of(errorLoadingTransactions(error)))
      )
    )
  );

export const loadEpics = [loadingEpic];
