import {
  IDoneLoadingChannels,
  IErrorLoadingChannels,
  IStartLoadingChannels,
  IStopLoadingChannels
} from "./load";

export { startLoadingChannels, stopLoadingChannels } from "./load";

export {
  DONE_LOADING_CHANNELS,
  ERROR_LOADING_CHANNELS,
  START_LOADING_CHANNELS,
  STOP_LOADING_CHANNELS
} from "./load";

export {
  IDoneLoadingChannels,
  IErrorLoadingChannels,
  IStartLoadingChannels,
  IStopLoadingChannels
};

export type IChannelAction =
  | IStartLoadingChannels
  | IDoneLoadingChannels
  | IStopLoadingChannels
  | IErrorLoadingChannels;
