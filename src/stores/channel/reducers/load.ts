import { IReducer, IReducers } from "../../types";
import { IChannelState } from "../states";

import {
  ILoadedChannels,
  IStartLoadingChannels,
  IStopLoadingChannels
} from "../actions/load";

import {
  LOADED_CHANNELS,
  START_LOADING_CHANNELS,
  STOP_LOADING_CHANNELS
} from "../actions/load";

const startLoadingReducer: IReducer<IChannelState, IStartLoadingChannels> = (
  state: IChannelState,
  action: IStartLoadingChannels
): IChannelState => {
  return {
    ...state,
    loading: true
  };
};

const loadedReducer: IReducer<IChannelState, ILoadedChannels> = (
  state: IChannelState,
  action: ILoadedChannels
): IChannelState => {
  return {
    ...state,
    channels: action.channels,
    loading: false
  };
};

const stopLoadingReducer: IReducer<IChannelState, IStopLoadingChannels> = (
  state: IChannelState,
  action: IStopLoadingChannels
): IChannelState => {
  return {
    ...state,
    loading: false
  };
};

export const loadReducers: IReducers<IChannelState, IStartLoadingChannels> = {
  [START_LOADING_CHANNELS]: startLoadingReducer,
  [LOADED_CHANNELS]: loadedReducer,
  [STOP_LOADING_CHANNELS]: stopLoadingReducer
};
