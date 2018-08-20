import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";

import { asLoaded, epics, IEntityState } from "../../entity";

import { ITransaction } from "../states";

import { loadActions } from "../actions/load";

import { transactions as data } from "../data";

export const loadEpics = epics<ITransaction, Array<IEntityState<ITransaction>>>(
  loadActions,
  timer(1000).pipe(mapTo(data.map(transaction => asLoaded(transaction))))
);
