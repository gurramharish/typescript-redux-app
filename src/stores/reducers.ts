import { combineReducers } from "redux";

import {
  INotificationAction,
  INotificationState,
  notificationReducer
} from "./notification";
import { IThemeAction, IThemeState, themeReducer } from "./theme";

export type IStoreAction = INotificationAction | IThemeAction;

export interface IStoreState {
  theme: IThemeState;
  notification: INotificationState;
}

export const reducer = combineReducers<IStoreState, IStoreAction>({
  notification: notificationReducer,
  theme: themeReducer
});
