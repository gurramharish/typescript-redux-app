import { IReducer, IReducers } from "../../common/types";
import { IRouterState } from "../states";

import { ILocationChange } from "../actions/change";

import { LOCATION_CHANGE } from "../actions/change";

const reducer: IReducer<IRouterState, ILocationChange> = (
  state: IRouterState,
  action: ILocationChange
): IRouterState => {
  return {
    ...state
  };
};

export const changeReducers: IReducers<IRouterState, ILocationChange> = {
  [LOCATION_CHANGE]: reducer
};
