import { IReducers } from "../../types";
import { IChannel, IChannelState } from "../states";

import { IEntityState, ILoader, reducers } from "../../entity";

import { actions } from "../actions/load";

export const loadReducers: IReducers<
  IChannelState,
  ILoader<IChannel, Array<IEntityState<IChannel>>>
> = reducers<
  IChannel,
  Array<IEntityState<IChannel>>,
  IChannelState
>(actions, (state, { data }) => ({ entities: data }));
