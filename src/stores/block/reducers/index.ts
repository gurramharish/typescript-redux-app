import { IReducers } from "../../entity/types";

import { IBlockAction } from "../actions";
import { IBlockState } from "../states";

import { itemLoadReducers } from "./item";
import { listLoadReducers } from "./list";

const reducers: IReducers<IBlockState, IBlockAction> = {
  ...itemLoadReducers,
  ...listLoadReducers
};

export function blockReducer(
  state: IBlockState = {
    entities: [],
    error: null,
    loaded: false,
    loading: false
  },
  action: IBlockAction
): IBlockState {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}
