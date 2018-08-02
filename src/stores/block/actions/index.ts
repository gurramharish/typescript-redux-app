import { ILoadedBlocks, IStartLoadingBlocks, IStopLoadingBlocks } from "./load";

export { LOADED_BLOCKS, startLoadingBlocks, stopLoadingBlocks } from "./load";

export type IBlockAction =
  | IStartLoadingBlocks
  | ILoadedBlocks
  | IStopLoadingBlocks;
