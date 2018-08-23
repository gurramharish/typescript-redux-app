import { IReducers } from "../../common/types";
import { IDashboard, IDashboardState } from "../states";

import { ILoader, reducers } from "../../common";

import { actions } from "../actions/load";

export const loadReducers: IReducers<
  IDashboardState,
  ILoader<IDashboard, undefined>
> = reducers<
  IDashboard,
  undefined,
  IDashboardState
>(actions, (state, { data }) => ({}));
