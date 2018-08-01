import { combineReducers } from "redux";

import { channelReducer, IChannelAction, IChannelState } from "./channel";
import {
  INotificationAction,
  INotificationState,
  notificationReducer
} from "./notification";
import { IRouterAction, IRouterState, routerReducer } from "./router";
import { IThemeAction, IThemeState, themeReducer } from "./theme";

export type IStoreAction =
  | IChannelAction
  | INotificationAction
  | IThemeAction
  | IRouterAction;

export interface IStoreState {
  channel: IChannelState;
  theme: IThemeState;
  router: IRouterState;
  notification: INotificationState;
}

export const reducer = combineReducers<IStoreState, IStoreAction>({
  channel: channelReducer,
  notification: notificationReducer,
  router: routerReducer,
  theme: themeReducer
});
