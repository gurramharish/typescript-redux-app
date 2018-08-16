import { IBlock } from "../states";

import {
  EntityAction,
  getActions,
  IActions,
  IEntityAction,
  ILoader
} from "../../entity";

import { namespace } from "../namespace";

export const actions: IActions = getActions(namespace);

export const loadActions: IEntityAction<IBlock> = new EntityAction<IBlock>(
  actions
);

export type IBlockLoadAction = ILoader<IBlock>;
