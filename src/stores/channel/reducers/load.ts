import { IReducers } from "../../types";
import { IChannel, IChannelState } from "../states";

import { ILoader, reducers } from "../../entity";

import { actions } from "../actions/load";

export const loadReducers: IReducers<
  IChannelState,
  ILoader<IChannel, IChannel[]>
> = reducers<
  IChannel,
  IChannel[],
  IChannelState
>(actions, (state, { data }) => ({ entities: data }));
