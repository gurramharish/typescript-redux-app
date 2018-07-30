import { Action } from "redux";

export type IReducer<S, A extends Action> = (state: S, action: A) => S;

export interface IReducers<S, A extends Action> {
  [key: string]: IReducer<S, A>;
}