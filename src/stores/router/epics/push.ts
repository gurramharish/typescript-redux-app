import { IRouterState } from "../states";

import { RouterAction } from "react-router-redux";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ofType, StateObservable } from "redux-observable";

import { IPushPath, PUSH_PATH } from "../actions/push";

import { push } from "react-router-redux";

export const pushEpic = (
  action$: Observable<IPushPath>,
  state$: StateObservable<{ router: IRouterState }>
): Observable<RouterAction> =>
  action$.pipe(
    ofType(PUSH_PATH),
    map(action => push(action.path))
  );

export const pushEpics = [pushEpic];
