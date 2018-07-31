import { IAction, IReducer, IReducers } from "../../types";
import { IRouterState } from "../states";

import {
  push,
  RouterAction
} from "react-router-redux";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ofType, StateObservable } from "redux-observable";

import { namespace } from "../namespace";

const PUSH_PATH = `${namespace}/PUSH_PATH`;

export type PushPath = typeof PUSH_PATH;

export interface IPushPath extends IAction {
  type: PushPath;
  path: string;
}

export function pushPath(path: string): IPushPath {
  return {
    path,
    type: PUSH_PATH
  };
}

const reducer: IReducer<IRouterState, IPushPath> = (
  state: IRouterState,
  action: IPushPath
): IRouterState => {
  return {
    ...state
  };
};

export const pushPathReducers: IReducers<IRouterState, IPushPath> = {
  [PUSH_PATH]: reducer
};

export const pushPathEpic = (
  action$: Observable<IPushPath>,
  state$: StateObservable<{ router: IRouterState }>
): Observable<RouterAction> =>
  action$.pipe(
    ofType(PUSH_PATH),
    map(action => push(action.path))
  );
