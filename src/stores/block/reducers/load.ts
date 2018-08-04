import { IReducer, IReducers } from "../../types";
import { IBlockState } from "../states";

import {
  ILoadedBlocks,
  IStartLoadingBlocks,
  IStopLoadingBlocks
} from "../actions/load";

import {
  LOADED_BLOCKS,
  START_LOADING_BLOCKS,
  STOP_LOADING_BLOCKS
} from "../actions/load";

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
