import { combineReducers } from "redux";

import { IStoreAction, IStoreState } from "./states";

import { blockReducer } from "./block";
import { channelReducer } from "./channel";
import { dashboardReducer } from "./dashboard";
import { notificationReducer } from "./notification";
import { routerReducer } from "./router";
import { themeReducer } from "./theme";
import { transactionReducer } from "./transaction";

export const reducer = combineReducers<IStoreState, IStoreAction>({
  block: blockReducer,
  channel: channelReducer,
  dashboard: dashboardReducer,
  notification: notificationReducer,
  router: routerReducer,
  theme: themeReducer,
  transaction: transactionReducer
});
