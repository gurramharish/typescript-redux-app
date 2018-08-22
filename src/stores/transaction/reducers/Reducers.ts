import { injectable } from "inversify";

import { IReducerConfig, IReducers } from "../../entity";

import { ITransactionAction } from "../actions";
import { ITransactionState } from "../states";

import { listLoadReducers } from "./list";

@injectable()
export default class ReducerConfig
  implements IReducerConfig<ITransactionState, ITransactionAction> {
  get reducers(): IReducers<ITransactionState, ITransactionAction> {
    const reducers: IReducers<ITransactionState, ITransactionAction> = {
      ...listLoadReducers
    };
    return {
      transaction: (
        state: ITransactionState = {
          entities: [],
          error: null,
          loaded: false,
          loading: false
        },
        action: ITransactionAction
      ): ITransactionState => {
        const reducer = reducers[action.type];
        return reducer ? reducer(state, action) : state;
      }
    };
  }
}
