import { Observable, timer } from "rxjs";
import { mapTo, switchMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import {
  ILoadedBlocks,
  IStartLoadingBlocks,
  IStopLoadingBlocks
} from "../actions/load";

import {
  loadedBlocks,
  START_LOADING_BLOCKS,
  STOP_LOADING_BLOCKS
} from "../actions/load";

import { blocks as data } from "../data";

export const loadingEpic = (
  action$: Observable<IStartLoadingBlocks | IStopLoadingBlocks>
): Observable<ILoadedBlocks> =>
  action$.pipe(
    ofType(START_LOADING_BLOCKS),
    switchMap(action =>
      timer(1000).pipe(
        mapTo(loadedBlocks(data)),
        takeUntil(action$.pipe(ofType(STOP_LOADING_BLOCKS)))
      )
    )
  );

export const loadEpics = [loadingEpic];
