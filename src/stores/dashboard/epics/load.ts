import { concat, Observable, of, zip } from "rxjs";
import { mapTo, switchMap, take, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { IBlockAction } from "../../block/actions";
import { blockListActions } from "../../block/actions";

import { IChannelAction } from "../../channel/actions";
import { channelListActions } from "../../channel/actions";

import { ITransactionAction } from "../../transaction/actions";
import { transactionListActions } from "../../transaction/actions";

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
          channelListActions.start(),
          blockListActions.start(),
          transactionListActions.start()
        ),
        zip(
          action$.pipe(ofType(channelListActions.DONE), take(1)),
          action$.pipe(ofType(blockListActions.DONE), take(1)),
          action$.pipe(ofType(transactionListActions.DONE), take(1))
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
      of(
        channelListActions.stop(),
        blockListActions.stop(),
        transactionListActions.stop()
      )
    )
  );

export const loadEpics = [startLoadingEpic, stopLoadingEpic];
