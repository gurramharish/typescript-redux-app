import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";

import { epics } from "../../entity";

import { IChannel } from "../states";

import { loadActions } from "../actions/load";

import { channels as data } from "../data";

export const loadEpics = epics<IChannel, IChannel[]>(
  loadActions,
  timer(1000).pipe(mapTo(data))
);
