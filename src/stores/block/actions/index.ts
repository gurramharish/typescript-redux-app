import {
  IDoneLoadingBlocks,
  IErrorLoadingBlocks,
  IStartLoadingBlocks,
  IStopLoadingBlocks
} from "./load";

export { startLoadingBlocks, stopLoadingBlocks } from "./load";

export {
  DONE_LOADING_BLOCKS,
  ERROR_LOADING_BLOCKS,
  START_LOADING_BLOCKS,
  STOP_LOADING_BLOCKS
} from "./load";

export {
  IDoneLoadingBlocks,
  IErrorLoadingBlocks,
  IStartLoadingBlocks,
  IStopLoadingBlocks
};

export type IBlockAction =
  | IStartLoadingBlocks
  | IDoneLoadingBlocks
  | IStopLoadingBlocks
  | IErrorLoadingBlocks;
