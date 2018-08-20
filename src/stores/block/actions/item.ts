import { IBlock } from "../states";

import {
  getActions,
  IActions,
  IEntityState,
  ILoadAction,
  ILoader,
  LoadAction
} from "../../entity";

import { namespace } from "../namespace";

export const actions: IActions = getActions(`${namespace}/item`);

export const itemLoadActions: ILoadAction<IBlock, IEntityState<IBlock>> = new LoadAction<IBlock, IEntityState<IBlock>>(
  actions
);

export type IBlockItemLoadAction = ILoader<IBlock, IEntityState<IBlock>>;
