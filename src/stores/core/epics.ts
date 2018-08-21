import { combineEpics } from "redux-observable";

import { blockEpics } from "../block";
import { channelEpics } from "../channel";
import { dashboardEpics } from "../dashboard";
import { notificationEpics } from "../notification";
import { routerEpics } from "../router";
import { transactionEpics } from "../transaction";

export const epic = combineEpics(
  ...[
    ...blockEpics,
    ...channelEpics,
    ...dashboardEpics,
    ...notificationEpics,
    ...routerEpics,
    ...transactionEpics
  ]
);
