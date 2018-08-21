import { IReducers } from "../../core/types";
import { IBlock, IBlockState } from "../states";

import { IEntityState, ILoader, reducers } from "../../entity";

import { actions } from "../actions/list";

export const listLoadReducers: IReducers<
  IBlockState,
  ILoader<IBlock, Array<IEntityState<IBlock>>>
> = reducers<IBlock, Array<IEntityState<IBlock>>, IBlockState>(
  actions,
  (state, { data }) => {
    state.entities = data;
  }
);
