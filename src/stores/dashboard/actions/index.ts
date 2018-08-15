import {
  IDoneLoadingDashboard,
  IErrorLoadingDashboard,
  IStartLoadingDashboard,
  IStopLoadingDashboard
} from "./load";

export { startLoadingDashboard, stopLoadingDashboard } from "./load";

export {
  DONE_LOADING_DASHBOARD,
  ERROR_LOADING_DASHBOARD,
  START_LOADING_DASHBOARD,
  STOP_LOADING_DASHBOARD
} from "./load";

export {
  IDoneLoadingDashboard,
  IErrorLoadingDashboard,
  IStartLoadingDashboard,
  IStopLoadingDashboard
};

export type IDashboardAction =
  | IStartLoadingDashboard
  | IDoneLoadingDashboard
  | IStopLoadingDashboard
  | IErrorLoadingDashboard;
