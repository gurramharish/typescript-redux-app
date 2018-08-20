import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";

import { asLoaded, epics, IEntityState } from "../../entity";

import { IBlock } from "../states";

import { itemLoadActions } from "../actions/item";

import { blocks as data } from "../data";

export const listLoadEpics = epics<IBlock, IEntityState<IBlock>>(
  itemLoadActions,
  timer(1000).pipe(mapTo(data.map(block => asLoaded(block))[0]))
);
