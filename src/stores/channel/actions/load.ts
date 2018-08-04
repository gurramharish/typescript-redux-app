import { IAction } from "../../types";
import { IChannel } from "../states";

import { namespace } from "../namespace";

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
