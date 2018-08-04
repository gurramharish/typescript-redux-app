import { IAction } from "../../types";

import { namespace } from "../namespace";

export const START_LOADING_DASHBOARD = `${namespace}/START_LOADING_DASHBOARD`;

export const LOADED_DASHBOARD = `${namespace}/LOADED_DASHBOARD`;

export const STOP_LOADING_DASHBOARD = `${namespace}/STOP_LOADING_DASHBOARD`;

export type StartLoadingDashboard = typeof START_LOADING_DASHBOARD;

export interface IStartLoadingDashboard extends IAction {
  type: StartLoadingDashboard;
}

export function startLoadingDashboard(): IStartLoadingDashboard {
  return {
    type: START_LOADING_DASHBOARD
  };
}

export type LoadedDashboard = typeof LOADED_DASHBOARD;

export interface ILoadedDashboard extends IAction {
  type: StartLoadingDashboard;
}

export function loadedDashboard(): ILoadedDashboard {
  return {
    type: LOADED_DASHBOARD
  };
}

export type StopLoadingDashboard = typeof STOP_LOADING_DASHBOARD;

export interface IStopLoadingDashboard extends IAction {
  type: StopLoadingDashboard;
}

export function stopLoadingDashboard(): IStopLoadingDashboard {
  return {
    type: STOP_LOADING_DASHBOARD
  };
}
