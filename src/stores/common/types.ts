import { Action } from "redux";
import { Observable } from "rxjs";

// tslint:disable-next-line:no-empty-interface
export interface IService {}

export class Injects {
  public static Environment = Symbol("environment");
  public static Epics = Symbol("epics");
  public static Reducers = Symbol("reducers");
  public static Service = Symbol("service");
}

export interface IEnvironment {
  mode: "development" | "staging" | "production";
}

// tslint:disable-next-line:no-empty-interface
export interface IAction<T = any> extends Action<T> {}

export type IReducer<S, A extends IAction> = (state: S, action: A) => S;

export type IMutator<S, A extends IAction> = (state: S, action: A) => void;

export interface IReducers<S, A extends IAction> {
  [key: string]: IReducer<S, A>;
}

export interface IReducerConfig<S = {}, A extends IAction = any> {
  readonly reducers: IReducers<S, A>;
}

export type IEpic<I, O> = (actions$: Observable<I>) => Observable<O>;

export interface IEpicConfig<I = {}, O = I> {
  readonly epics: Array<IEpic<I, O>>;
}
