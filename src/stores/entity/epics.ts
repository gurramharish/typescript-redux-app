import { Observable, of } from "rxjs";
import { catchError, map, switchMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { IEntity } from "./states";

import { ILoadAction } from "./actions";
import { ILoader } from "./actions";

export function epics<E extends IEntity, D>(
  actions: ILoadAction<E, D>,
  loader: Observable<D>
): Array<(actions$: Observable<ILoader<E, D>>) => Observable<ILoader<E, D>>> {
  const epic = (action$: Observable<ILoader<E, D>>): Observable<ILoader<E, D>> =>
    action$.pipe(
      ofType(actions.START),
      switchMap(action =>
        loader.pipe(
          map((data) => actions.done(data)),
          takeUntil(action$.pipe(ofType(actions.STOP))),
          catchError(error => of(actions.error(error)))
        )
      )
    );

  return [epic];
}
