import { interfaces } from "inversify";
import { DeepPartial } from "redux";

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

export type IConfigure = (container: interfaces.Container) => void;

export function getConfigs(): IConfigure[] {
  return [block, channel, dashboard, notification, router, theme, transaction];
}

export function getDefaultState(): DeepPartial<IStoreState> {
  return {
    notification: { count: 0 },
    router: { location: null },
    theme: { mode: "light" }
  };
}
