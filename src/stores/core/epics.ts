import { combineEpics } from "redux-observable";
import { IEpic, IEpics } from "../entity";

import { dashboardEpics } from "../dashboard";
import { notificationEpics } from "../notification";
import { routerEpics } from "../router";
import { transactionEpics } from "../transaction";

export function getEpic(epics: IEpics[]): IEpic<any, any> {
  const epic = combineEpics(
    ...[
      ...epics.reduce((eps, epicsx) => [...eps, ...epicsx.epics], []),
      ...dashboardEpics,
      ...notificationEpics,
      ...routerEpics,
      ...transactionEpics
    ]
  );
  return epic as IEpic<any, any>;
}
