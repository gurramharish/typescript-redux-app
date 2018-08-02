import {
  ILoadedDashboard,
  IStartLoadingDashboard,
  IStopLoadingDashboard
} from "./load";

export { startLoadingDashboard, stopLoadingDashboard } from "./load";

export type IDashboardAction =
  | IStartLoadingDashboard
  | ILoadedDashboard
  | IStopLoadingDashboard;
