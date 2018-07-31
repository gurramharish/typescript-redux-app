import { IRouterState } from "../states";

import { CALL_HISTORY_METHOD, RouterAction } from "react-router-redux";

import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { ofType, StateObservable } from "redux-observable";

import { ILocationChanged, locationChanged } from "./change";

export const callHistoryEpic = (
  action$: Observable<RouterAction>,
  state$: StateObservable<{ router: IRouterState }>
): Observable<ILocationChanged> =>
  action$.pipe(
    ofType(CALL_HISTORY_METHOD),
    // tslint:disable-next-line:no-console
    tap(action => console.log(action)),
    map(action => locationChanged(action.payload.args![0] || ""))
  );
