import { IReducer, IReducers } from "../../types";
import { IDashboardState } from "../states";

import {
  IDoneLoadingDashboard,
  IStartLoadingDashboard,
  IStopLoadingDashboard
} from "../actions/load";

import {
  DONE_LOADING_DASHBOARD,
  START_LOADING_DASHBOARD,
  STOP_LOADING_DASHBOARD
} from "../actions/load";

const startLoadingReducer: IReducer<IDashboardState, IStartLoadingDashboard> = (
  state: IDashboardState,
  action: IStartLoadingDashboard
): IDashboardState => {
  return {
    ...state,
    loading: true
  };
};

const loadedReducer: IReducer<IDashboardState, IDoneLoadingDashboard> = (
  state: IDashboardState,
  action: IDoneLoadingDashboard
): IDashboardState => {
  return {
    ...state,
    loading: false
  };
};

const stopLoadingReducer: IReducer<IDashboardState, IStopLoadingDashboard> = (
  state: IDashboardState,
  action: IStopLoadingDashboard
): IDashboardState => {
  return {
    ...state,
    loading: false
  };
};

export const loadReducers: IReducers<
  IDashboardState,
  IStartLoadingDashboard
> = {
  [START_LOADING_DASHBOARD]: startLoadingReducer,
  [DONE_LOADING_DASHBOARD]: loadedReducer,
  [STOP_LOADING_DASHBOARD]: stopLoadingReducer
};
