import { combineEpics } from "redux-observable";

import { notificationEpics } from "./notification";

export const epic = combineEpics(...notificationEpics);
