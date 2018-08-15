import { Observable, of, timer } from "rxjs";
import { catchError, mapTo, switchMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import {
  IDoneLoadingChannels,
  IErrorLoadingChannels,
  IStartLoadingChannels,
  IStopLoadingChannels
} from "../actions/load";

import {
  doneLoadingChannels,
  errorLoadingChannels,
  START_LOADING_CHANNELS,
  STOP_LOADING_CHANNELS
} from "../actions/load";

import { channels as data } from "../data";

export const loadingEpic = (
  action$: Observable<IStartLoadingChannels | IStopLoadingChannels>
): Observable<IDoneLoadingChannels | IErrorLoadingChannels> =>
  action$.pipe(
    ofType(START_LOADING_CHANNELS),
    switchMap(action =>
      timer(1000).pipe(
        mapTo(doneLoadingChannels(data)),
        takeUntil(action$.pipe(ofType(STOP_LOADING_CHANNELS))),
        catchError(error => of(errorLoadingChannels(error)))
      )
    )
  );

export const loadEpics = [loadingEpic];
