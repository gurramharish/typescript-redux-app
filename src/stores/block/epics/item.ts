import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";

import { asLoaded, epics, IEntityState, IStart } from "../../entity";

import { IBlock } from "../states";

import { itemLoadActions } from "../actions/item";

import { blocks as data } from "../data";

export const itemLoadEpics = epics<IBlock, IEntityState<IBlock>>(
  itemLoadActions,
  (action: IStart<IBlock>) =>
    timer(1000).pipe(mapTo(data.map(block => asLoaded(block))[0]))
);
