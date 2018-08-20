import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";

import { asLoaded, epics, IEntityState, IStart } from "../../entity";

import { IBlock, IBlockOptions } from "../states";

import { itemLoadActions } from "../actions/item";

import { blocks as data } from "../data";

export const itemLoadEpics = epics<IBlock, IEntityState<IBlock>, IBlockOptions>(
  itemLoadActions,
  (action: IStart<IBlock, IBlockOptions>) =>
    timer(1000).pipe(
      mapTo(
        data
          .filter(block => block.hash === action.options!.hash)
          .map(block => asLoaded(block))[0]
      )
    )
);
