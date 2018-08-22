import { injectable } from "inversify";

import { IReducerConfig, IReducers } from "../../entity";

import { IBlockAction } from "../actions";
import { IBlockState } from "../states";

import { itemLoadReducers } from "./item";
import { listLoadReducers } from "./list";

@injectable()
export default class ReducerConfig
  implements IReducerConfig<IBlockState, IBlockAction> {
  get reducers(): IReducers<IBlockState, IBlockAction> {
    const reducers: IReducers<IBlockState, IBlockAction> = {
      ...itemLoadReducers,
      ...listLoadReducers
    };
    return {
      block: (
        state: IBlockState = {
          entities: [],
          error: null,
          loaded: false,
          loading: false
        },
        action: IBlockAction
      ): IBlockState => {
        const reducer = reducers[action.type];
        return reducer ? reducer(state, action) : state;
      }
    };
  }
}
