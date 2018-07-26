import { combineReducers } from "redux";

import {
  INotificationAction,
  INotificationState,
  reducer as notification
} from "./notification";
import { IThemeAction, IThemeState, reducer as theme } from "./theme";

export type IStoreAction = INotificationAction | IThemeAction;

export interface IStoreState {
  theme: IThemeState;
  notification: INotificationState;
}

export const reducer = combineReducers<IStoreState, IStoreAction>({
  notification,
  theme
});
