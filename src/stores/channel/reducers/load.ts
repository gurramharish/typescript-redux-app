import { IReducer, IReducers } from "../../types";
import { IChannelState } from "../states";

import {
  IDoneLoadingChannels,
  IErrorLoadingChannels,
  IStartLoadingChannels,
  IStopLoadingChannels
} from "../actions/load";

import {
  DONE_LOADING_CHANNELS,
  ERROR_LOADING_CHANNELS,
  START_LOADING_CHANNELS,
  STOP_LOADING_CHANNELS
} from "../actions/load";

const startLoadingReducer: IReducer<IChannelState, IStartLoadingChannels> = (
  state: IChannelState,
  action: IStartLoadingChannels
): IChannelState => {
  return {
    ...state,
    error: null,
    loading: true
  };
};

const doneLoadingReducer: IReducer<IChannelState, IDoneLoadingChannels> = (
  state: IChannelState,
  action: IDoneLoadingChannels
): IChannelState => {
  return {
    ...state,
    channels: action.channels,
    loaded: true,
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

const errorLoadingReducer: IReducer<IChannelState, IErrorLoadingChannels> = (
  state: IChannelState,
  action: IErrorLoadingChannels
): IChannelState => {
  return {
    ...state,
    error: action.error,
    loading: false
  };
};

export const loadReducers: IReducers<IChannelState, IStartLoadingChannels> = {
  [START_LOADING_CHANNELS]: startLoadingReducer,
  [DONE_LOADING_CHANNELS]: doneLoadingReducer,
  [STOP_LOADING_CHANNELS]: stopLoadingReducer,
  [ERROR_LOADING_CHANNELS]: errorLoadingReducer
};
