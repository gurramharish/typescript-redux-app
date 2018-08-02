import { IReducers } from "../types";

import { IDashboardAction } from "./actions";
import { IDashboardState } from "./states";

import { loadReducers } from "./actions/load";

const reducers: IReducers<IDashboardState, IDashboardAction> = {
  ...loadReducers
};

export function dashboardReducer(
  state: IDashboardState = { loading: false },
  action: IDashboardAction
): IDashboardState {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}