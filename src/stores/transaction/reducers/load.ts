import { IReducers } from "../../types";
import { ITransaction, ITransactionState } from "../states";

import { ILoader, reducers } from "../../entity";

import { actions } from "../actions/load";

export const loadReducers: IReducers<
  ITransactionState,
  ILoader<ITransaction>
> = reducers<ITransaction>(actions);
