import { combineEpics } from 'redux-observable';

import { startNotificationsEpic } from "./notification";

export const epic = combineEpics(startNotificationsEpic);