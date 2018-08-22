import { combineEpics } from "redux-observable";
import { IEffect, IEpic } from "../entity";

import { dashboardEpics } from "../dashboard";
import { notificationEpics } from "../notification";
import { routerEpics } from "../router";
import { transactionEpics } from "../transaction";

export function getEpic(effects: IEffect[]): IEpic<any, any> {
  const epics = effects.reduce((eps, effect) => [...eps, ...effect.epics], []);
  const epic = combineEpics(
    ...[
      ...epics,
      ...dashboardEpics,
      ...notificationEpics,
      ...routerEpics,
      ...transactionEpics
    ]
  );
  return epic as IEpic<any, any>;
}
