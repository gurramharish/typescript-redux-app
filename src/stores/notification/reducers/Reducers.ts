import { injectable } from "inversify";

import { IReducerConfig, IReducers } from "../../common";

import { INotificationAction } from "../actions";
import { INotificationState } from "../states";

import { addReducers } from "./add";
import { clearReducers } from "./clear";
import { incrementReducers } from "./increment";
import { resetReducers } from "./reset";

@injectable()
export default class ReducerConfig
  implements IReducerConfig<INotificationState, INotificationAction> {
  get reducers(): IReducers<INotificationState, INotificationAction> {
    const reducers: IReducers<INotificationState, INotificationAction> = {
      ...addReducers,
      ...clearReducers,
      ...incrementReducers,
      ...resetReducers
    };
    return {
      notification: (
        state: INotificationState = {
          count: 0,
          increment: 1,
          incrementing: false,
          reseting: false
        },
        action: INotificationAction
      ): INotificationState => {
        const reducer = reducers[action.type];
        return reducer ? reducer(state, action) : state;
      }
    };
  }
}
