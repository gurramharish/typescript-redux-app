import { IReducers } from "../../types";
import { IDashboard, IDashboardState } from "../states";

import { ILoader, reducers } from "../../entity";

import { actions } from "../actions/load";

export const loadReducers: IReducers<
  IDashboardState,
  ILoader<IDashboard, undefined>
> = reducers<
  IDashboard,
  undefined,
  IDashboardState
>(actions, (state, { data }) => ({}));
