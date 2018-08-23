import { IReducers } from "../../common/types";
import { IBlock, IBlockOptions, IBlockState } from "../states";

import { IEntityState, ILoader, reducers } from "../../common";

import { actions } from "../actions/item";

export const itemLoadReducers: IReducers<
  IBlockState,
  ILoader<IBlock, IEntityState<IBlock>, IBlockOptions>
> = reducers<
  IBlock,
  IEntityState<IBlock>,
  IBlockState,
  IEntityState<IBlock>,
  IBlockOptions
>(
  actions,
  (state, { data }) => {
    Object.assign(state, data);
  },
  (state, action) => {
    const hash = action.options!.hash;
    let block = state.entities.filter(entity => entity.entity.hash === hash)[0];
    if (!block) {
      block = {
        entity: { hash } as any,
        error: null,
        loaded: false,
        loading: false
      };
      state.entities.push(block);
    }
    return block;
  }
);
