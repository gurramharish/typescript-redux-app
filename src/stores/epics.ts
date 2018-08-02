import { combineEpics } from "redux-observable";

import { channelEpics } from "./channel";
import { notificationEpics } from "./notification";
import { routerEpics } from "./router";
import { transactionEpics } from "./transaction";

export const epic = combineEpics(
  ...[
    ...channelEpics,
    ...notificationEpics,
    ...routerEpics,
    ...transactionEpics
  ]
);
