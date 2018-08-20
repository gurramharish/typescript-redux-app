import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";

import { epics } from "../../entity";

import { IBlock } from "../states";

import { loadActions } from "../actions/load";

import { blocks as data } from "../data";

export const loadEpics = epics<IBlock, IBlock[]>(
  loadActions,
  timer(1000).pipe(mapTo(data))
);
