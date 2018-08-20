import { IReducers } from "../../types";
import { IBlock, IBlockState } from "../states";

import { IEntityState, ILoader, reducers } from "../../entity";

import { actions } from "../actions/load";

export const loadReducers: IReducers<
  IBlockState,
  ILoader<IBlock, IBlock[]>
> = reducers<
  IBlock,
  Array<IEntityState<IBlock>>,
  IBlockState
>(actions, (state, { data }) => ({
  entities: data
}));
