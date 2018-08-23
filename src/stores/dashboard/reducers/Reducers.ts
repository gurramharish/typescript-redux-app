import { injectable } from "inversify";

import { IReducerConfig, IReducers } from "../../common";

import { IDashboardAction } from "../actions";
import { IDashboardState } from "../states";

import { loadReducers } from "./load";

@injectable()
export default class ReducerConfig
  implements IReducerConfig<IDashboardState, IDashboardAction> {
  get reducers(): IReducers<IDashboardState, IDashboardAction> {
    const reducers: IReducers<IDashboardState, IDashboardAction> = {
      ...loadReducers
    };
    return {
      dashboard: (
        state: IDashboardState = {
          error: null,
          loaded: false,
          loading: false
        },
        action: IDashboardAction
      ): IDashboardState => {
        const reducer = reducers[action.type];
        return reducer ? reducer(state, action) : state;
      }
    };
  }
}
