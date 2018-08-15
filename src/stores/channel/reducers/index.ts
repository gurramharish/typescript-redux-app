import { IReducers } from "../../types";

import { IChannelAction } from "../actions";
import { IChannelState } from "../states";

import { loadReducers } from "./load";

const reducers: IReducers<IChannelState, IChannelAction> = {
  ...loadReducers
};

export function channelReducer(
  state: IChannelState = {
    channels: [],
    error: null,
    loaded: false,
    loading: false
  },
  action: IChannelAction
): IChannelState {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}
