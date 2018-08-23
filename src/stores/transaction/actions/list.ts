import { ITransaction } from "../states";

import {
  getActions,
  IActions,
  IEntityState,
  ILoadAction,
  ILoader,
  LoadAction
} from "../../common";

import { namespace } from "../namespace";

export const actions: IActions = getActions(`${namespace}/list`);

export const listLoadActions: ILoadAction<
  ITransaction,
  Array<IEntityState<ITransaction>>
> = new LoadAction<ITransaction, Array<IEntityState<ITransaction>>>(actions);

export type ITransactionLoadAction = ILoader<ITransaction, Array<IEntityState<ITransaction>>>;
