import {
  ILoadedBlocks,
  IStartLoadingBlocks,
  IStopLoadingBlocks
} from "./load";

export { startLoadingBlocks, stopLoadingBlocks } from "./load";

export type IBlockAction =
  | IStartLoadingBlocks
  | ILoadedBlocks
  | IStopLoadingBlocks;
