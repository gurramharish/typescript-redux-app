import { Action } from "redux";
import { Observable } from "rxjs";

// tslint:disable-next-line:no-empty-interface
export interface IAction<T = any> extends Action<T> {}

export type IReducer<S, A extends IAction> = (state: S, action: A) => S;

export type IMutator<S, A extends IAction> = (state: S, action: A) => void;

export interface IReducers<S, A extends IAction> {
  [key: string]: IReducer<S, A>;
}

export type IEpic<I, O> = (actions$: Observable<I>) => Observable<O>;

export interface IEpics<I = {}, O = I> {
  readonly epics: Array<IEpic<I, O>>;
}

// tslint:disable-next-line:no-empty-interface
export interface IService {}

export interface IEnvironment {
  mode: "development" | "staging" | "production";
}
