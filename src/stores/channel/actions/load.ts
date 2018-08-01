import { interval, Observable } from "rxjs";
import { mapTo, mergeMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { IAction, IReducer, IReducers } from "../../types";
import { IChannel, IChannelState } from "../states";

import { namespace } from "../namespace";

const LOAD_CHANNELS = `${namespace}/LOAD_CHANNELS`;

const LOADED_CHANNELS = `${namespace}/LOADED_CHANNELS`;

const CANCEL_LOAD_CHANNELS = `${namespace}/CANCEL_LOAD_CHANNELS`;

export type LoadChannels = typeof LOAD_CHANNELS;

export interface ILoadChannels extends IAction {
  type: LoadChannels;
}

export function loadChannel(): ILoadChannels {
  return {
    type: LOAD_CHANNELS
  };
}

export type LoadedChannels = typeof LOADED_CHANNELS;

export interface ILoadedChannels extends IAction {
  type: LoadChannels;
  channels: IChannel[];
}

export function loadedChannel(channels: IChannel[]): ILoadedChannels {
  return {
    channels,
    type: LOADED_CHANNELS
  };
}

export type CancelLoadChannels = typeof CANCEL_LOAD_CHANNELS;

export interface ICancelLoadChannels extends IAction {
  type: CancelLoadChannels;
}

export function cancelLoadChannel(): ICancelLoadChannels {
  return {
    type: CANCEL_LOAD_CHANNELS
  };
}

const loadReducer: IReducer<IChannelState, ILoadChannels> = (
  state: IChannelState,
  action: ILoadChannels
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

const cancelLoadReducer: IReducer<IChannelState, ICancelLoadChannels> = (
  state: IChannelState,
  action: ILoadChannels
): IChannelState => {
  return {
    ...state,
    loading: false
  };
};

export const loadReducers: IReducers<IChannelState, ILoadChannels> = {
  [LOAD_CHANNELS]: loadReducer,
  [LOADED_CHANNELS]: loadedReducer,
  [CANCEL_LOAD_CHANNELS]: cancelLoadReducer
};

export const loadEpic = (
  action$: Observable<ILoadChannels | ICancelLoadChannels>
): Observable<ILoadedChannels> =>
  action$.pipe(
    ofType(LOAD_CHANNELS),
    mergeMap(action =>
      interval(5000).pipe(
        mapTo(loadedChannel([])),
        takeUntil(action$.pipe(ofType(CANCEL_LOAD_CHANNELS)))
      )
    )
  );

export const loadEpics = [loadEpic];
