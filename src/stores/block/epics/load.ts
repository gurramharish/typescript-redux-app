import { Observable, of, timer } from "rxjs";
import { catchError, mapTo, switchMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import {
  IDoneLoadingBlocks,
  IErrorLoadingBlocks,
  IStartLoadingBlocks,
  IStopLoadingBlocks
} from "../actions/load";

import {
  doneLoadingBlocks,
  errorLoadingBlocks,
  START_LOADING_BLOCKS,
  STOP_LOADING_BLOCKS
} from "../actions/load";

import { blocks as data } from "../data";

export const loadingEpic = (
  action$: Observable<IStartLoadingBlocks | IStopLoadingBlocks>
): Observable<IDoneLoadingBlocks | IErrorLoadingBlocks> =>
  action$.pipe(
    ofType(START_LOADING_BLOCKS),
    switchMap(action =>
      timer(1000).pipe(
        mapTo(doneLoadingBlocks(data)),
        takeUntil(action$.pipe(ofType(STOP_LOADING_BLOCKS))),
        catchError(error => of(errorLoadingBlocks(error)))
      )
    )
  );

export const loadEpics = [loadingEpic];
