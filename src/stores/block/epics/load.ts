import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";

import { asLoaded, epics, IEntityState } from "../../entity";

import { IBlock } from "../states";

import { loadActions } from "../actions/load";

import { blocks as data } from "../data";

export const loadEpics = epics<IBlock, Array<IEntityState<IBlock>>>(
  loadActions,
  timer(1000).pipe(mapTo(data.map(block => asLoaded(block))))
);
