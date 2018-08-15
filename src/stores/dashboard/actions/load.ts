import { IAction } from "../../types";

import { namespace } from "../namespace";

export const START_LOADING_DASHBOARD = `${namespace}/START_LOADING_DASHBOARD`;

export const DONE_LOADING_DASHBOARD = `${namespace}/DONE_LOADING_DASHBOARD`;

export const STOP_LOADING_DASHBOARD = `${namespace}/STOP_LOADING_DASHBOARD`;

export const ERROR_LOADING_DASHBOARD = `${namespace}/ERROR_LOADING_DASHBOARD`;

export type StartLoadingDashboard = typeof START_LOADING_DASHBOARD;

export interface IStartLoadingDashboard extends IAction {
  type: StartLoadingDashboard;
}

export function startLoadingDashboard(): IStartLoadingDashboard {
  return {
    type: START_LOADING_DASHBOARD
  };
}

export type DoneLoadingDashboard = typeof DONE_LOADING_DASHBOARD;

export interface IDoneLoadingDashboard extends IAction {
  type: DoneLoadingDashboard;
}

export function doneLoadingDashboard(): IDoneLoadingDashboard {
  return {
    type: DONE_LOADING_DASHBOARD
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


export type ErrorLoadingDashboard = typeof ERROR_LOADING_DASHBOARD;

export interface IErrorLoadingDashboard extends IAction {
  error: string;
  type: ErrorLoadingDashboard;
}

export function errorLoadingDashboard(error: string): IErrorLoadingDashboard {
  return {
    error,
    type: ERROR_LOADING_DASHBOARD
  };
}
