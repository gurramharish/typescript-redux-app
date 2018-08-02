import { combineEpics } from "redux-observable";

import { channelEpics } from "./channel";
import { notificationEpics } from "./notification";
import { routerEpics } from "./router";

export const epic = combineEpics(
  ...[...channelEpics, ...notificationEpics, ...routerEpics]
);
