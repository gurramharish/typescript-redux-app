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

export const actions: IActions = getActions(`${namespace}/list`);

export const listLoadActions: ILoadAction<IBlock, Array<IEntityState<IBlock>>> = new LoadAction<IBlock, Array<IEntityState<IBlock>>>(
  actions
);

export type IBlockListLoadAction = ILoader<IBlock, Array<IEntityState<IBlock>>>;
