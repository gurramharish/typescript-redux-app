import { IAction, IReducer, IReducers } from "../../types";
import { IRouterState } from "../states";

import { LOCATION_CHANGE, LocationChangeAction } from "react-router-redux";

import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { ofType, StateObservable } from "redux-observable";

import { namespace } from "../namespace";

const LOCATION_CHANGED = `${namespace}/LOCATION_CHANGED`;

export type LocationChanged = typeof LOCATION_CHANGED;

export interface ILocationChanged extends IAction {
  type: LocationChanged;
  path: string;
}

export function locationChanged(path: string): ILocationChanged {
  return {
    path,
    type: LOCATION_CHANGED
  };
}

const reducer: IReducer<IRouterState, ILocationChanged> = (
  state: IRouterState,
  action: ILocationChanged
): IRouterState => {
  return {
    ...state
  };
};

export const locationChangedReducers: IReducers<
  IRouterState,
  ILocationChanged
> = {
  [LOCATION_CHANGED]: reducer
};

export const locationChangeEpic = (
  action$: Observable<LocationChangeAction>,
  state$: StateObservable<{ router: IRouterState }>
): Observable<ILocationChanged> =>
  action$.pipe(
    ofType(LOCATION_CHANGE),
    // tslint:disable-next-line:no-console
    tap(action => console.log(action)),
    map(action => locationChanged(action.payload.pathname))
  );
