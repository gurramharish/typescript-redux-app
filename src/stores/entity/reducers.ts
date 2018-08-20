import { IReducer, IReducers } from "../types";
import { IEntity, IState } from "./states";

import { IDone, IError, IStart, IStop } from "./actions";
import { IActions, ILoader } from "./actions";

export function reducers<E extends IEntity, D, S extends IState<E>>(
  actions: IActions,
  mapper: (state: S, done: IDone<D>) => Partial<S>
): IReducers<S, ILoader<E, D>> {
  const start: IReducer<S, IStart<E>> = (state: S, action: IStart<E>): S => {
    return {
      ...state as any,
      error: null,
      loading: true
    };
  };

  const done: IReducer<S, IDone<D>> = (state: S, action: IDone<D>): S => {
    return {
      ...state as any,
      ...mapper(state, action) as any,
      loaded: true,
      loading: false
    };
  };

  const stop: IReducer<S, IStop<E>> = (state: S, action: IStop<E>): S => {
    return {
      ...state as any,
      loading: false
    };
  };

  const error: IReducer<S, IError<E>> = (state: S, action: IError<E>): S => {
    return {
      ...state as any,
      error: action.error,
      loading: false
    };
  };

  const { START, STOP, ERROR, DONE } = actions;

  return {
    [START]: start,
    [DONE]: done,
    [STOP]: stop,
    [ERROR]: error
  };
}
