import { Observable, timer } from "rxjs";
import { mapTo, switchMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import {
  ILoadedChannels,
  IStartLoadingChannels,
  IStopLoadingChannels
} from "../actions/load";

import {
  loadedChannels,
  START_LOADING_CHANNELS,
  STOP_LOADING_CHANNELS
} from "../actions/load";

import { channels as data } from "../data";

export const loadingEpic = (
  action$: Observable<IStartLoadingChannels | IStopLoadingChannels>
): Observable<ILoadedChannels> =>
  action$.pipe(
    ofType(START_LOADING_CHANNELS),
    switchMap(action =>
      timer(1000).pipe(
        mapTo(loadedChannels(data)),
        takeUntil(action$.pipe(ofType(STOP_LOADING_CHANNELS)))
      )
    )
  );

export const loadEpics = [loadingEpic];
