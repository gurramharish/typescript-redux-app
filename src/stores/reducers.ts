import { combineReducers } from "redux";

import { IStoreAction, IStoreState } from "./states";

import { channelReducer } from "./channel";
import {
  notificationReducer
} from "./notification";
import {  routerReducer } from "./router";
import {  themeReducer } from "./theme";
import {  transactionReducer } from "./transaction";

export const reducer = combineReducers<IStoreState, IStoreAction>({
  channel: channelReducer,
  notification: notificationReducer,
  router: routerReducer,
  theme: themeReducer,
  transaction: transactionReducer
});
