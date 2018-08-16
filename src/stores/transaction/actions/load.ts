import { ITransaction } from "../states";

import {
  EntityAction,
  getActions,
  IActions,
  IEntityAction,
  ILoader
} from "../../entity";

import { namespace } from "../namespace";

export const actions: IActions = getActions(namespace);

export const loadActions: IEntityAction<ITransaction> = new EntityAction<ITransaction>(
  actions
);

export type ITransactionLoadAction = ILoader<ITransaction>;
