import { IAction } from "../../types";
import { IBlock } from "../states";

import { namespace } from "../namespace";

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
