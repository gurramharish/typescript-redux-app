import { IBlockAction, IBlockState } from "./block";
import { IChannelAction, IChannelState } from "./channel";
import { IDashboardAction, IDashboardState } from "./dashboard";
import { INotificationAction, INotificationState } from "./notification";
import { IRouterAction, IRouterState } from "./router";
import { IThemeAction, IThemeState } from "./theme";
import { ITransactionAction, ITransactionState } from "./transaction";

export type IStoreAction =
  | IBlockAction
  | IChannelAction
  | IDashboardAction
  | INotificationAction
  | IThemeAction
  | IRouterAction
  | ITransactionAction;

export interface IStoreState {
  block: IBlockState;
  channel: IChannelState;
  dashboard: IDashboardState;
  notification: INotificationState;
  router: IRouterState;
  theme: IThemeState;
  transaction: ITransactionState;
}
