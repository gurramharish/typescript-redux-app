import { IReducers } from "../../common/types";
import { IBlock, IBlockState } from "../states";

import { IEntityState, ILoader, reducers } from "../../common";

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
