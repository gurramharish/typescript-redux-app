import { interfaces } from "inversify";

import block, { IBlockAction, IBlockState } from "./block";
import channel, { IChannelAction, IChannelState } from "./channel";
import dashboard, { IDashboardAction, IDashboardState } from "./dashboard";
import notification, {
  INotificationAction,
  INotificationState
} from "./notification";
import router, { IRouterAction, IRouterState } from "./router";
import theme, { IThemeAction, IThemeState } from "./theme";
import transaction, {
  ITransactionAction,
  ITransactionState
} from "./transaction";

export type IConfigure = (container: interfaces.Container) => void;

export const configs: IConfigure[] = [
  block,
  channel,
  dashboard,
  notification,
  router,
  theme,
  transaction
];

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
