import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";

import { asLoaded, epics, IEntityState, IStart } from "../../entity";

import { ITransaction } from "../states";

import { listLoadActions } from "../actions/list";

import { transactions as data } from "../data";

export const listLoadEpics = epics<
  ITransaction,
  Array<IEntityState<ITransaction>>
>(listLoadActions, (action: IStart<ITransaction>) =>
  timer(1000).pipe(mapTo(data.map(transaction => asLoaded(transaction))))
);
