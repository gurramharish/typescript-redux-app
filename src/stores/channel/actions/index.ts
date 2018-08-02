import {
  ILoadedChannels,
  IStartLoadingChannels,
  IStopLoadingChannels
} from "./load";

export { startLoadingChannels, stopLoadingChannels } from "./load";

export type IChannelAction =
  | IStartLoadingChannels
  | ILoadedChannels
  | IStopLoadingChannels;
