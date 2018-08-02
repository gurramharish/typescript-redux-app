import { IChannelAction, IChannelState } from "./channel";
import { INotificationAction, INotificationState } from "./notification";
import { IRouterAction, IRouterState } from "./router";
import { IThemeAction, IThemeState } from "./theme";
import { ITransactionAction, ITransactionState } from "./transaction";

export type IStoreAction =
  | IChannelAction
  | INotificationAction
  | IThemeAction
  | IRouterAction
  | ITransactionAction;

export interface IStoreState {
  channel: IChannelState;
  notification: INotificationState;
  router: IRouterState;
  theme: IThemeState;
  transaction: ITransactionState;
}
