import { IReducers } from "../../types";
import { IBlock, IBlockState } from "../states";

import { ILoader, reducers } from "../../entity";

import { actions } from "../actions/load";

export const loadReducers: IReducers<IBlockState, ILoader<IBlock>> = reducers<
  IBlock
>(actions);