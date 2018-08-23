import { IRouterState } from "../states";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ofType, StateObservable } from "redux-observable";

import { ILocationChange, locationChange } from "../actions/change";

import { LOCATION_CHANGE, LocationChangeAction } from "react-router-redux";

export const changeEpic = (
  action$: Observable<LocationChangeAction>,
  state$: StateObservable<{ router: IRouterState }>
): Observable<ILocationChange> =>
  action$.pipe(
    ofType(LOCATION_CHANGE),
    map(action => locationChange(action.payload.pathname))
  );

export const changeEpics = [changeEpic];
