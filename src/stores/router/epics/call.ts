import { IRouterState } from "../states";

import { CALL_HISTORY_METHOD, RouterAction } from "react-router-redux";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ofType, StateObservable } from "redux-observable";

import { ILocationChange, locationChange } from "../actions/change";

export const callHistoryEpic = (
  action$: Observable<RouterAction>,
  state$: StateObservable<{ router: IRouterState }>
): Observable<ILocationChange> =>
  action$.pipe(
    ofType(CALL_HISTORY_METHOD),
    map(action => locationChange(action.payload.args![0] || ""))
  );

export const callEpics = [callHistoryEpic];
