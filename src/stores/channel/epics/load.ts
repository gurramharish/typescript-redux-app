import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";

import { asLoaded, epics, IEntityState, IStart } from "../../entity";

import { IChannel } from "../states";

import { loadActions } from "../actions/load";

import { channels as data } from "../data";

export const loadEpics = epics<IChannel, Array<IEntityState<IChannel>>>(
  loadActions,
  (action: IStart<IChannel>) =>
    timer(1000).pipe(mapTo(data.map(channel => asLoaded(channel))))
);
