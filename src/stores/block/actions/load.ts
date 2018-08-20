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

export const actions: IActions = getActions(namespace);

export const loadActions: ILoadAction<IBlock, Array<IEntityState<IBlock>>> = new LoadAction<IBlock, Array<IEntityState<IBlock>>>(
  actions
);

export type IBlockLoadAction = ILoader<IBlock, Array<IEntityState<IBlock>>>;
