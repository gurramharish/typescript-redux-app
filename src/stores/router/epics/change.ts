import { IRouterState } from "../states";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ofType, StateObservable } from "redux-observable";

import { ILocationChanged, locationChanged } from "../actions/change";

import { LOCATION_CHANGE, LocationChangeAction } from "react-router-redux";

export const changeEpic = (
  action$: Observable<LocationChangeAction>,
  state$: StateObservable<{ router: IRouterState }>
): Observable<ILocationChanged> =>
  action$.pipe(
    ofType(LOCATION_CHANGE),
    map(action => locationChanged(action.payload.pathname))
  );

export const changeEpics = [changeEpic];
