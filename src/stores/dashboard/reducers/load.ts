import { IReducer, IReducers } from "../../types";
import { IDashboardState } from "../states";

import {
  ILoadedDashboard,
  IStartLoadingDashboard,
  IStopLoadingDashboard
} from "../actions/load";

import {
  LOADED_DASHBOARD,
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

const loadedReducer: IReducer<IDashboardState, ILoadedDashboard> = (
  state: IDashboardState,
  action: ILoadedDashboard
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
  [LOADED_DASHBOARD]: loadedReducer,
  [STOP_LOADING_DASHBOARD]: stopLoadingReducer
};
