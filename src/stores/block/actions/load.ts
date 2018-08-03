import { Observable, timer } from "rxjs";
import { mapTo, switchMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { IAction, IReducer, IReducers } from "../../types";
import { IBlock, IBlockState } from "../states";

import { namespace } from "../namespace";

import { blocks as data } from "../data";

export const START_LOADING_BLOCKS = `${namespace}/START_LOADING_BLOCKS`;

export const LOADED_BLOCKS = `${namespace}/LOADED_BLOCKS`;

export const STOP_LOADING_BLOCKS = `${namespace}/STOP_LOADING_BLOCKS`;

export type StartLoadingBlocks = typeof START_LOADING_BLOCKS;

export interface IStartLoadingBlocks extends IAction {
  type: StartLoadingBlocks;
}

export function startLoadingBlocks(): IStartLoadingBlocks {
  return {
    type: START_LOADING_BLOCKS
  };
}

export type LoadedBlocks = typeof LOADED_BLOCKS;

export interface ILoadedBlocks extends IAction {
  type: StartLoadingBlocks;
  blocks: IBlock[];
}

export function loadedBlocks(blocks: IBlock[]): ILoadedBlocks {
  return {
    blocks,
    type: LOADED_BLOCKS
  };
}

export type StopLoadingBlocks = typeof STOP_LOADING_BLOCKS;

export interface IStopLoadingBlocks extends IAction {
  type: StopLoadingBlocks;
}

export function stopLoadingBlocks(): IStopLoadingBlocks {
  return {
    type: STOP_LOADING_BLOCKS
  };
}

const startLoadingReducer: IReducer<IBlockState, IStartLoadingBlocks> = (
  state: IBlockState,
  action: IStartLoadingBlocks
): IBlockState => {
  return {
    ...state,
    loading: true
  };
};

const loadedReducer: IReducer<IBlockState, ILoadedBlocks> = (
  state: IBlockState,
  action: ILoadedBlocks
): IBlockState => {
  return {
    ...state,
    blocks: action.blocks,
    loading: false
  };
};

const stopLoadingReducer: IReducer<IBlockState, IStopLoadingBlocks> = (
  state: IBlockState,
  action: IStopLoadingBlocks
): IBlockState => {
  return {
    ...state,
    loading: false
  };
};

export const loadReducers: IReducers<IBlockState, IStartLoadingBlocks> = {
  [START_LOADING_BLOCKS]: startLoadingReducer,
  [LOADED_BLOCKS]: loadedReducer,
  [STOP_LOADING_BLOCKS]: stopLoadingReducer
};

export const loadingEpic = (
  action$: Observable<IStartLoadingBlocks | IStopLoadingBlocks>
): Observable<ILoadedBlocks> =>
  action$.pipe(
    ofType(START_LOADING_BLOCKS),
    switchMap(action =>
      timer(3000).pipe(
        mapTo(loadedBlocks(data)),
        takeUntil(action$.pipe(ofType(STOP_LOADING_BLOCKS)))
      )
    )
  );

export const loadEpics = [loadingEpic];
