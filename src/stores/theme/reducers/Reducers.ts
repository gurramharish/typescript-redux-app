import { injectable } from "inversify";

import { IReducerConfig, IReducers } from "../../entity";

import { IThemeAction } from "../actions";
import { IThemeState } from "../states";

import { changeReducers } from "./change";

@injectable()
export default class ReducerConfig
  implements IReducerConfig<IThemeState, IThemeAction> {
  get reducers(): IReducers<IThemeState, IThemeAction> {
    const reducers: IReducers<IThemeState, IThemeAction> = {
      ...changeReducers
    };
    return {
      theme: (
        state: IThemeState = { mode: "light" },
        action: IThemeAction
      ): IThemeState => {
        const reducer = reducers[action.type];
        return reducer ? reducer(state, action) : state;
      }
    };
  }
}
