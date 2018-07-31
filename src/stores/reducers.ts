import { combineReducers } from "redux";

import {
  INotificationAction,
  INotificationState,
  notificationReducer
} from "./notification";
import { IRouterAction, IRouterState, routerReducer } from "./router";
import { IThemeAction, IThemeState, themeReducer } from "./theme";

export type IStoreAction = INotificationAction | IThemeAction | IRouterAction;

export interface IStoreState {
  theme: IThemeState;
  router: IRouterState;
  notification: INotificationState;
}

export const reducer = combineReducers<IStoreState, IStoreAction>({
  notification: notificationReducer,
  router: routerReducer,
  theme: themeReducer
});
