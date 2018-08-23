import produce from "immer";

import { IMutator, IReducer, IReducers } from "../common/types";
import { IEntity, IState } from "./states";

import { IDone, IError, IStart, IStop } from "./actions";
import { IActions, ILoader } from "./actions";

export function reducers<
  E extends IEntity,
  D,
  S extends IState<E>,
  T extends IState<E> = S,
  O = {}
>(
  actions: IActions,
  mutator: IMutator<T, IDone<D, O>>,
  extract: (state: S, action: ILoader<E, D, O>) => T = state => (state as any) as T
): IReducers<S, ILoader<E, D, O>> {
  const start: IMutator<T, IStart<E, O>> = (state: T, action: IStart<E, O>): void => {
    state.error = null;
    state.loading = true;
  };

  const done: IMutator<T, IDone<D, O>> = (state: T, action: IDone<D, O>): void => {
    mutator(state, action);
    state.loaded = true;
    state.loading = false;
  };

  const stop: IMutator<T, IStop<E, O>> = (state: T, action: IStop<E, O>): void => {
    state.loading = false;
  };

  const error: IMutator<T, IError<E, O>> = (state: T, action: IError<E, O>): void => {
    state.error = action.error;
    state.loading = false;
  };

  const { START, STOP, ERROR, DONE } = actions;

  const wrap = (
    mutate: IMutator<T, ILoader<E, D, O>>
  ): IReducer<S, ILoader<E, D, O>> => {
    return (state: S, action: any): S =>
      produce(state, draft => {
        mutate(extract(draft as S, action), action);
      });
  };

  return {
    [START]: wrap(start),
    [DONE]: wrap(done),
    [STOP]: wrap(stop),
    [ERROR]: wrap(error)
  };
}
