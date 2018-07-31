import { IReducers } from "../types";

import { IRouterAction } from "./actions";
import { IRouterState } from "./states";

import { routerReducer as routerReducerCore } from "react-router-redux";

import { pushPathReducers } from "./actions/push";

const reducers: IReducers<IRouterState, IRouterAction> = {
  ...pushPathReducers
};

export function routerReducer(
  state: IRouterState = { location: null },
  action: IRouterAction
): IRouterState {
  const reducer = reducers[action.type];
  return routerReducerCore(reducer ? reducer(state, action) : state, action);
}
