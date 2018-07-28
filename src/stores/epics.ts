import { combineEpics } from "redux-observable";

import {
  startStopAddNotificationsEpic,
  startStopResetNotificationsEpic
} from "./notification";

export const epic = combineEpics(
  startStopAddNotificationsEpic,
  startStopResetNotificationsEpic
);
