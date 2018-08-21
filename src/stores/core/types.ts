import { Action } from "redux";

// tslint:disable-next-line:no-empty-interface
export interface IAction<T = any> extends Action<T> {}

export type IReducer<S, A extends IAction> = (state: S, action: A) => S;

export type IMutator<S, A extends IAction> = (state: S, action: A) => void;

export interface IReducers<S, A extends IAction> {
  [key: string]: IReducer<S, A>;
}
