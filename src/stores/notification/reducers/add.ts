import { IReducer, IReducers } from "../../entity/types";
import { INotificationState } from "../states";

import { IAddNotifications } from "../actions/add";
import { ADD_NOTIFICATIONS } from "../actions/add";

const reducer: IReducer<INotificationState, IAddNotifications> = (
  state: INotificationState,
  action: IAddNotifications
): INotificationState => {
  return {
    ...state,
    count: state.count + action.notifications
  };
};

export const addReducers: IReducers<INotificationState, IAddNotifications> = {
  [ADD_NOTIFICATIONS]: reducer
};
