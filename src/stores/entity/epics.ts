import { Observable, of } from "rxjs";
import { catchError, map, switchMap, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { IEntity } from "./states";

import { ILoadAction, IStart } from "./actions";
import { ILoader } from "./actions";

export function epics<E extends IEntity, D, O = {}>(
  actions: ILoadAction<E, D, O>,
  loader: (action: IStart<E, O>) => Observable<D>
): Array<
  (actions$: Observable<ILoader<E, D, O>>) => Observable<ILoader<E, D, O>>
> {
  const epic = (
    action$: Observable<ILoader<E, D, O>>
  ): Observable<ILoader<E, D, O>> =>
    action$.pipe(
      ofType(actions.START),
      switchMap(action =>
        loader(action).pipe(
          map(data => actions.done(data)),
          takeUntil(action$.pipe(ofType(actions.STOP))),
          catchError(error => of(actions.error(error)))
        )
      )
    );

  return [epic];
}
