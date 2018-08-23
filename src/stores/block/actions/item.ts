import { IBlock } from "../states";

import {
  getActions,
  IActions,
  IEntityState,
  ILoadAction,
  ILoader,
  LoadAction
} from "../../common";

import { namespace } from "../namespace";

import { IBlockOptions } from "../states";

export const actions: IActions = getActions(`${namespace}/item`);

export const itemLoadActions: ILoadAction<IBlock, IEntityState<IBlock>, IBlockOptions> = new LoadAction<IBlock, IEntityState<IBlock>, IBlockOptions>(
  actions
);

export type IBlockItemLoadAction = ILoader<IBlock, IEntityState<IBlock>, IBlockOptions>;
