import { IReducer, IReducers } from "../../types";
import { IBlockState } from "../states";

import {
  IDoneLoadingBlocks,
  IErrorLoadingBlocks,
  IStartLoadingBlocks,
  IStopLoadingBlocks
} from "../actions/load";

import {
  DONE_LOADING_BLOCKS,
  ERROR_LOADING_BLOCKS,
  START_LOADING_BLOCKS,
  STOP_LOADING_BLOCKS
} from "../actions/load";

const startLoadingReducer: IReducer<IBlockState, IStartLoadingBlocks> = (
  state: IBlockState,
  action: IStartLoadingBlocks
): IBlockState => {
  return {
    ...state,
    error: null,
    loading: true
  };
};

const doneLoadingReducer: IReducer<IBlockState, IDoneLoadingBlocks> = (
  state: IBlockState,
  action: IDoneLoadingBlocks
): IBlockState => {
  return {
    ...state,
    blocks: action.blocks,
    loaded: true,
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

const errorLoadingReducer: IReducer<IBlockState, IErrorLoadingBlocks> = (
  state: IBlockState,
  action: IErrorLoadingBlocks
): IBlockState => {
  return {
    ...state,
    error: action.error,
    loading: false
  };
};

export const loadReducers: IReducers<IBlockState, IStartLoadingBlocks> = {
  [START_LOADING_BLOCKS]: startLoadingReducer,
  [DONE_LOADING_BLOCKS]: doneLoadingReducer,
  [STOP_LOADING_BLOCKS]: stopLoadingReducer,
  [ERROR_LOADING_BLOCKS]: errorLoadingReducer
};
