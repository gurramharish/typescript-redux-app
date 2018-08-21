import { IReducers } from "../../core/types";
import { ITransaction, ITransactionState } from "../states";

import { IEntityState, ILoader, reducers } from "../../entity";

import { actions } from "../actions/load";

export const loadReducers: IReducers<
  ITransactionState,
  ILoader<ITransaction, Array<IEntityState<ITransaction>>>
> = reducers<
  ITransaction,
  Array<IEntityState<ITransaction>>,
  ITransactionState
>(actions, (state, { data }) => {
  state.entities = data;
});
