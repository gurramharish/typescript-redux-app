import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";

import { asLoaded, epics, IEntityState, IStart } from "../../entity";

import { ITransaction } from "../states";

import { loadActions } from "../actions/load";

import { transactions as data } from "../data";

export const loadEpics = epics<ITransaction, Array<IEntityState<ITransaction>>>(
  loadActions,
  (action: IStart<ITransaction>) =>
    timer(1000).pipe(mapTo(data.map(transaction => asLoaded(transaction))))
);
