import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";

import { epics } from "../../entity";

import { ITransaction } from "../states";

import { loadActions } from "../actions/load";

import { transactions as data } from "../data";

export const loadEpics = epics<ITransaction>(
  loadActions,
  timer(1000).pipe(mapTo(data))
);
