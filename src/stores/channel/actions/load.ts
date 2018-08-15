import { IAction } from "../../types";
import { IChannel } from "../states";

import { namespace } from "../namespace";

export const START_LOADING_CHANNELS = `${namespace}/START_LOADING_CHANNELS`;

export const DONE_LOADING_CHANNELS = `${namespace}/DONE_LOADING_CHANNELS`;

export const STOP_LOADING_CHANNELS = `${namespace}/STOP_LOADING_CHANNELS`;

export const ERROR_LOADING_CHANNELS = `${namespace}/ERROR_LOADING_CHANNELS`;

export type StartLoadingChannels = typeof START_LOADING_CHANNELS;

export interface IStartLoadingChannels extends IAction {
  type: StartLoadingChannels;
}

export function startLoadingChannels(): IStartLoadingChannels {
  return {
    type: START_LOADING_CHANNELS
  };
}

export type DoneLoadingChannels = typeof DONE_LOADING_CHANNELS;

export interface IDoneLoadingChannels extends IAction {
  type: DoneLoadingChannels;
  channels: IChannel[];
}

export function doneLoadingChannels(
  channels: IChannel[]
): IDoneLoadingChannels {
  return {
    channels,
    type: DONE_LOADING_CHANNELS
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

export type ErrorLoadingChannels = typeof ERROR_LOADING_CHANNELS;

export interface IErrorLoadingChannels extends IAction {
  error: string;
  type: ErrorLoadingChannels;
}

export function errorLoadingChannels(error: string): IErrorLoadingChannels {
  return {
    error,
    type: ERROR_LOADING_CHANNELS
  };
}
