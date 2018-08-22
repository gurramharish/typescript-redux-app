import { injectable } from "inversify";

import { IReducerConfig, IReducers } from "../../entity";

import { IChannelAction } from "../actions";
import { IChannelState } from "../states";

import { listLoadReducers } from "./list";

@injectable()
export default class ReducerConfig
  implements IReducerConfig<IChannelState, IChannelAction> {
  get reducers(): IReducers<IChannelState, IChannelAction> {
    const reducers: IReducers<IChannelState, IChannelAction> = {
      ...listLoadReducers
    };
    return {
      channel: (
        state: IChannelState = {
          entities: [],
          error: null,
          loaded: false,
          loading: false
        },
        action: IChannelAction
      ): IChannelState => {
        const reducer = reducers[action.type];
        return reducer ? reducer(state, action) : state;
      }
    };
  }
}
