import { IReducers } from "../../entity/types";

import { ITransactionAction } from "../actions";
import { ITransactionState } from "../states";

import { listLoadReducers } from "./list";

const reducers: IReducers<ITransactionState, ITransactionAction> = {
  ...listLoadReducers
};

export function transactionReducer(
  state: ITransactionState = {
    entities: [],
    error: null,
    loaded: false,
    loading: false
  },
  action: ITransactionAction
): ITransactionState {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}
