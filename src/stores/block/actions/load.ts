import { IBlock } from "../states";

import {
  getActions,
  IActions,
  ILoadAction,
  ILoader,
  LoadAction
} from "../../entity";

import { namespace } from "../namespace";

export const actions: IActions = getActions(namespace);

export const loadActions: ILoadAction<IBlock, IBlock[]> = new LoadAction<IBlock, IBlock[]>(
  actions
);

export type IBlockLoadAction = ILoader<IBlock, IBlock[]>;
