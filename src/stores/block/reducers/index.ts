import { IReducers } from "../../types";

import { IBlockAction } from "../actions";
import { IBlockState } from "../states";

import { loadReducers } from "./load";

const reducers: IReducers<IBlockState, IBlockAction> = {
  ...loadReducers
};

export function blockReducer(
  state: IBlockState = {
    blocks: [],
    error: null,
    loaded: false,
    loading: false
  },
  action: IBlockAction
): IBlockState {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}
