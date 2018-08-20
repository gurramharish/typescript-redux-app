import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";

import { asLoaded, epics, IEntityState, IStart } from "../../entity";

import { IBlock } from "../states";

import { listLoadActions } from "../actions/list";

import { blocks as data } from "../data";

export const listLoadEpics = epics<IBlock, Array<IEntityState<IBlock>>>(
  listLoadActions,
  (action: IStart<IBlock>) =>
    timer(1000).pipe(mapTo(data.map(block => asLoaded(block))))
);
