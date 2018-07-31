import { combineReducers } from "redux";

import { routerReducer, RouterState } from "react-router-redux";

import {
  INotificationAction,
  INotificationState,
  notificationReducer
} from "./notification";
import { IThemeAction, IThemeState, themeReducer } from "./theme";

export type IStoreAction = INotificationAction | IThemeAction;

export interface IStoreState {
  theme: IThemeState;
  router: RouterState;
  notification: INotificationState;
}

export const reducer = combineReducers<IStoreState, IStoreAction>({
  notification: notificationReducer,
  router: routerReducer,
  theme: themeReducer
});
