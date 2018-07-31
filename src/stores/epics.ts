import { combineEpics } from "redux-observable";

import { notificationEpics } from "./notification";
import { routerEpics } from "./router";

export const epic = combineEpics(...[...notificationEpics, ...routerEpics]);
