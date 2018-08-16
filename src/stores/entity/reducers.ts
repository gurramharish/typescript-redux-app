import { IReducer, IReducers } from "../types";
import { IEntity, IEntityState } from "./states";

import { IDone, IError, IStart, IStop } from "./actions";
import { IActions, ILoader } from "./actions";

export function reducers<E extends IEntity>(
  actions: IActions
): IReducers<IEntityState<E>, ILoader<E>> {
  const start: IReducer<IEntityState<E>, IStart<E>> = (
    state: IEntityState<E>,
    action: IStart<E>
  ): IEntityState<E> => {
    return {
      ...state,
      error: null,
      loading: true
    };
  };

  const done: IReducer<IEntityState<E>, IDone<E>> = (
    state: IEntityState<E>,
    action: IDone<E>
  ): IEntityState<E> => {
    return {
      ...state,
      entities: action.entities,
      loaded: true,
      loading: false
    };
  };

  const stop: IReducer<IEntityState<E>, IStop<E>> = (
    state: IEntityState<E>,
    action: IStop<E>
  ): IEntityState<E> => {
    return {
      ...state,
      loading: false
    };
  };

  const error: IReducer<IEntityState<E>, IError<E>> = (
    state: IEntityState<E>,
    action: IError<E>
  ): IEntityState<E> => {
    return {
      ...state,
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
