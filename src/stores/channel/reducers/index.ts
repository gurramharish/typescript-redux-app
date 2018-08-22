import { IReducers } from "../../entity/types";

import { IChannelAction } from "../actions";
import { IChannelState } from "../states";

import { listLoadReducers } from "./list";

const reducers: IReducers<IChannelState, IChannelAction> = {
  ...listLoadReducers
};

export function channelReducer(
  state: IChannelState = {
    entities: [],
    error: null,
    loaded: false,
    loading: false
  },
  action: IChannelAction
): IChannelState {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}
