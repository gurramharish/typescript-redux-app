import {
  ILoadedChannels,
  IStartLoadingChannels,
  IStopLoadingChannels
} from "./load";

export { IStartLoadingChannels, IStopLoadingChannels } from "./load";
export { ILoadedChannels, LOADED_CHANNELS } from "./load";
export { startLoadingChannels, stopLoadingChannels } from "./load";

export type IChannelAction =
  | IStartLoadingChannels
  | ILoadedChannels
  | IStopLoadingChannels;
