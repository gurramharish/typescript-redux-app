import { IReducers } from "../../common/types";
import { IChannel, IChannelState } from "../states";

import { IEntityState, ILoader, reducers } from "../../common";

import { actions } from "../actions/list";

export const listLoadReducers: IReducers<
  IChannelState,
  ILoader<IChannel, Array<IEntityState<IChannel>>>
> = reducers<
  IChannel,
  Array<IEntityState<IChannel>>,
  IChannelState
>(actions, (state, { data }) => {
  state.entities = data;
});
