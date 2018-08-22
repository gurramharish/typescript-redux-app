import { IReducers } from "../../entity/types";

import { IRouterAction } from "../actions";
import { IRouterState } from "../states";

import { routerReducer as routerReducerCore } from "react-router-redux";

import { changeReducers } from "./change";
import { pushPathReducers } from "./push";

const reducers: IReducers<IRouterState, IRouterAction> = {
  ...pushPathReducers,
  ...changeReducers
};

export function routerReducer(
  state: IRouterState = { location: null },
  action: IRouterAction
): IRouterState {
  const reducer = reducers[action.type];
  return routerReducerCore(reducer ? reducer(state, action) : state, action);
}
