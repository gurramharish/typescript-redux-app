import { injectable } from "inversify";

import { IReducerConfig, IReducers } from "../../common";

import { IRouterAction } from "../actions";
import { IRouterState } from "../states";

import { routerReducer as routerReducerCore } from "react-router-redux";

import { changeReducers } from "./change";
import { pushPathReducers } from "./push";

@injectable()
export default class ReducerConfig
  implements IReducerConfig<IRouterState, IRouterAction> {
  get reducers(): IReducers<IRouterState, IRouterAction> {
    const reducers: IReducers<IRouterState, IRouterAction> = {
      ...pushPathReducers,
      ...changeReducers
    };
    return {
      router: (
        state: IRouterState = { location: null },
        action: IRouterAction
      ): IRouterState => {
        const reducer = reducers[action.type];
        return routerReducerCore(
          reducer ? reducer(state, action) : state,
          action
        );
      }
    };
  }
}
