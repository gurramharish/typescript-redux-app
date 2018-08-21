import { IRouterState } from "../states";

import { CALL_HISTORY_METHOD, RouterAction } from "react-router-redux";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ofType, StateObservable } from "redux-observable";

import { ILocationChanged, locationChanged } from "../actions/change";

export const callHistoryEpic = (
  action$: Observable<RouterAction>,
  state$: StateObservable<{ router: IRouterState }>
): Observable<ILocationChanged> =>
  action$.pipe(
    ofType(CALL_HISTORY_METHOD),
    map(action => locationChanged(action.payload.args![0] || ""))
  );

export const callEpics = [callHistoryEpic];
