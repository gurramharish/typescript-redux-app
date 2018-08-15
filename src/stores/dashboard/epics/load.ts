import { concat, Observable, of, zip } from "rxjs";
import { mapTo, switchMap, take, takeUntil } from "rxjs/operators";

import { ofType } from "redux-observable";

import { IBlockAction } from "../../block/actions";
import { startLoadingBlocks, stopLoadingBlocks } from "../../block/actions";
import { DONE_LOADING_BLOCKS } from "../../block/actions";

import { IChannelAction } from "../../channel/actions";
import {
  startLoadingChannels,
  stopLoadingChannels
} from "../../channel/actions";
import { DONE_LOADING_CHANNELS } from "../../channel/actions";

import { ITransactionAction } from "../../transaction/actions";
import {
  startLoadingTransactions,
  stopLoadingTransactions
} from "../../transaction/actions";
import { DONE_LOADING_TRANSACTIONS } from "../../transaction/actions";

import {
  IDoneLoadingDashboard,
  IStartLoadingDashboard,
  IStopLoadingDashboard
} from "../actions/load";

import {
  doneLoadingDashboard,
  START_LOADING_DASHBOARD,
  STOP_LOADING_DASHBOARD
} from "../actions/load";

export const startLoadingEpic = (
  action$: Observable<IStartLoadingDashboard | IStopLoadingDashboard>
): Observable<
  IBlockAction | IChannelAction | ITransactionAction | IDoneLoadingDashboard
> =>
  action$.pipe(
    ofType(START_LOADING_DASHBOARD),
    switchMap(() =>
      concat(
        of(
          startLoadingChannels(),
          startLoadingBlocks(),
          startLoadingTransactions()
        ),
        zip(
          action$.pipe(
            ofType(DONE_LOADING_CHANNELS),
            take(1)
          ),
          action$.pipe(
            ofType(DONE_LOADING_BLOCKS),
            take(1)
          ),
          action$.pipe(
            ofType(DONE_LOADING_TRANSACTIONS),
            take(1)
          )
        ).pipe(mapTo(doneLoadingDashboard()))
      ).pipe(takeUntil(action$.pipe(ofType(STOP_LOADING_DASHBOARD))))
    )
  );

export const stopLoadingEpic = (
  action$: Observable<IStopLoadingDashboard>
): Observable<IBlockAction | IChannelAction> =>
  action$.pipe(
    ofType(STOP_LOADING_DASHBOARD),
    switchMap(() =>
      of(stopLoadingChannels(), stopLoadingBlocks(), stopLoadingTransactions())
    )
  );

export const loadEpics = [startLoadingEpic, stopLoadingEpic];
