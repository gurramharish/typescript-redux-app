import { IReducers } from "../../types";
import { IBlock, IBlockState } from "../states";

import { IEntityState, ILoader, reducers } from "../../entity";

import { actions } from "../actions/item";

export const itemLoadReducers: IReducers<
  IBlockState,
  ILoader<IBlock, IEntityState<IBlock>>
> = reducers<IBlock, IEntityState<IBlock>, IBlockState>(
  actions,
  (state, { data }) => {
    const found = state.entities.filter(
      entity => entity.entity.hash === data.entity.hash
    )[0];
    if (found) {
      Object.assign(found, data);
      return { entities: [...state.entities] };
    }
    return { entities: [...state.entities, data] };
  }
);
