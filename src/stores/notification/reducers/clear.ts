import { IReducer, IReducers } from "../../common/types";
import { INotificationState } from "../states";

import { IClearNotifications } from "../actions/clear";
import { CLEAR_NOTIFICATIONS } from "../actions/clear";

const reducer: IReducer<INotificationState, IClearNotifications> = (
  state: INotificationState,
  action: IClearNotifications
): INotificationState => {
  return {
    ...state,
    count: 0
  };
};

export const clearReducers: IReducers<
  INotificationState,
  IClearNotifications
> = {
  [CLEAR_NOTIFICATIONS]: reducer
};
