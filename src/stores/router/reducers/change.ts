import { IReducer, IReducers } from "../../entity/types";
import { IRouterState } from "../states";

import { ILocationChanged } from "../actions/change";

import { LOCATION_CHANGED } from "../actions/change";

const reducer: IReducer<IRouterState, ILocationChanged> = (
  state: IRouterState,
  action: ILocationChanged
): IRouterState => {
  return {
    ...state
  };
};

export const changeReducers: IReducers<IRouterState, ILocationChanged> = {
  [LOCATION_CHANGED]: reducer
};
