import { IReducers } from "../../types";
import { IDashboard, IDashboardState } from "../states";

import { ILoader, reducers } from "../../entity";

import { actions } from "../actions/load";

export const loadReducers: IReducers<
  IDashboardState,
  ILoader<IDashboard>
> = reducers<IDashboard>(actions);
