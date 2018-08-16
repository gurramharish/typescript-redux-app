import { IReducers } from "../../types";
import { IChannel, IChannelState } from "../states";

import { ILoader, reducers } from "../../entity";

import { actions } from "../actions/load";

export const loadReducers: IReducers<
  IChannelState,
  ILoader<IChannel>
> = reducers<IChannel>(actions);
