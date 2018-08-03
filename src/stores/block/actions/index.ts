import { ILoadedBlocks, IStartLoadingBlocks, IStopLoadingBlocks } from "./load";

export { startLoadingBlocks, stopLoadingBlocks } from "./load";

export {
  LOADED_BLOCKS,
  START_LOADING_BLOCKS,
  STOP_LOADING_BLOCKS
} from "./load";

export { ILoadedBlocks, IStartLoadingBlocks, IStopLoadingBlocks };

export type IBlockAction =
  | IStartLoadingBlocks
  | ILoadedBlocks
  | IStopLoadingBlocks;
