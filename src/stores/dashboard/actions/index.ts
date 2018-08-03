import {
  ILoadedDashboard,
  IStartLoadingDashboard,
  IStopLoadingDashboard
} from "./load";

export {
  LOADED_DASHBOARD,
  START_LOADING_DASHBOARD,
  STOP_LOADING_DASHBOARD
} from "./load";

export { startLoadingDashboard, stopLoadingDashboard } from "./load";

export { ILoadedDashboard, IStartLoadingDashboard, IStopLoadingDashboard };

export type IDashboardAction =
  | IStartLoadingDashboard
  | ILoadedDashboard
  | IStopLoadingDashboard;
