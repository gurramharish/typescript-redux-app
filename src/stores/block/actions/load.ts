import { IAction } from "../../types";
import { IBlock } from "../states";

import { namespace } from "../namespace";

export const START_LOADING_BLOCKS = `${namespace}/START_LOADING_BLOCKS`;

export const DONE_LOADING_BLOCKS = `${namespace}/DONE_LOADING_BLOCKS`;

export const STOP_LOADING_BLOCKS = `${namespace}/STOP_LOADING_BLOCKS`;

export const ERROR_LOADING_BLOCKS = `${namespace}/ERROR_LOADING_BLOCKS`;

export type StartLoadingBlocks = typeof START_LOADING_BLOCKS;

export interface IStartLoadingBlocks extends IAction {
  type: StartLoadingBlocks;
}

export function startLoadingBlocks(): IStartLoadingBlocks {
  return {
    type: START_LOADING_BLOCKS
  };
}

export type DoneLoadingBlocks = typeof DONE_LOADING_BLOCKS;

export interface IDoneLoadingBlocks extends IAction {
  type: StartLoadingBlocks;
  blocks: IBlock[];
}

export function doneLoadingBlocks(blocks: IBlock[]): IDoneLoadingBlocks {
  return {
    blocks,
    type: DONE_LOADING_BLOCKS
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

export type ErrorLoadingBlocks = typeof ERROR_LOADING_BLOCKS;

export interface IErrorLoadingBlocks extends IAction {
  error: string;
  type: ErrorLoadingBlocks;
}

export function errorLoadingBlocks(error: string): IErrorLoadingBlocks {
  return {
    error,
    type: ERROR_LOADING_BLOCKS
  };
}
