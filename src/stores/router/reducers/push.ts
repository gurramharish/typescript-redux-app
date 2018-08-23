import { IReducer, IReducers } from "../../common/types";
import { IRouterState } from "../states";

import { IPushPath } from "../actions/push";

import { PUSH_PATH } from "../actions/push";

const reducer: IReducer<IRouterState, IPushPath> = (
  state: IRouterState,
  action: IPushPath
): IRouterState => {
  return {
    ...state
  };
};

export const pushPathReducers: IReducers<IRouterState, IPushPath> = {
  [PUSH_PATH]: reducer
};
