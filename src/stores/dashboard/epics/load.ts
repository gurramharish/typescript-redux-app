import { concat, Observable, of, zip } from "rxjs";
import { mapTo, switchMap, take, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { IBlockAction } from "../../block/actions";
import { blockActions } from "../../block/actions";

import { IChannelAction } from "../../channel/actions";
import { channelActions } from "../../channel/actions";

import { ITransactionAction } from "../../transaction/actions";
import { transactionActions } from "../../transaction/actions";

import { IDashboardAction } from "../actions";

import { loadActions } from "../actions/load";

export const startLoadingEpic = (
  action$: Observable<IDashboardAction>
): Observable<
  IBlockAction | IChannelAction | ITransactionAction | IDashboardAction
> =>
  action$.pipe(
    ofType(loadActions.START),
    switchMap(() =>
      concat(
        of(
          channelActions.start(),
          blockActions.start(),
          transactionActions.start()
        ),
        zip(
          action$.pipe(
            ofType(channelActions.DONE),
            take(1)
          ),
          action$.pipe(
            ofType(blockActions.DONE),
            take(1)
          ),
          action$.pipe(
            ofType(transactionActions.DONE),
            take(1)
          )
        ).pipe(mapTo(loadActions.done([])))
      ).pipe(takeUntil(action$.pipe(ofType(loadActions.STOP))))
    )
  );

export const stopLoadingEpic = (
  action$: Observable<IDashboardAction>
): Observable<IBlockAction | IChannelAction> =>
  action$.pipe(
    ofType(loadActions.STOP),
    switchMap(() =>
      of(channelActions.stop(), blockActions.stop(), transactionActions.stop())
    )
  );

export const loadEpics = [startLoadingEpic, stopLoadingEpic];
