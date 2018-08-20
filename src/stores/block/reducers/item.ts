import { IReducers } from "../../types";
import { IBlock, IBlockState } from "../states";

import { IEntityState, ILoader, reducers } from "../../entity";

import { actions } from "../actions/item";

export const itemLoadReducers: IReducers<
  IBlockState,
  ILoader<IBlock, IEntityState<IBlock>>
> = reducers<
  IBlock,
  IEntityState<IBlock>,
  IBlockState
>(actions, (state, { data }) => ({
  entities: [...state.entities, data]
}));
