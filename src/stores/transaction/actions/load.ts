import { ITransaction } from "../states";

import {
  getActions,
  IActions,
  ILoadAction,
  ILoader,
  LoadAction
} from "../../entity";

import { namespace } from "../namespace";

export const actions: IActions = getActions(namespace);

export const loadActions: ILoadAction<
  ITransaction,
  ITransaction[]
> = new LoadAction<ITransaction, ITransaction[]>(actions);

export type ITransactionLoadAction = ILoader<ITransaction, ITransaction[]>;
