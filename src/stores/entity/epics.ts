import { Observable, of } from "rxjs";
import { catchError, map, switchMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { IEntity } from "./states";

import { IEntityAction } from "./actions";
import { ILoader } from "./actions";

export function epics<E extends IEntity>(
  actions: IEntityAction<E>,
  loader: Observable<E[]>
): Array<(actions$: Observable<ILoader<E>>) => Observable<ILoader<E>>> {
  const epic = (action$: Observable<ILoader<E>>): Observable<ILoader<E>> =>
    action$.pipe(
      ofType(actions.START),
      switchMap(action =>
        loader.pipe(
          map((data: E[]) => actions.done(data)),
          takeUntil(action$.pipe(ofType(actions.STOP))),
          catchError(error => of(actions.error(error)))
        )
      )
    );

  return [epic];
}
