import { interval, Observable } from "rxjs";
import { mapTo, mergeMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { IAction, IReducer, IReducers } from "../../types";
import { IChannel, IChannelState } from "../states";

import { namespace } from "../namespace";

import { channels as data } from "../data";

export const START_LOADING_CHANNELS = `${namespace}/START_LOADING_CHANNELS`;

export const LOADED_CHANNELS = `${namespace}/LOADED_CHANNELS`;

export const STOP_LOADING_CHANNELS = `${namespace}/STOP_LOADING_CHANNELS`;

export type StartLoadingChannels = typeof START_LOADING_CHANNELS;

export interface IStartLoadingChannels extends IAction {
  type: StartLoadingChannels;
}

export function startLoadingChannels(): IStartLoadingChannels {
  return {
    type: START_LOADING_CHANNELS
  };
}

export type LoadedChannels = typeof LOADED_CHANNELS;

export interface ILoadedChannels extends IAction {
  type: StartLoadingChannels;
  channels: IChannel[];
}

export function loadedChannels(channels: IChannel[]): ILoadedChannels {
  return {
    channels,
    type: LOADED_CHANNELS
  };
}

export type StopLoadingChannels = typeof STOP_LOADING_CHANNELS;

export interface IStopLoadingChannels extends IAction {
  type: StopLoadingChannels;
}

export function stopLoadingChannels(): IStopLoadingChannels {
  return {
    type: STOP_LOADING_CHANNELS
  };
}

const startLoadingReducer: IReducer<IChannelState, IStartLoadingChannels> = (
  state: IChannelState,
  action: IStartLoadingChannels
): IChannelState => {
  return {
    ...state,
    loading: true
  };
};

const loadedReducer: IReducer<IChannelState, ILoadedChannels> = (
  state: IChannelState,
  action: ILoadedChannels
): IChannelState => {
  return {
    ...state,
    channels: action.channels,
    loading: false
  };
};

const stopLoadingReducer: IReducer<IChannelState, IStopLoadingChannels> = (
  state: IChannelState,
  action: IStopLoadingChannels
): IChannelState => {
  return {
    ...state,
    loading: false
  };
};

export const loadReducers: IReducers<IChannelState, IStartLoadingChannels> = {
  [START_LOADING_CHANNELS]: startLoadingReducer,
  [LOADED_CHANNELS]: loadedReducer,
  [STOP_LOADING_CHANNELS]: stopLoadingReducer
};

export const loadingEpic = (
  action$: Observable<IStartLoadingChannels | IStopLoadingChannels>
): Observable<ILoadedChannels> =>
  action$.pipe(
    ofType(START_LOADING_CHANNELS),
    mergeMap(action =>
      interval(1000).pipe(
        mapTo(loadedChannels(data)),
        takeUntil(action$.pipe(ofType(STOP_LOADING_CHANNELS)))
      )
    )
  );

export const loadEpics = [loadingEpic];
