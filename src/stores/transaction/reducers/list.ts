import { IReducers } from "../../common/types";
import { ITransaction, ITransactionState } from "../states";

import { IEntityState, ILoader, reducers } from "../../common";

import { actions } from "../actions/list";

export const listLoadReducers: IReducers<
  ITransactionState,
  ILoader<ITransaction, Array<IEntityState<ITransaction>>>
> = reducers<
  ITransaction,
  Array<IEntityState<ITransaction>>,
  ITransactionState
>(actions, (state, { data }) => {
  state.entities = data;
});
