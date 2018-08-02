import { IChannelAction, IChannelState } from "./channel";
import { INotificationAction, INotificationState } from "./notification";
import { IRouterAction, IRouterState } from "./router";
import { IThemeAction, IThemeState } from "./theme";

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
